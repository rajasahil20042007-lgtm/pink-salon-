import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  User,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Trash2,
  MessageCircle,
  ArrowUpDown,
  Lock,
  KeyRound,
  Eye,
  RefreshCw,
  LogOut,
  CalendarCheck
} from 'lucide-react';
import {
  AppointmentRequest,
  getAppointmentRequests,
  updateAppointmentStatus,
  deleteAppointmentRequest
} from '../data/appointmentStore';
import { SALON_DATA } from '../data/salonConfig';

export const AdminSection: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('pink_salon_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [showPin, setShowPin] = useState(false);

  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'>('ALL');
  const [sortOrder, setSortOrder] = useState<'NEWEST' | 'OLDEST'>('NEWEST');
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Load requests on mount and on storage updates
  const reloadData = () => {
    setRequests(getAppointmentRequests());
  };

  useEffect(() => {
    reloadData();
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'pink_salon_appointment_requests') {
        reloadData();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin pin: 2026 or admin123
    const validPins = ['2026', 'admin123', 'pink2026'];
    if (validPins.includes(pinInput.trim())) {
      setIsAuthenticated(true);
      localStorage.setItem('pink_salon_admin_auth', 'true');
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Invalid passcode. Use 2026 to unlock.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('pink_salon_admin_auth');
  };

  const handleStatusChange = (id: string, newStatus: AppointmentRequest['status']) => {
    const updated = updateAppointmentStatus(id, newStatus);
    setRequests(updated);
    setActionNotice(`Appointment ${id} status updated to ${newStatus}`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  const executeDelete = (id: string) => {
    const updated = deleteAppointmentRequest(id);
    setRequests(updated);
    setDeleteConfirmId(null);
    setActionNotice(`Appointment request removed successfully.`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleWhatsAppCustomer = (req: AppointmentRequest) => {
    const cleanPhone = req.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hello ${req.name}, greetings from Pink Salon (Park Street). Regarding your appointment request for "${req.service}" on ${req.preferredDate} at ${req.preferredTime}: we are pleased to confirm your slot.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  // Filtered and sorted requests
  const filteredRequests = useMemo(() => {
    return requests
      .filter((r) => {
        if (statusFilter !== 'ALL' && r.status !== statusFilter) return false;
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          r.name.toLowerCase().includes(q) ||
          r.phone.toLowerCase().includes(q) ||
          r.service.toLowerCase().includes(q) ||
          (r.notes && r.notes.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime();
        const timeB = new Date(b.createdAt).getTime();
        return sortOrder === 'NEWEST' ? timeB - timeA : timeA - timeB;
      });
  }, [requests, statusFilter, searchQuery, sortOrder]);

  const stats = useMemo(() => {
    return {
      total: requests.length,
      pending: requests.filter((r) => r.status === 'PENDING').length,
      confirmed: requests.filter((r) => r.status === 'CONFIRMED').length,
      completed: requests.filter((r) => r.status === 'COMPLETED').length
    };
  }, [requests]);

  return (
    <section id="admin" className="py-20 lg:py-28 bg-[#F5EFE6]/40 border-t border-[#E7E2DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            <Lock className="w-3.5 h-3.5" />
            <span>MANAGEMENT CONSOLE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#1C1917]">
            SALON APPOINTMENT DESK
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Single centralized portal to review incoming booking requests, manage slot confirmations, and message clients.
          </p>
        </div>

        {/* Lock Screen if not authenticated */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-[#FAF8F5] border border-[#D6CCC2] shadow-xl p-8 sm:p-10 text-left relative">
            <div className="w-12 h-12 bg-[#F3E8EE] text-[#9D3D62] rounded-full flex items-center justify-center mb-5">
              <KeyRound className="w-6 h-6" />
            </div>

            <div className="space-y-1 mb-6">
              <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                Salon Staff Access
              </h3>
              <p className="text-xs text-[#78716C]">
                Enter receptionist passcode to manage incoming booking requests.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                  Staff Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPin ? 'text' : 'password'}
                    placeholder="Enter 2026"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      if (pinError) setPinError('');
                    }}
                    className="w-full px-4 py-3 bg-white border border-[#D6CCC2] text-sm text-[#1C1917] focus:outline-none focus:border-[#9D3D62] tracking-widest font-mono"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-3.5 top-3.5 text-[#78716C] hover:text-[#1C1917] text-xs cursor-pointer"
                  >
                    {showPin ? 'Hide' : 'Show'}
                  </button>
                </div>
                {pinError && <p className="text-[11px] text-red-600">{pinError}</p>}
                <p className="text-[11px] text-[#A8A29E] pt-0.5">
                  Default access key for demonstration: <code className="bg-[#EAE5DC] px-1.5 py-0.5 text-[#1C1917] font-mono">2026</code>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1C1917] hover:bg-[#9D3D62] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                ACCESS APPOINTMENTS
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Dashboard */
          <div className="bg-[#FAF8F5] border border-[#D6CCC2] shadow-xl overflow-hidden text-left">
            
            {/* Top Toolbar */}
            <div className="p-5 sm:p-6 bg-[#1C1917] text-white flex flex-wrap items-center justify-between gap-4 border-b border-[#292524]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#9D3D62] flex items-center justify-center text-white font-serif text-lg">
                  P
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-wide">
                    Live Bookings Stream
                  </h3>
                  <p className="text-[11px] text-white/60">
                    Showing all real-time client submissions and requested slots
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={reloadData}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs tracking-wider rounded-none transition-colors cursor-pointer"
                  title="Reload Latest Requests"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#9D3D62]/40 hover:bg-[#9D3D62] text-white text-xs tracking-wider rounded-none transition-colors cursor-pointer border border-[#9D3D62]/50"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock Console</span>
                </button>
              </div>
            </div>

            {/* Notification Toast */}
            {actionNotice && (
              <div className="bg-[#F3E8EE] text-[#9D3D62] px-6 py-2.5 text-xs font-medium border-b border-[#E7D0DB] flex items-center justify-between animate-in fade-in duration-200">
                <span>{actionNotice}</span>
                <button onClick={() => setActionNotice(null)} className="cursor-pointer text-xs">✕</button>
              </div>
            )}

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E7E2DA] border-b border-[#E7E2DA] bg-[#FAF8F5]">
              <div className="p-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#78716C] block">
                  Total Requests
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] tabular-nums">
                  {stats.total}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] text-amber-700 block">
                  Pending Review
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-amber-800 tabular-nums">
                  {stats.pending}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-700 block">
                  Confirmed Slots
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-emerald-800 tabular-nums">
                  {stats.confirmed}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#78716C] block">
                  Completed
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#57534E] tabular-nums">
                  {stats.completed}
                </span>
              </div>
            </div>

            {/* Filters & Search Control */}
            <div className="p-4 sm:p-5 bg-[#FAF6F0] border-b border-[#E7E2DA] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search by client name, mobile, service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-[#D6CCC2] text-xs text-[#1C1917] focus:outline-none focus:border-[#9D3D62]"
                />
                <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-2.5 pointer-events-none" />
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStatusFilter(filter)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium cursor-pointer border ${
                      statusFilter === filter
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-white text-[#57534E] border-[#D6CCC2] hover:border-[#9D3D62]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}

                {/* Sort Toggle */}
                <button
                  onClick={() => setSortOrder(sortOrder === 'NEWEST' ? 'OLDEST' : 'NEWEST')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#D6CCC2] hover:border-[#1C1917] text-[11px] uppercase tracking-wider text-[#1C1917] cursor-pointer ml-1"
                >
                  <ArrowUpDown className="w-3 h-3 text-[#9D3D62]" />
                  <span>{sortOrder === 'NEWEST' ? 'Newest First' : 'Oldest First'}</span>
                </button>
              </div>

            </div>

            {/* Requests Table / Cards */}
            <div className="overflow-x-auto">
              {filteredRequests.length === 0 ? (
                <div className="p-12 text-center text-[#78716C] space-y-2">
                  <CalendarCheck className="w-10 h-10 mx-auto text-[#A8A29E] stroke-1" />
                  <p className="text-sm font-medium">No appointment requests found matching filters.</p>
                  <p className="text-xs text-[#A8A29E]">Try clearing your search query or status filter.</p>
                </div>
              ) : (
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#E7E2DA] bg-[#EFECE6]/60 text-[10px] uppercase tracking-[0.16em] text-[#78716C]">
                      <th className="py-3 px-4 font-semibold">Client</th>
                      <th className="py-3 px-4 font-semibold">Service</th>
                      <th className="py-3 px-4 font-semibold">Requested Slot</th>
                      <th className="py-3 px-4 font-semibold">Status</th>
                      <th className="py-3 px-4 font-semibold">Notes</th>
                      <th className="py-3 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE6]">
                    {filteredRequests.map((req) => (
                      <tr
                        key={req.id}
                        className="hover:bg-white/80 transition-colors group"
                      >
                        {/* Client details */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="font-semibold text-sm text-[#1C1917]">
                            {req.name}
                          </div>
                          <div className="text-[#78716C] flex items-center gap-1.5 mt-0.5">
                            <span>{req.phone}</span>
                            <span className="text-[10px] text-[#A8A29E]">({req.source})</span>
                          </div>
                        </td>

                        {/* Service Name */}
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-[#1C1917]">
                            {req.service}
                          </div>
                          <div className="text-[10px] text-[#9D3D62] uppercase tracking-wider font-semibold">
                            Received {new Date(req.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Date & Time */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 font-medium text-[#1C1917]">
                            <Calendar className="w-3.5 h-3.5 text-[#9D3D62]" />
                            <span>{req.preferredDate}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#78716C] mt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>{req.preferredTime}</span>
                          </div>
                        </td>

                        {/* Status Select */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <select
                            value={req.status}
                            onChange={(e) => handleStatusChange(req.id, e.target.value as AppointmentRequest['status'])}
                            className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider border rounded-none cursor-pointer focus:outline-none ${
                              req.status === 'CONFIRMED'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : req.status === 'PENDING'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : req.status === 'COMPLETED'
                                ? 'bg-slate-100 text-slate-700 border-slate-300'
                                : 'bg-rose-50 text-rose-800 border-rose-300'
                            }`}
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="CONFIRMED">CONFIRMED</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </td>

                        {/* Notes */}
                        <td className="py-3.5 px-4 max-w-xs">
                          <p className="text-xs text-[#78716C] line-clamp-2" title={req.notes || 'No extra notes'}>
                            {req.notes || <span className="text-[#A8A29E] italic">None</span>}
                          </p>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* WhatsApp Button */}
                            <button
                              type="button"
                              onClick={() => handleWhatsAppCustomer(req)}
                              className="p-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors cursor-pointer border border-[#25D366]/30"
                              title="Chat with client on WhatsApp"
                              aria-label="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5 pointer-events-none" />
                            </button>

                            {/* Confirm Quick Button */}
                            {req.status === 'PENDING' && (
                              <button
                                type="button"
                                onClick={() => handleStatusChange(req.id, 'CONFIRMED')}
                                className="px-2 py-1 bg-[#1C1917] hover:bg-emerald-700 text-white text-[10px] uppercase font-semibold transition-colors cursor-pointer"
                                title="Quick Confirm"
                              >
                                Confirm
                              </button>
                            )}

                            {/* Delete Button with inline confirmation without blocking window.confirm */}
                            {deleteConfirmId === req.id ? (
                              <div className="inline-flex items-center gap-1 bg-red-50 p-0.5 border border-red-200">
                                <button
                                  type="button"
                                  onClick={() => executeDelete(req.id)}
                                  className="px-1.5 py-0.5 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold uppercase transition-colors cursor-pointer"
                                  title="Confirm removal"
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDeleteConfirmId(null)}
                                  className="px-1.5 py-0.5 bg-stone-200 hover:bg-stone-300 text-stone-700 text-[10px] font-bold uppercase transition-colors cursor-pointer"
                                  title="Cancel"
                                >
                                  No
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setDeleteConfirmId(req.id)}
                                className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                title="Delete Request"
                                aria-label="Delete Request"
                              >
                                <Trash2 className="w-3.5 h-3.5 pointer-events-none" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Bottom Footer Info */}
            <div className="p-4 bg-[#FAF6F0] border-t border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78716C] gap-2">
              <p>
                Showing {filteredRequests.length} of {requests.length} total client bookings • Data stored in browser storage
              </p>
              <p className="text-[#9D3D62] font-medium">
                Pink Salon Park Street Concierge Desk
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
