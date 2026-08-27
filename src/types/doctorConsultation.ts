export interface FamilyMember {
  id: string
  name: string
  relation: string
  avatar: string
}

export interface VitalMetric {
  id: string
  label: string
  value: string
  /** Border/icon tints from the Figma vitals grid, as Tailwind classes. */
  borderClass: string
  iconClass: string
}

export interface AcuteVital {
  id: string
  label: string
  shortLabel: string
  value: string
  unit: string
  status: 'normal' | 'attention' | 'high'
}

export interface ClinicalAlert {
  id: string
  type: 'allergy' | 'chronic' | 'warning'
  label: string
  iconType: 'allergy' | 'chronic' | 'warning'
}

export interface SymptomItem {
  id: string
  name: string
  severity: 'Mild' | 'Moderate' | 'Severe'
  duration: string
  onset: 'Sudden' | 'Gradual'
}

export interface Medication {
  name: string
  dosage: string
  frequency: string
  prescribedBy: string
}

export interface PastConsultation {
  id: string
  date: string
  doctorName: string
  specialty: string
  reason: string
  diagnosis: string
  prescriptionSummary: string
  notes: string
}

export interface MedicalHistory {
  currentMedications: Medication[]
  allergies: string[]
  chronicConditions: string[]
  pastMedicalHistory: string[]
  surgicalHistory: string[]
}

export interface PatientProfile {
  id: string
  name: string
  badge: string
  born: string
  email: string
  phone: string
  avatar: string
  vitals: VitalMetric[]
  acuteVitals: AcuteVital[]
  vitalsLastUpdated: string
  clinicalAlerts: ClinicalAlert[]
  medicalHistory: MedicalHistory
  previousConsultations: PastConsultation[]
  defaultSymptoms: SymptomItem[]
  defaultReason: string
}

export interface BookingMetric {
  id: string
  label: string
  value: string
  /** Renders the value with the brand gradient (consultation fee). */
  emphasised?: boolean
}

export interface Doctor {
  name: string
  badge: string
  specialty: string
  experience: string
  rating: number
  tags: string[]
  avatar: string
}

export interface FeeLine {
  id: string
  label: string
  value: string
}

export interface TrustBenefit {
  id: string
  title: string
  subtitle: string
}

export interface LabTrendItem {
  testName: string
  value: string
  unit: string
  referenceRange: string
  status: 'normal' | 'elevated' | 'low'
  date: string
}

export interface AIPreVisitSummaryData {
  patientName: string
  doctorName: string
  appointmentDate: string
  appointmentTime: string
  mainComplaint: string
  symptomTimeline: string
  detectedSymptoms: SymptomItem[]
  relevantHistory: string[]
  recentLabTrends: LabTrendItem[]
  observations: string[]
}
