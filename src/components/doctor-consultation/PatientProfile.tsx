import {
  Activity,
  Droplet,
  FileText,
  History,
  Mail,
  Phone,
  Ruler,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PatientProfile as PatientProfileData } from '../../types/doctorConsultation'
import { cn } from '../../lib/cn'

const VITAL_ICONS: Record<string, LucideIcon> = {
  blood: Droplet,
  height: Ruler,
  weight: Scale,
  bmi: Activity,
}

interface PatientProfileProps {
  patient: PatientProfileData
  onOpenMedicalHistory?: () => void
  onOpenPreviousVisits?: () => void
}

export function PatientProfile({
  patient,
  onOpenMedicalHistory,
  onOpenPreviousVisits,
}: PatientProfileProps) {
  return (
    <section
      className="
        card-surface
        flex
        w-full
        min-w-0
        flex-col
        rounded-[20px]
        p-4
        sm:rounded-[24px]
        sm:p-5
        lg:rounded-[28px]
        lg:p-6
        xl:rounded-[30px]
        xl:p-7
      "
    >
      {/* ================= 1. PATIENT HEADER & IDENTITY ================= */}
      <div
        className="
          flex
          min-w-0
          items-start
          gap-4
          sm:gap-5
        "
      >
        {/* Patient Avatar */}
        <div className="relative shrink-0">
          <img
            src={patient.avatar}
            alt={patient.name}
            className="
              size-[78px]
              rounded-full
              border-[3px]
              border-white
              object-cover
              shadow-[0_3px_8px_-2px_rgba(0,0,0,0.12)]
              sm:size-[84px]
              lg:size-[88px]
            "
          />

          <span
            className="
              absolute
              right-[-2px]
              bottom-[2px]
              flex
              size-[24px]
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-indigo-deep
            "
          >
            <ShieldCheck
              className="size-[12px] text-white"
              strokeWidth={2.4}
            />
          </span>
        </div>

        {/* 2. Patient Information & Contacts */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            pt-[1px]
          "
        >
          {/* Name + Badge */}
          <div
            className="
              flex
              min-w-0
              flex-wrap
              items-center
              gap-x-2.5
              gap-y-1
            "
          >
            <h3
              className="
                min-w-0
                truncate
                font-inter
                text-[18px]
                leading-[23px]
                font-bold
                text-ink-800
                sm:text-[19px]
              "
            >
              {patient.name}
            </h3>

            <span
              className="
                shrink-0
                rounded-full
                bg-[rgba(77,65,223,0.10)]
                px-2.5
                py-[3px]
                font-inter
                text-[11px]
                leading-[14px]
                font-bold
                tracking-[0.04em]
                text-indigo-deep
                uppercase
              "
            >
              {patient.badge}
            </span>
          </div>

          {/* DOB / Age */}
          <p
            className="
              mt-[3px]
              font-inter
              text-[12px]
              leading-[17px]
              font-normal
              text-ink-600
              sm:text-[13px]
            "
          >
            {patient.born}
          </p>

          {/* Contact Details */}
          <div
            className="
              mt-[6px]
              flex
              min-w-0
              flex-col
              gap-[5px]
            "
          >
            <ContactRow
              icon={Mail}
              value={patient.email}
              href={`mailto:${patient.email}`}
            />

            <ContactRow
              icon={Phone}
              value={patient.phone}
              href={`tel:${patient.phone.replace(/[^\d+]/g, '')}`}
            />
          </div>
        </div>
      </div>

      {/* ================= 3. BIOMETRICS (4 Cards matching Figma) ================= */}
      <div
        className="
          mt-4
          grid
          w-full
          min-w-0
          grid-cols-2
          gap-2.5
          sm:mt-5
          sm:grid-cols-4
          sm:gap-3
          lg:gap-3
        "
      >
        {patient.vitals.map((vital) => {
          const Icon = VITAL_ICONS[vital.id] ?? Activity

          return (
            <div
              key={vital.id}
              className={cn(
                `
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  bg-white/75
                  px-2
                  py-2.5
                  text-center
                  backdrop-blur-md
                  sm:min-h-[76px]
                  lg:min-h-[78px]
                `,
                vital.borderClass,
              )}
            >
              {/* Icon */}
              <Icon
                className={cn(
                  'size-[15px] shrink-0',
                  vital.iconClass,
                )}
                strokeWidth={2.2}
              />

              {/* Label */}
              <span
                className="
                  mt-[3px]
                  max-w-full
                  truncate
                  font-inter
                  text-[11px]
                  leading-[14px]
                  font-semibold
                  tracking-[0.02em]
                  text-[#777587]
                  uppercase
                "
              >
                {vital.label}
              </span>

              {/* Value */}
              <span
                className="
                  mt-[1px]
                  font-inter
                  text-[14px]
                  leading-[19px]
                  font-bold
                  text-ink-850
                  sm:text-[15px]
                "
              >
                {vital.value}
              </span>
            </div>
          )
        })}
      </div>

      {/* ================= 4. COMPACT MEDICAL ALERTS & 5. LATEST VITALS ================= */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-slate-100/80">
        {/* Compact Medical Alerts */}
        <div className="flex flex-wrap items-center gap-1.5">
          {patient.clinicalAlerts && patient.clinicalAlerts.length > 0 ? (
            patient.clinicalAlerts.map((alert) => (
              <span
                key={alert.id}
                className={cn(
                  'inline-flex items-center gap-1 rounded-[6px] px-2 py-0.5 font-inter text-[11px] font-semibold',
                  alert.type === 'allergy'
                    ? 'bg-rose-50/90 text-rose-700 border border-rose-200/50'
                    : 'bg-amber-50/90 text-amber-800 border border-amber-200/50',
                )}
              >
                {alert.type === 'allergy' ? '⚠' : '🩺'} {alert.label}
              </span>
            ))
          ) : (
            <span className="font-inter text-[11px] text-ink-400">
              No active allergy alerts
            </span>
          )}

          <span className="text-slate-300">·</span>

          {/* Compact Vitals inline */}
          <span className="font-inter text-[11px] text-ink-500">
            Vitals: <strong className="text-ink-800 font-semibold">BP 120/80</strong> · <strong className="text-ink-800 font-semibold">72 bpm</strong> · <strong className="text-ink-800 font-semibold">SpO₂ 98%</strong> · <strong className="text-ink-800 font-semibold">98.6°F</strong>
          </span>
        </div>

        {/* Subtle quick links */}
        <div className="flex items-center gap-2">
          {onOpenMedicalHistory && (
            <button
              type="button"
              onClick={onOpenMedicalHistory}
              className="flex items-center gap-1 font-inter text-[11px] font-medium text-brand-700 hover:text-brand-900 transition-colors"
            >
              <FileText className="size-3 text-brand-600" />
              History
            </button>
          )}

          {onOpenPreviousVisits && (
            <button
              type="button"
              onClick={onOpenPreviousVisits}
              className="flex items-center gap-1 font-inter text-[11px] font-medium text-brand-700 hover:text-brand-900 transition-colors"
            >
              <History className="size-3 text-brand-600" />
              Past Visits
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

/* ================= CONTACT ROW ================= */

function ContactRow({
  icon: Icon,
  value,
  href,
}: {
  icon: LucideIcon
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="
        flex
        min-w-0
        items-center
        gap-2
        transition-opacity
        hover:opacity-75
      "
    >
      <span
        className="
          flex
          size-[22px]
          shrink-0
          items-center
          justify-center
          rounded-[6px]
          bg-[rgba(77,65,223,0.10)]
          sm:size-[23px]
        "
      >
        <Icon
          className="
            size-[11px]
            text-indigo-deep
            sm:size-[12px]
          "
          strokeWidth={2}
        />
      </span>

      <span
        className="
          min-w-0
          truncate
          font-inter
          text-[11.5px]
          leading-[16px]
          font-normal
          text-ink-800
          sm:text-[12px]
          sm:leading-[17px]
        "
      >
        {value}
      </span>
    </a>
  )
}