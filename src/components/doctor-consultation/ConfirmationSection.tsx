import {
  CalendarCheck,
  Check,
  FileText,
  Lock,
  Stethoscope,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TYPE } from '../../lib/typography'

const STATUS_ITEMS: Array<{
  id: string
  label: string
  icon: LucideIcon
}> = [
  {
    id: 'appointment',
    label: 'Appointment\nReady',
    icon: CalendarCheck,
  },
  {
    id: 'doctor',
    label: 'Doctor\nReady',
    icon: Stethoscope,
  },
  {
    id: 'summary',
    label: 'Summary\nPrepared',
    icon: FileText,
  },
]

export function ConfirmationSection() {
  return (
    <section
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-[24px]
        bg-[linear-gradient(95deg,#6366F1_0%,#A855F7_50%,#3B82F6_100%)]
        p-6
        shadow-[0_24px_55px_-20px_rgba(0,0,0,0.25)]
        sm:rounded-[30px]
        sm:p-7
        lg:rounded-[36px]
        lg:p-8
        xl:p-9
      "
    >
      {/* Heading */}
      <div className="flex min-w-0 items-start gap-4 sm:gap-5">
        <span
          className="
            flex
            size-[52px]
            shrink-0
            items-center
            justify-center
            rounded-[16px]
            bg-white/20
            backdrop-blur-md
            sm:size-[58px]
          "
        >
          <CalendarCheck
            className="size-6 sm:size-7 text-white"
            strokeWidth={2}
          />
        </span>

        <div className="flex min-w-0 flex-col gap-1">
          <h2
            className={`${TYPE.ctaHeading} text-white`}
          >
            You&apos;re Ready for Your Consultation!
          </h2>

          <p
            className={`${TYPE.ctaBody} text-white/80`}
          >
            Review your appointment details and confirm your
            booking securely.
          </p>
        </div>
      </div>

      {/* Bottom Content */}
      <div
        className="
          mt-6
          flex
          min-w-0
          flex-col
          gap-6
          sm:mt-7
          lg:mt-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
      >
        {/* Status 3 Circular Cards matching Figma */}
        <ul
          className="
            grid
            min-w-0
            grid-cols-3
            gap-3
            sm:gap-6
            lg:flex
            lg:gap-7
            xl:gap-9
          "
        >
          {STATUS_ITEMS.map((item) => (
            <li
              key={item.id}
              className="
                flex
                min-w-0
                flex-col
                items-center
                gap-2
              "
            >
              <span
                className="
                  flex
                  size-[44px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-white/20
                  sm:size-[50px]
                "
              >
                <item.icon
                  className="size-[19px] sm:size-[21px] text-white"
                  strokeWidth={2}
                />
              </span>

              <span
                className="
                  text-center
                  font-inter
                  text-[11px]
                  leading-[15px]
                  font-bold
                  whitespace-pre-line
                  text-white/90
                  sm:text-[12px]
                  sm:leading-[16px]
                "
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Right Info Pill matching Figma visual composition */}
        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            items-center
            gap-2
            lg:w-[220px]
            lg:shrink-0
          "
        >
          <div className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-white/25 border border-white/40 px-4 text-white shadow-sm backdrop-blur-md sm:h-[48px]">
            <Check className="size-4 text-emerald-300" strokeWidth={3} />
            <span className="font-inter text-[13px] font-bold text-white whitespace-nowrap">
              Ready for Consultation
            </span>
          </div>

          <p
            className="
              flex
              items-center
              justify-center
              gap-1.5
              font-inter
              text-[10px]
              leading-[14px]
              font-medium
              text-white/70
              sm:text-[11px]
            "
          >
            <Lock
              className="size-[11px] shrink-0"
              strokeWidth={2.4}
            />

            <span>
              No payment required until after session
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}