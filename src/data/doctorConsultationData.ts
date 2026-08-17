import doctorAvatar from '../assets/images/doctor-sarah-jenkins.jpg'
import familyLinda from '../assets/images/family-linda.png'
import familyMichael from '../assets/images/family-michael.png'
import familySarah from '../assets/images/family-sarah.png'
import patientSarah from '../assets/images/patient-sarah.png'
import type {
  BookingMetric,
  Doctor,
  FamilyMember,
  FeeLine,
  PatientProfile,
  TrustBenefit,
} from '../types/doctorConsultation'

export const DOCTOR: Doctor = {
  name: 'Dr. Sarah Jenkins',
  badge: 'Senior Neurologist',
  specialty: 'Family Medicine',
  experience: '12+ Years Exp.',
  rating: 4.8,
  tags: ['Available today', 'Highly rated'],
  avatar: doctorAvatar,
}

export const BOOKING_METRICS: BookingMetric[] = [
  { id: 'date', label: 'Date', value: 'Mon, Jun 1' },
  { id: 'time', label: 'Time', value: '7:30 PM' },
  { id: 'duration', label: 'Duration', value: '40 mins' },
  { id: 'fee', label: 'Consultation Fee', value: '$44.00', emphasised: true },
]

export const FAMILY_MEMBERS: FamilyMember[] = [
  { id: 'sarah', name: 'Sarah Johnson', relation: 'MySelf', avatar: familySarah },
  { id: 'michael', name: 'Michael Johnson', relation: 'Dad', avatar: familyMichael },
  { id: 'linda', name: 'Linda Johnson', relation: 'Mom', avatar: familyLinda },
]

export const PATIENT: PatientProfile = {
  id: 'sarah',
  name: 'Sarah Johnson',
  badge: 'Primary Patient',
  born: 'Born: May 14, 1992 (32 Years)',
  email: 'sarah.j@example.com',
  phone: '+1 (555) 234- 8901',
  avatar: patientSarah,
  vitals: [
    {
      id: 'blood',
      label: 'Blood Group',
      value: 'A+',
      borderClass: 'border-[rgba(216,80,27,0.30)]',
      iconClass: 'text-[#D8501B]',
    },
    {
      id: 'height',
      label: 'Height',
      value: '165cm',
      borderClass: 'border-[rgba(41,98,208,0.30)]',
      iconClass: 'text-[#2962D0]',
    },
    {
      id: 'weight',
      label: 'Weight',
      value: '58kg',
      borderClass: 'border-[rgba(28,42,227,0.30)]',
      iconClass: 'text-[#1C2AE3]',
    },
    {
      id: 'bmi',
      label: 'BMI Index',
      value: '21.3',
      borderClass: 'border-[rgba(208,26,26,0.30)]',
      iconClass: 'text-[#D01A1A]',
    },
  ],
}

export const FEE_LINES: FeeLine[] = [
  { id: 'doctor', label: 'Doctor Fees', value: '$44.00' },
  { id: 'platform', label: 'Platform Fees', value: '$5.00' },
  { id: 'service', label: 'Service Charges', value: '$0.00' },
  { id: 'tax', label: 'Tax', value: '$0.00' },
]

export const TOTAL_AMOUNT = '$49.00'

export const TRUST_BENEFITS: TrustBenefit[] = [
  { id: 'instant', title: 'Instant Booking', subtitle: 'Confirmed in seconds' },
  { id: 'support', title: '24/7 Support', subtitle: "We're here anytime" },
  { id: 'hipaa', title: 'HIPAA Secure', subtitle: 'Your data is protected' },
  { id: 'specialists', title: 'Top Specialists', subtitle: 'Verified experts' },
]

export const INITIAL_SYMPTOMS = ['Headache', 'Fatigue', 'Stress']

export const NAV_ITEMS = [
  'Dashboard',
  'Appointment',
  'Patient',
  'Reports',
  'Chats',
  'Billing',
] as const
