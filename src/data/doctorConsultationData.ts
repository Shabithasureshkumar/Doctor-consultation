import doctorAvatar from '../assets/images/doctor-sarah-jenkins.jpg'
import familyLinda from '../assets/images/family-linda.png'
import familyMichael from '../assets/images/family-michael.png'
import familySarah from '../assets/images/family-sarah.png'
import patientSarah from '../assets/images/patient-sarah.png'
import type {
  AIPreVisitSummaryData,
  BookingMetric,
  Doctor,
  FamilyMember,
  FeeLine,
  PatientProfile,
  SymptomItem,
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

export const PATIENTS_DATA: Record<string, PatientProfile> = {
  sarah: {
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
    acuteVitals: [
      { id: 'bp', label: 'Blood Pressure', shortLabel: 'BP', value: '120/80', unit: 'mmHg', status: 'normal' },
      { id: 'hr', label: 'Heart Rate', shortLabel: 'Pulse', value: '72', unit: 'bpm', status: 'normal' },
      { id: 'spo2', label: 'Oxygen Level', shortLabel: 'SpO₂', value: '98', unit: '%', status: 'normal' },
      { id: 'temp', label: 'Temperature', shortLabel: 'Temp', value: '98.6', unit: '°F', status: 'normal' },
    ],
    vitalsLastUpdated: 'Today, 6:45 PM',
    clinicalAlerts: [
      { id: 'allergy-penicillin', type: 'allergy', label: 'Penicillin Allergy', iconType: 'allergy' },
      { id: 'chronic-t2d', type: 'chronic', label: 'Type 2 Diabetes', iconType: 'chronic' },
    ],
    medicalHistory: {
      currentMedications: [
        { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily (with meals)', prescribedBy: 'Dr. A. Vance' },
        { name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once daily', prescribedBy: 'Self-supplement' },
      ],
      allergies: ['Penicillin (Moderate rash & pruritus)', 'Tree pollen (Seasonal rhinitis)'],
      chronicConditions: ['Type 2 Diabetes (Diagnosed 2021)', 'Mild Migraine episodes'],
      pastMedicalHistory: ['Migraine with aura (2020)', 'COVID-19 recovery (2022)'],
      surgicalHistory: ['Laparoscopic Appendectomy (2018)'],
    },
    previousConsultations: [
      {
        id: 'c1',
        date: 'Apr 12, 2026',
        doctorName: 'Dr. Sarah Jenkins',
        specialty: 'Neurology',
        reason: 'Recurrent tension headache evaluation',
        diagnosis: 'Episodic Tension Headache (G44.209)',
        prescriptionSummary: 'Sumatriptan 50mg PRN, Magnesium glycinate 400mg daily',
        notes: 'Advised hydration, screen breaks, and headache trigger diary.',
      },
      {
        id: 'c2',
        date: 'Jan 15, 2026',
        doctorName: 'Dr. Robert Sterling',
        specialty: 'Internal Medicine',
        reason: 'Routine quarterly diabetes checkup',
        diagnosis: 'Type 2 Diabetes Mellitus without complications',
        prescriptionSummary: 'Metformin 500mg renewed',
        notes: 'HbA1c steady at 6.4%. Blood pressure within optimal limits.',
      },
    ],
    defaultSymptoms: [
      { id: 's1', name: 'Headache', severity: 'Moderate', duration: '4 days', onset: 'Gradual' },
      { id: 's2', name: 'Fatigue', severity: 'Mild', duration: '1 week', onset: 'Gradual' },
      { id: 's3', name: 'Stress', severity: 'Moderate', duration: '2 weeks', onset: 'Gradual' },
    ],
    defaultReason: '',
  },

  michael: {
    id: 'michael',
    name: 'Michael Johnson',
    badge: 'Family Dependent',
    born: 'Born: Aug 21, 1961 (63 Years)',
    email: 'michael.j@example.com',
    phone: '+1 (555) 234- 8902',
    avatar: familyMichael,
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
        value: '178cm',
        borderClass: 'border-[rgba(41,98,208,0.30)]',
        iconClass: 'text-[#2962D0]',
      },
      {
        id: 'weight',
        label: 'Weight',
        value: '76kg',
        borderClass: 'border-[rgba(28,42,227,0.30)]',
        iconClass: 'text-[#1C2AE3]',
      },
      {
        id: 'bmi',
        label: 'BMI Index',
        value: '24.0',
        borderClass: 'border-[rgba(208,26,26,0.30)]',
        iconClass: 'text-[#D01A1A]',
      },
    ],
    acuteVitals: [
      { id: 'bp', label: 'Blood Pressure', shortLabel: 'BP', value: '132/86', unit: 'mmHg', status: 'attention' },
      { id: 'hr', label: 'Heart Rate', shortLabel: 'Pulse', value: '78', unit: 'bpm', status: 'normal' },
      { id: 'spo2', label: 'Oxygen Level', shortLabel: 'SpO₂', value: '96', unit: '%', status: 'normal' },
      { id: 'temp', label: 'Temperature', shortLabel: 'Temp', value: '98.4', unit: '°F', status: 'normal' },
    ],
    vitalsLastUpdated: 'Today, 5:30 PM',
    clinicalAlerts: [
      { id: 'allergy-sulfa', type: 'allergy', label: 'Sulfa Allergy', iconType: 'allergy' },
      { id: 'chronic-htn', type: 'chronic', label: 'Hypertension', iconType: 'chronic' },
    ],
    medicalHistory: {
      currentMedications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily (morning)', prescribedBy: 'Dr. C. Evans' },
        { name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily (night)', prescribedBy: 'Dr. C. Evans' },
      ],
      allergies: ['Sulfonamides (Severe hives)'],
      chronicConditions: ['Primary Hypertension', 'Mild Osteoarthritis in right knee'],
      pastMedicalHistory: ['Knee arthroscopy (2019)'],
      surgicalHistory: ['Right Knee Meniscus Repair (2019)'],
    },
    previousConsultations: [
      {
        id: 'c3',
        date: 'Feb 20, 2026',
        doctorName: 'Dr. Christopher Evans',
        specialty: 'Cardiology',
        reason: 'Blood pressure routine check and lipid review',
        diagnosis: 'Controlled Essential Hypertension',
        prescriptionSummary: 'Lisinopril 10mg continued',
        notes: 'BP improved. Instructed to maintain low sodium diet.',
      },
    ],
    defaultSymptoms: [
      { id: 's4', name: 'Joint Pain', severity: 'Moderate', duration: '3 weeks', onset: 'Gradual' },
      { id: 's5', name: 'Dizziness', severity: 'Mild', duration: '2 days', onset: 'Sudden' },
    ],
    defaultReason: 'Occasional mild dizziness and lower back stiffness after morning walks.',
  },

  linda: {
    id: 'linda',
    name: 'Linda Johnson',
    badge: 'Family Dependent',
    born: 'Born: Nov 3, 1964 (60 Years)',
    email: 'linda.j@example.com',
    phone: '+1 (555) 234- 8903',
    avatar: familyLinda,
    vitals: [
      {
        id: 'blood',
        label: 'Blood Group',
        value: 'O+',
        borderClass: 'border-[rgba(216,80,27,0.30)]',
        iconClass: 'text-[#D8501B]',
      },
      {
        id: 'height',
        label: 'Height',
        value: '160cm',
        borderClass: 'border-[rgba(41,98,208,0.30)]',
        iconClass: 'text-[#2962D0]',
      },
      {
        id: 'weight',
        label: 'Weight',
        value: '62kg',
        borderClass: 'border-[rgba(28,42,227,0.30)]',
        iconClass: 'text-[#1C2AE3]',
      },
      {
        id: 'bmi',
        label: 'BMI Index',
        value: '24.2',
        borderClass: 'border-[rgba(208,26,26,0.30)]',
        iconClass: 'text-[#D01A1A]',
      },
    ],
    acuteVitals: [
      { id: 'bp', label: 'Blood Pressure', shortLabel: 'BP', value: '118/76', unit: 'mmHg', status: 'normal' },
      { id: 'hr', label: 'Heart Rate', shortLabel: 'Pulse', value: '68', unit: 'bpm', status: 'normal' },
      { id: 'spo2', label: 'Oxygen Level', shortLabel: 'SpO₂', value: '99', unit: '%', status: 'normal' },
      { id: 'temp', label: 'Temperature', shortLabel: 'Temp', value: '98.8', unit: '°F', status: 'normal' },
    ],
    vitalsLastUpdated: 'Today, 4:15 PM',
    clinicalAlerts: [
      { id: 'allergy-aspirin', type: 'warning', label: 'Aspirin Sensitivity', iconType: 'warning' },
      { id: 'chronic-osteo', type: 'chronic', label: 'Osteopenia', iconType: 'chronic' },
    ],
    medicalHistory: {
      currentMedications: [
        { name: 'Calcium + D3', dosage: '600mg', frequency: 'Twice daily', prescribedBy: 'Dr. H. Adams' },
        { name: 'Melatonin', dosage: '3mg', frequency: 'PRN at bedtime', prescribedBy: 'Self-supplement' },
      ],
      allergies: ['Aspirin (Stomach irritation & mild bronchospasm)'],
      chronicConditions: ['Osteopenia (Dexa 2023)'],
      pastMedicalHistory: ['Seasonal allergic conjunctivitis'],
      surgicalHistory: ['None reported'],
    },
    previousConsultations: [
      {
        id: 'c4',
        date: 'Mar 5, 2026',
        doctorName: 'Dr. Helen Adams',
        specialty: 'Endocrinology',
        reason: 'Bone density checkup and supplement review',
        diagnosis: 'Age-related Osteopenia',
        prescriptionSummary: 'Calcium + Vitamin D3 supplements renewed',
        notes: 'Recommended weight-bearing exercises and DEXA follow-up in 12 months.',
      },
    ],
    defaultSymptoms: [
      { id: 's6', name: 'Insomnia', severity: 'Moderate', duration: '2 weeks', onset: 'Gradual' },
      { id: 's7', name: 'Fatigue', severity: 'Mild', duration: '5 days', onset: 'Gradual' },
    ],
    defaultReason: 'Difficulty falling and staying asleep through the night for the past 2 weeks.',
  },
}

export const PATIENT = PATIENTS_DATA.sarah

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

export const INITIAL_SYMPTOMS: SymptomItem[] = [
  { id: 's1', name: 'Headache', severity: 'Moderate', duration: '4 days', onset: 'Gradual' },
  { id: 's2', name: 'Fatigue', severity: 'Mild', duration: '1 week', onset: 'Gradual' },
  { id: 's3', name: 'Stress', severity: 'Moderate', duration: '2 weeks', onset: 'Gradual' },
]

export const SYMPTOM_SUGGESTIONS = [
  'Headache',
  'Fatigue',
  'Stress',
  'Dizziness',
  'Fever',
  'Cough',
  'Nausea',
  'Insomnia',
  'Back pain',
  'Sore throat',
  'Chest tightness',
  'Migraine',
  'Joint Pain',
  'Shortness of breath',
  'Neck stiffness',
  'Allergy',
]

export const NAV_ITEMS = [
  'Dashboard',
  'Appointment',
  'Patient',
  'Reports',
  'Chats',
  'Billing',
] as const

export const SAMPLE_AI_SUMMARY: AIPreVisitSummaryData = {
  patientName: 'Sarah Johnson',
  doctorName: 'Dr. Sarah Jenkins',
  appointmentDate: 'Mon, Jun 1, 2026',
  appointmentTime: '7:30 PM (40 mins)',
  mainComplaint:
    'Patient reports moderate throbbing frontal headaches persisting for 4 days with secondary photophobia and mild daytime fatigue.',
  symptomTimeline:
    'Onset 4 days ago; gradual escalation in intensity during late afternoons. Correlates with elevated work stress and screen exposure.',
  detectedSymptoms: [
    { id: 's1', name: 'Headache', severity: 'Moderate', duration: '4 days', onset: 'Gradual' },
    { id: 's2', name: 'Fatigue', severity: 'Mild', duration: '1 week', onset: 'Gradual' },
    { id: 's3', name: 'Stress', severity: 'Moderate', duration: '2 weeks', onset: 'Gradual' },
  ],
  relevantHistory: [
    'Past history of tension headaches managed with Sumatriptan PRN in 2024.',
    'Type 2 Diabetes on stable Metformin 500mg BID regimen.',
    'Documented Penicillin allergy (Moderate rash).',
  ],
  recentLabTrends: [
    {
      testName: 'Fasting Blood Glucose',
      value: '112',
      unit: 'mg/dL',
      referenceRange: '70 - 99 mg/dL',
      status: 'elevated',
      date: 'May 10, 2026',
    },
    {
      testName: 'Hemoglobin A1c (HbA1c)',
      value: '6.4',
      unit: '%',
      referenceRange: '< 5.7% (Target < 7.0%)',
      status: 'normal',
      date: 'May 10, 2026',
    },
    {
      testName: 'Serum Ferritin',
      value: '42',
      unit: 'ng/mL',
      referenceRange: '13 - 150 ng/mL',
      status: 'normal',
      date: 'May 10, 2026',
    },
    {
      testName: 'Complete Blood Count (CBC)',
      value: 'Normal Platelets & RBC',
      unit: 'Indices',
      referenceRange: 'Within range',
      status: 'normal',
      date: 'May 10, 2026',
    },
  ],
  observations: [
    'No red-flag neurologic indicators (e.g., sudden thunderclap onset, focal deficits, or fever) reported.',
    'Vitals remain within normal baseline (BP 120/80, SpO2 98%, HR 72).',
    'AI recommends differential consideration between tension-type headache vs. migraine without aura.',
  ],
}
