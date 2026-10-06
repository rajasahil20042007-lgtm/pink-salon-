import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';
import { saveAppointmentRequest } from '../data/appointmentStore';

interface BookingSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
  onNewBookingAdded?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  onClearPreselected,
  onNewBookingAdded
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || SALON_DATA.services[0].name,
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync if preselected service changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save to centralized appointment store for Admin Section to display
      saveAppointmentRequest({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        notes: formData.notes.trim() || undefined,
        source: 'WEBSITE'
      });

      setSubmitted(true);
      if (onClearPreselected) onClearPreselected();
      if (onNewBookingAdded) onNewBookingAdded();
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi, I'd like to book an appointment at Pink Salon.\n\nName: ${formData.name || 'Guest'}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nPreferred Time: ${formData.preferredTime}`
    );
    window.open(`https://wa.me/${SALON_DATA.whatsappRaw}?text=${text}`, '_blank');
  };

  // Min date today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            RESERVATIONS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            READY FOR YOUR TRANSFORMATION?
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Book your next appointment and experience beauty, redefined.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-[#FAF8F5] border border-[#D6CCC2] shadow-xl p-6 sm:p-10 lg:p-12 relative text-left">
          
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#F3E8EE] text-[#9D3D62] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-medium text-[#1C1917]">
                  Your appointment request has been received.
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] max-w-md mx-auto">
                  We'll contact you shortly to confirm your appointment at Pink Salon, Park Street.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="max-w-sm mx-auto p-4 bg-[#F5EFE6] border border-[#E7E2DA] text-xs text-[#44403C] space-y-1 text-left">
                <p><span className="font-semibold">Guest:</span> {formData.name}</p>
                <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                <p><span className="font-semibold">Service:</span> {formData.service}</p>
                <p><span className="font-semibold">Requested:</span> {formData.preferredDate} at {formData.preferredTime}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send details on WhatsApp</span>
                </button>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 border border-[#D6CCC2] hover:border-[#1C1917] text-[#1C1917] text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Full Name <span className="text-[#9D3D62]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Ananya Mukherjee"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.name ? 'border-red-500' : 'border-[#D6CCC2]'
                      } text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#9D3D62] transition-colors`}
                    />
                    <User className="w-4 h-4 text-[#A8A29E] absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Phone Number <span className="text-[#9D3D62]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.phone ? 'border-red-500' : 'border-[#D6CCC2]'
                      } text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#9D3D62] transition-colors`}
                    />
                    <Phone className="w-4 h-4 text-[#A8A29E] absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Select Service <span className="text-[#9D3D62]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D6CCC2] text-sm text-[#1C1917] focus:outline-none focus:border-[#9D3D62] transition-colors cursor-pointer"
                  >
                    <option value="The Pink Signature Experience">
                      The Pink Signature Experience (90 min • ₹2,999)
                    </option>
                    {SALON_DATA.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.duration} • ₹{s.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                    <option value="Custom Stylist Consultation">
                      Custom Stylist Consultation (Complimentary)
                    </option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Preferred Date <span className="text-[#9D3D62]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={today}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.preferredDate ? 'border-red-500' : 'border-[#D6CCC2]'
                      } text-sm text-[#1C1917] focus:outline-none focus:border-[#9D3D62] transition-colors`}
                    />
                  </div>
                  {errors.preferredDate && <p className="text-[11px] text-red-600">{errors.preferredDate}</p>}
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D6CCC2] text-sm text-[#1C1917] focus:outline-none focus:border-[#9D3D62] transition-colors cursor-pointer"
                  >
                    <option value="10:00 AM">10:00 AM - Morning Slot</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM - Afternoon Slot</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM - Evening Slot</option>
                    <option value="07:00 PM">07:00 PM - Late Evening Slot</option>
                  </select>
                </div>

                {/* Special Requests / Notes */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] block">
                    Special Requests or Preferred Artist (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention any allergies, hair history, or specific artist request..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D6CCC2] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#9D3D62] transition-colors"
                  />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-8 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:flex-1 py-4 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>BOOK VIA WHATSAPP</span>
                </button>
              </div>

              <p className="text-[11px] text-[#78716C] text-center pt-1">
                No upfront payment required. Cancellation or reschedule free up to 2 hours prior to slot.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
