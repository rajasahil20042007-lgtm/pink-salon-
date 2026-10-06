export interface AppointmentRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  source: 'WEBSITE' | 'WHATSAPP';
}

const STORAGE_KEY = 'pink_salon_appointment_requests';

// Initial realistic seed requests so the admin section immediately has data to inspect
const INITIAL_REQUESTS: AppointmentRequest[] = [
  {
    id: 'req-101',
    name: 'Srijita Sen',
    phone: '+91 98301 22445',
    service: 'Dimensional Hazel Balayage',
    preferredDate: '2026-10-08',
    preferredTime: '11:30 AM',
    notes: 'Requested consultation with Ananya Sharma. First time hair coloring.',
    status: 'CONFIRMED',
    createdAt: '2026-10-05T14:20:00Z',
    source: 'WEBSITE'
  },
  {
    id: 'req-102',
    name: 'Priyanka Dasgupta',
    phone: '+91 98740 55123',
    service: 'Bridal Makeup',
    preferredDate: '2026-10-15',
    preferredTime: '10:00 AM',
    notes: 'Wedding reception look. Would like to test foundation shades.',
    status: 'PENDING',
    createdAt: '2026-10-05T18:45:00Z',
    source: 'WEBSITE'
  },
  {
    id: 'req-103',
    name: 'Rajesh Agarwal',
    phone: '+91 99033 88120',
    service: 'Signature Haircut',
    preferredDate: '2026-10-07',
    preferredTime: '05:30 PM',
    notes: 'Preferred stylist: Arjun Das',
    status: 'PENDING',
    createdAt: '2026-10-05T20:10:00Z',
    source: 'WHATSAPP'
  },
  {
    id: 'req-104',
    name: 'Tanushree Bhattacharya',
    phone: '+91 98311 44299',
    service: 'The Pink Signature Experience',
    preferredDate: '2026-10-09',
    preferredTime: '01:00 PM',
    notes: 'Birthday self-care package with hair spa and hydra facial.',
    status: 'CONFIRMED',
    createdAt: '2026-10-05T21:05:00Z',
    source: 'WEBSITE'
  },
  {
    id: 'req-105',
    name: 'Kavita Ghosh',
    phone: '+91 94330 11987',
    service: 'Gel Nail Extensions',
    preferredDate: '2026-10-06',
    preferredTime: '04:00 PM',
    notes: 'French tip chrome finish if available.',
    status: 'COMPLETED',
    createdAt: '2026-10-04T11:15:00Z',
    source: 'WEBSITE'
  }
];

export function getAppointmentRequests(): AppointmentRequest[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_REQUESTS));
      return INITIAL_REQUESTS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_REQUESTS;
  }
}

export function saveAppointmentRequest(
  request: Omit<AppointmentRequest, 'id' | 'createdAt' | 'status'>
): AppointmentRequest {
  const current = getAppointmentRequests();
  const newRequest: AppointmentRequest = {
    ...request,
    id: `req-${Date.now().toString().slice(-5)}`,
    createdAt: new Date().toISOString(),
    status: 'PENDING'
  };
  const updated = [newRequest, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
  return newRequest;
}

export function updateAppointmentStatus(
  id: string,
  status: AppointmentRequest['status']
): AppointmentRequest[] {
  const current = getAppointmentRequests();
  const updated = current.map((item) =>
    item.id === id ? { ...item, status } : item
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update status in localStorage', e);
  }
  return updated;
}

export function deleteAppointmentRequest(id: string): AppointmentRequest[] {
  const current = getAppointmentRequests();
  const updated = current.filter((item) => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete in localStorage', e);
  }
  return updated;
}
