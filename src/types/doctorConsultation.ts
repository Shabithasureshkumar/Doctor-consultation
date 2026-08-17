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

export interface PatientProfile {
  id: string
  name: string
  badge: string
  born: string
  email: string
  phone: string
  avatar: string
  vitals: VitalMetric[]
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
