import {
  Activity,
  Droplet,
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

export function PatientProfile({
  patient,
}: {
  patient: PatientProfileData
}) {
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

        sm:rounded-[22px]
        sm:p-5

        lg:rounded-[24px]
        lg:p-5

        xl:p-6
      "
    >
      {/* ================= PATIENT HEADER ================= */}
      <div
        className="
          flex
          min-w-0
          items-start
          gap-4

          sm:gap-[18px]

          lg:gap-5
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
              shadow-[0_3px_6px_-3px_rgba(0,0,0,0.12)]

              sm:size-[82px]

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

        {/* Patient Information */}
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
              gap-x-2
              gap-y-1
            "
          >
            <h3
              className="
                min-w-0
                truncate
                font-inter
                text-[17px]
                leading-[22px]
                font-bold
                text-ink-800

                sm:text-[18px]
                sm:leading-[23px]
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
                text-[8px]
                leading-[11px]
                font-bold
                tracking-[0.04em]
                text-indigo-deep
                uppercase

                sm:text-[8.5px]
              "
            >
              {patient.badge}
            </span>
          </div>

          {/* DOB */}
          <p
            className="
              mt-[3px]
              font-inter
              text-[12px]
              leading-[17px]
              font-normal
              text-ink-600

              sm:text-[13px]
              sm:leading-[18px]
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

      {/* ================= VITALS ================= */}
      <div
        className="
          mt-[16px]
          grid
          w-full
          min-w-0
          grid-cols-2
          gap-2.5

          sm:mt-[18px]
          sm:grid-cols-4
          sm:gap-2.5

          lg:mt-[20px]
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
                  rounded-[14px]
                  border
                  bg-white/70
                  px-2
                  py-2.5
                  text-center
                  backdrop-blur-md

                  sm:min-h-[74px]

                  lg:min-h-[76px]
                  lg:rounded-[15px]
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
                strokeWidth={2}
              />

              {/* Label */}
              <span
                className="
                  mt-[3px]
                  max-w-full
                  truncate
                  font-inter
                  text-[9px]
                  leading-[13px]
                  font-semibold
                  tracking-[0.02em]
                  text-[#777587]
                  uppercase

                  sm:text-[9.5px]
                  sm:leading-[14px]
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
                  text-ink-800

                  sm:text-[15px]
                  sm:leading-[20px]
                "
              >
                {vital.value}
              </span>
            </div>
          )
        })}
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