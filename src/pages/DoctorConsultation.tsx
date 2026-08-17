import { useCallback, useState } from 'react'
import { AIIntakeAssistant } from '../components/doctor-consultation/AIIntakeAssistant'
import { BookingDetails } from '../components/doctor-consultation/BookingDetails'
import { ConfirmationSection } from '../components/doctor-consultation/ConfirmationSection'
import { ConsultationHero } from '../components/doctor-consultation/ConsultationHero'
import { FamilyMembers } from '../components/doctor-consultation/FamilyMembers'
import { Header } from '../components/doctor-consultation/Header'
import { PatientProfile } from '../components/doctor-consultation/PatientProfile'
import { PaymentSummary } from '../components/doctor-consultation/PaymentSummary'
import { StickyConfirmationBar } from '../components/doctor-consultation/StickyConfirmationBar'
import { TrustBenefits } from '../components/doctor-consultation/TrustBenefits'

import {
  BOOKING_METRICS,
  DOCTOR,
  FAMILY_MEMBERS,
  FEE_LINES,
  INITIAL_SYMPTOMS,
  PATIENT,
  TOTAL_AMOUNT,
} from '../data/doctorConsultationData'

/**
 * Doctor Consultation / Booking Screen
 *
 * Layout:
 * ---------------------------------------------------------
 * Desktop / XL
 *
 * Header
 *
 * Hero + Trust Benefits
 * ┌───────────────────────┬────────────────────────────────┐
 * │ Doctor Consultation   │ Instant │ Support │ HIPAA │ ... │
 * └───────────────────────┴────────────────────────────────┘
 *
 * Main Content
 * ┌──────────────────────────────┬───────────────────────────┐
 * │ Primary Content              │ Secondary Content         │
 * │                              │                           │
 * │ Booking Details              │ Payment Summary           │
 * │                              │                           │
 * │ Family + Patient             │ AI Intake Assistant       │
 * │                              │                           │
 * │ Confirmation                 │                           │
 * └──────────────────────────────┴───────────────────────────┘
 *
 * Mobile / Tablet
 * Everything becomes one responsive column.
 */
export function DoctorConsultation() {
  const [selectedMember, setSelectedMember] = useState(FAMILY_MEMBERS[0].id)
  const [symptoms, setSymptoms] = useState<string[]>(INITIAL_SYMPTOMS)
  const [reason, setReason] = useState('')
  const [toast, setToast] = useState<string | null>(null)

  const notify = useCallback((message: string) => {
    setToast(message)
  }, [])

  const removeSymptom = useCallback((symptom: string) => {
    setSymptoms((current) => current.filter((item) => item !== symptom))
  }, [])

  const addSymptom = useCallback((symptom: string) => {
    setSymptoms((current) =>
      current.includes(symptom) ? current : [...current, symptom],
    )
  }, [])

  const confirmBooking = useCallback(() => {
    notify(`Booking confirmed with ${DOCTOR.name} · Mon, Jun 1 at 7:30 PM`)
  }, [notify])

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

            IMPORTANT:
            Doctor Consultation card is intentionally wider than
            before using 1.35fr / 2.65fr.

            This gives the purple title card more horizontal space
            while keeping the four trust cards in one row.
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
              PRIMARY COLUMN
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
                BOOKING DETAILS
            ------------------------------------------------ */}
            <div className="order-1 w-full min-w-0 xl:order-none">
              <BookingDetails
                doctor={DOCTOR}
                metrics={BOOKING_METRICS}
                onEditStatus={() =>
                  notify('Booking status is now editable.')
                }
              />
            </div>

            {/* -----------------------------------------------
                FAMILY MEMBERS + PATIENT PROFILE
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
                  members={FAMILY_MEMBERS}
                  selectedId={selectedMember}
                  onSelect={setSelectedMember}
                  onAddMember={() =>
                    notify('Add a family member to this booking.')
                  }
                />
              </div>

              {/* Patient profile */}
              <div className="w-full min-w-0 lg:flex-1">
                <PatientProfile patient={PATIENT} />
              </div>
            </div>

            {/* -----------------------------------------------
                CONFIRMATION SECTION
            ------------------------------------------------ */}
            <div
              className="
                order-6
                w-full
                min-w-0
                xl:order-none
              "
            >
              <ConfirmationSection onConfirm={confirmBooking} />
            </div>
          </div>

          {/* ===================================================
              SECONDARY COLUMN
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
                PAYMENT SUMMARY
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
                AI INTAKE ASSISTANT
            ------------------------------------------------ */}
            <div className="order-5 w-full min-w-0 xl:order-none">
              <AIIntakeAssistant
                symptoms={symptoms}
                reason={reason}
                onRemoveSymptom={removeSymptom}
                onAddSymptom={addSymptom}
                onReasonChange={setReason}
                onViewSummary={() =>
                  notify('Opening your AI pre-visit summary.')
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          STICKY CONFIRMATION BAR
      ====================================================== */}
      <StickyConfirmationBar onConfirm={confirmBooking} />

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
    </div>
  )
}