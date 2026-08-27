import { useCallback, useState } from 'react'
import { AIIntakeAssistant } from '../components/doctor-consultation/AIIntakeAssistant'
import { AIPreVisitSummaryModal } from '../components/doctor-consultation/AIPreVisitSummaryModal'
import { AddFamilyMemberModal } from '../components/doctor-consultation/AddFamilyMemberModal'
import { BookingDetails } from '../components/doctor-consultation/BookingDetails'
import { BookingSuccessModal } from '../components/doctor-consultation/BookingSuccessModal'
import { ConfirmationSection } from '../components/doctor-consultation/ConfirmationSection'
import { ConsultationHero } from '../components/doctor-consultation/ConsultationHero'
import { FamilyMembers } from '../components/doctor-consultation/FamilyMembers'
import { HardwareTestModal } from '../components/doctor-consultation/HardwareTestModal'
import { Header } from '../components/doctor-consultation/Header'
import { ManageAppointmentModal } from '../components/doctor-consultation/ManageAppointmentModal'
import { MedicalHistoryModal } from '../components/doctor-consultation/MedicalHistoryModal'
import { PatientProfile } from '../components/doctor-consultation/PatientProfile'
import { PaymentSummary } from '../components/doctor-consultation/PaymentSummary'
import { PreviousVisitsModal } from '../components/doctor-consultation/PreviousVisitsModal'
import { StickyConfirmationBar } from '../components/doctor-consultation/StickyConfirmationBar'
import { SymptomDetailModal } from '../components/doctor-consultation/SymptomDetailModal'
import { TrustBenefits } from '../components/doctor-consultation/TrustBenefits'

import {
  DOCTOR,
  FAMILY_MEMBERS,
  FEE_LINES,
  PATIENTS_DATA,
  SAMPLE_AI_SUMMARY,
  TOTAL_AMOUNT,
} from '../data/doctorConsultationData'
import type {
  BookingMetric,
  FamilyMember,
  SymptomItem,
} from '../types/doctorConsultation'

export function DoctorConsultation() {
  // Family & Patient State
  const [familyMembersList, setFamilyMembersList] = useState<FamilyMember[]>(FAMILY_MEMBERS)
  const [selectedMemberId, setSelectedMemberId] = useState<string>(FAMILY_MEMBERS[0].id)
  const activePatient = PATIENTS_DATA[selectedMemberId] || PATIENTS_DATA.sarah

  // Clinical Symptoms & Reason
  const [symptoms, setSymptoms] = useState<SymptomItem[]>(activePatient.defaultSymptoms)
  const [reason, setReason] = useState<string>(activePatient.defaultReason)

  // Booking Schedule
  const [appointmentDate, setAppointmentDate] = useState('Mon, Jun 1')
  const [appointmentTime, setAppointmentTime] = useState('7:30 PM')

  // Booking metrics state
  const bookingMetrics: BookingMetric[] = [
    { id: 'date', label: 'Date', value: appointmentDate },
    { id: 'time', label: 'Time', value: appointmentTime },
    { id: 'duration', label: 'Duration', value: '40 mins' },
    { id: 'fee', label: 'Consultation Fee', value: '$44.00', emphasised: true },
  ]

  // Modals & Dialogs State
  const [isAISummaryOpen, setIsAISummaryOpen] = useState(false)
  const [isMedicalHistoryOpen, setIsMedicalHistoryOpen] = useState(false)
  const [isPreviousVisitsOpen, setIsPreviousVisitsOpen] = useState(false)
  const [isManageAppointmentOpen, setIsManageAppointmentOpen] = useState(false)
  const [isHardwareTestOpen, setIsHardwareTestOpen] = useState(false)
  const [isAddFamilyMemberOpen, setIsAddFamilyMemberOpen] = useState(false)
  const [selectedSymptomForDetail, setSelectedSymptomForDetail] = useState<SymptomItem | null>(null)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  // Toast Notification
  const [toast, setToast] = useState<string | null>(null)

  const notify = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => {
      setToast((current) => (current === message ? null : current))
    }, 4000)
  }, [])

  // Dynamic Family Switcher Handler
  const handleSelectMember = useCallback((id: string) => {
    setSelectedMemberId(id)
    const targetPatient = PATIENTS_DATA[id]
    if (targetPatient) {
      setSymptoms(targetPatient.defaultSymptoms)
      setReason(targetPatient.defaultReason)
      notify(`Loaded profile for ${targetPatient.name}`)
    }
  }, [notify])

  // Add Family Member Handler
  const handleAddFamilyMember = useCallback((newMember: FamilyMember) => {
    setFamilyMembersList((curr) => [...curr, newMember])
    PATIENTS_DATA[newMember.id] = {
      id: newMember.id,
      name: newMember.name,
      badge: `${newMember.relation} (Dependent)`,
      born: 'Born: Jan 10, 2000 (26 Years)',
      email: `${newMember.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      phone: '+1 (555) 345-6789',
      avatar: newMember.avatar,
      vitals: [
        { id: 'blood', label: 'Blood Group', value: 'O+', borderClass: 'border-[rgba(216,80,27,0.30)]', iconClass: 'text-[#D8501B]' },
        { id: 'height', label: 'Height', value: '170cm', borderClass: 'border-[rgba(41,98,208,0.30)]', iconClass: 'text-[#2962D0]' },
        { id: 'weight', label: 'Weight', value: '65kg', borderClass: 'border-[rgba(28,42,227,0.30)]', iconClass: 'text-[#1C2AE3]' },
        { id: 'bmi', label: 'BMI Index', value: '22.5', borderClass: 'border-[rgba(208,26,26,0.30)]', iconClass: 'text-[#D01A1A]' },
      ],
      acuteVitals: [
        { id: 'bp', label: 'Blood Pressure', shortLabel: 'BP', value: '120/80', unit: 'mmHg', status: 'normal' },
        { id: 'hr', label: 'Heart Rate', shortLabel: 'Pulse', value: '70', unit: 'bpm', status: 'normal' },
        { id: 'spo2', label: 'Oxygen Level', shortLabel: 'SpO₂', value: '99', unit: '%', status: 'normal' },
        { id: 'temp', label: 'Temperature', shortLabel: 'Temp', value: '98.6', unit: '°F', status: 'normal' },
      ],
      vitalsLastUpdated: 'Today, Just now',
      clinicalAlerts: [],
      medicalHistory: {
        currentMedications: [],
        allergies: ['No known drug allergies'],
        chronicConditions: ['None reported'],
        pastMedicalHistory: ['Routine wellness consult'],
        surgicalHistory: ['None'],
      },
      previousConsultations: [],
      defaultSymptoms: [],
      defaultReason: 'General consultation and wellness checkup.',
    }
    setSelectedMemberId(newMember.id)
    setSymptoms([])
    setReason('General consultation and wellness checkup.')
    notify(`Added ${newMember.name} to family list`)
  }, [notify])

  // Symptoms Handlers
  const handleRemoveSymptom = useCallback((id: string) => {
    setSymptoms((current) => current.filter((item) => item.id !== id))
  }, [])

  const handleAddSymptom = useCallback((symptom: SymptomItem) => {
    setSymptoms((current) =>
      current.some((item) => item.name.toLowerCase() === symptom.name.toLowerCase())
        ? current
        : [...current, symptom],
    )
  }, [])

  const handleUpdateSymptom = useCallback((updated: SymptomItem) => {
    setSymptoms((current) =>
      current.map((item) => (item.id === updated.id ? updated : item)),
    )
    notify(`Updated ${updated.name} (${updated.severity}, ${updated.duration})`)
  }, [notify])

  // Confirm Booking Handler
  const handleConfirmBooking = useCallback(() => {
    setIsSuccessModalOpen(true)
  }, [])

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-page">
      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          min-w-0
          px-4
          pt-4
          pb-[104px]
          sm:px-6
          lg:px-8
          lg:pt-6
          lg:pb-[124px]
          2xl:px-[60px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}
        <Header />

        {/* =====================================================
            HERO + TRUST BENEFITS
        ====================================================== */}
        <div
          className="
            mt-5
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-4
            lg:mt-6
            lg:gap-5
            xl:grid-cols-[1.35fr_2.65fr]
            xl:items-stretch
            xl:gap-8
            2xl:gap-8
          "
        >
          {/* Expanded Doctor Consultation title card */}
          <div className="w-full min-w-0">
            <ConsultationHero />
          </div>

          {/* Trust cards */}
          <div className="w-full min-w-0">
            <TrustBenefits />
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div
          className="
            mt-5
            flex
            w-full
            min-w-0
            flex-col
            gap-5
            lg:mt-6
            lg:gap-6
            xl:grid
            xl:grid-cols-12
            xl:items-start
            xl:gap-8
          "
        >
          {/* ===================================================
              PRIMARY COLUMN (Left 7 Cols)
          ==================================================== */}
          <div
            className="
              contents
              xl:col-span-7
              xl:flex
              xl:min-w-0
              xl:flex-col
              xl:gap-8
            "
          >
            {/* -----------------------------------------------
                1. BOOKING DETAILS
            ------------------------------------------------ */}
            <div className="order-1 w-full min-w-0 xl:order-none">
              <BookingDetails
                doctor={DOCTOR}
                metrics={bookingMetrics}
                onManageAppointment={() => setIsManageAppointmentOpen(true)}
                onTestHardware={() => setIsHardwareTestOpen(true)}
                onJoinVideo={() => {
                  notify('Connecting to encrypted video room with Dr. Sarah Jenkins...')
                }}
              />
            </div>

            {/* -----------------------------------------------
                2. FAMILY MEMBERS + PATIENT PROFILE
            ------------------------------------------------ */}
            <div
              className="
                order-2
                flex
                w-full
                min-w-0
                flex-col
                gap-5
                lg:flex-row
                lg:gap-4
                xl:order-none
              "
            >
              {/* Family members */}
              <div
                className="
                  w-full
                  min-w-0
                  lg:w-[200px]
                  lg:shrink-0
                  xl:w-[220px]
                "
              >
                <FamilyMembers
                  members={familyMembersList}
                  selectedId={selectedMemberId}
                  onSelect={handleSelectMember}
                  onAddMember={() => setIsAddFamilyMemberOpen(true)}
                />
              </div>

              {/* Patient profile */}
              <div className="w-full min-w-0 lg:flex-1">
                <PatientProfile
                  patient={activePatient}
                  onOpenMedicalHistory={() => setIsMedicalHistoryOpen(true)}
                  onOpenPreviousVisits={() => setIsPreviousVisitsOpen(true)}
                />
              </div>
            </div>

            {/* -----------------------------------------------
                3. READY FOR CONSULTATION CARD
            ------------------------------------------------ */}
            <div
              className="
                order-5
                w-full
                min-w-0
                xl:order-none
              "
            >
              <ConfirmationSection />
            </div>
          </div>

          {/* ===================================================
              SECONDARY COLUMN (Right 5 Cols)
          ==================================================== */}
          <div
            className="
              contents
              xl:col-span-5
              xl:flex
              xl:min-w-0
              xl:flex-col
              xl:gap-8
            "
          >
            {/* -----------------------------------------------
                4. PAYMENT SUMMARY
            ------------------------------------------------ */}
            <div className="order-4 w-full min-w-0 xl:order-none">
              <PaymentSummary
                fees={FEE_LINES}
                total={TOTAL_AMOUNT}
                cardHolder="David Brock"
                cardNumber="**** **** **** 4242"
              />
            </div>

            {/* -----------------------------------------------
                5. AI INTAKE ASSISTANT
            ------------------------------------------------ */}
            <div className="order-3 w-full min-w-0 xl:order-none">
              <AIIntakeAssistant
                symptoms={symptoms}
                reason={reason}
                onRemoveSymptom={handleRemoveSymptom}
                onAddSymptom={handleAddSymptom}
                onSelectSymptom={(s) => setSelectedSymptomForDetail(s)}
                onReasonChange={setReason}
                onViewSummary={() => setIsAISummaryOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          STICKY CONFIRMATION BAR
      ====================================================== */}
      <StickyConfirmationBar onConfirm={handleConfirmBooking} />

      {/* =====================================================
          TOAST
      ====================================================== */}
      {toast && (
        <div
          role="status"
          className="
            fixed
            bottom-[110px]
            left-1/2
            z-50
            flex
            max-w-[92vw]
            min-w-0
            -translate-x-1/2
            items-center
            gap-3
            rounded-full
            bg-ink-850
            px-5
            py-3
            text-white
            shadow-lg
            lg:bottom-[130px]
          "
        >
          <span
            className="
              min-w-0
              truncate
              font-inter
              text-[13px]
              lg:text-[14px]
            "
          >
            {toast}
          </span>

          <button
            type="button"
            onClick={() => setToast(null)}
            className="
              shrink-0
              rounded-full
              px-2
              font-inter
              text-[13px]
              text-white/70
              hover:text-white
            "
          >
            Dismiss
          </button>
        </div>
      )}

      {/* =====================================================
          MODALS & DIALOGS
      ====================================================== */}

      {/* 1. AI Pre-Visit Summary Modal */}
      <AIPreVisitSummaryModal
        isOpen={isAISummaryOpen}
        onClose={() => setIsAISummaryOpen(false)}
        data={{
          ...SAMPLE_AI_SUMMARY,
          patientName: activePatient.name,
          detectedSymptoms: symptoms,
        }}
      />

      {/* 2. Medical History Modal */}
      <MedicalHistoryModal
        isOpen={isMedicalHistoryOpen}
        onClose={() => setIsMedicalHistoryOpen(false)}
        patientName={activePatient.name}
        medicalHistory={activePatient.medicalHistory}
      />

      {/* 3. Previous Visits Timeline Modal */}
      <PreviousVisitsModal
        isOpen={isPreviousVisitsOpen}
        onClose={() => setIsPreviousVisitsOpen(false)}
        patientName={activePatient.name}
        consultations={activePatient.previousConsultations}
      />

      {/* 4. Manage Appointment Modal */}
      <ManageAppointmentModal
        isOpen={isManageAppointmentOpen}
        onClose={() => setIsManageAppointmentOpen(false)}
        currentDate={appointmentDate}
        currentTime={appointmentTime}
        onSave={(newDate, newTime) => {
          setAppointmentDate(newDate)
          setAppointmentTime(newTime)
          notify(`Appointment updated: ${newDate} at ${newTime}`)
        }}
        onCancelAppointment={() => {
          notify('Your appointment has been cancelled.')
        }}
      />

      {/* 5. Audio & Video Hardware Test Modal */}
      <HardwareTestModal
        isOpen={isHardwareTestOpen}
        onClose={() => setIsHardwareTestOpen(false)}
      />

      {/* 6. Add Family Member Modal */}
      <AddFamilyMemberModal
        isOpen={isAddFamilyMemberOpen}
        onClose={() => setIsAddFamilyMemberOpen(false)}
        onAdd={handleAddFamilyMember}
      />

      {/* 7. Symptom Detail & Severity Editor */}
      <SymptomDetailModal
        isOpen={!!selectedSymptomForDetail}
        onClose={() => setSelectedSymptomForDetail(null)}
        symptom={selectedSymptomForDetail}
        onUpdate={handleUpdateSymptom}
        onRemove={handleRemoveSymptom}
      />

      {/* 8. Booking Success Confirmation Modal */}
      <BookingSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        appointmentId="#APT-84920"
        doctorName={DOCTOR.name}
        specialty={`${DOCTOR.badge} (${DOCTOR.specialty})`}
        date={appointmentDate}
        time={appointmentTime}
        patientName={activePatient.name}
      />
    </div>
  )
}