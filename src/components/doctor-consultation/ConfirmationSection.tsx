import {
  ArrowRight,
  CalendarCheck,
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

export function ConfirmationSection({
  onConfirm,
}: {
  onConfirm: () => void
}) {
  return (
    <section
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-[24px]
        bg-[linear-gradient(95deg,#6366F1_0%,#A855F7_50%,#3B82F6_100%)]
        p-5
        shadow-[0_24px_55px_-20px_rgba(0,0,0,0.25)]
        sm:rounded-[30px]
        sm:p-6
        lg:rounded-[36px]
        lg:p-7
        xl:p-8
      "
    >
      {/* Heading */}
      <div className="flex min-w-0 items-start gap-4">
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
            sm:size-[56px]
          "
        >
          <CalendarCheck
            className="size-6 text-white"
            strokeWidth={2}
          />
        </span>

        <div className="flex min-w-0 flex-col gap-1">
          <h2
            className={`${TYPE.ctaHeading} text-white`}
          >
            You're Just One Step Away!
          </h2>

          <p
            className={`${TYPE.ctaBody} text-white/75`}
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
          lg:mt-7
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-6
        "
      >
        {/* Status */}
        <ul
          className="
            grid
            min-w-0
            grid-cols-3
            gap-3
            sm:gap-5
            lg:flex
            lg:gap-6
            xl:gap-8
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
                  sm:size-[48px]
                "
              >
                <item.icon
                  className="size-[19px] text-white"
                  strokeWidth={2}
                />
              </span>

              <span
                className="
                  text-center
                  font-inter
                  text-[10px]
                  leading-[14px]
                  font-bold
                  whitespace-pre-line
                  text-white/85
                  sm:text-[11px]
                  sm:leading-[16px]
                "
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            items-stretch
            gap-2.5
            lg:w-[230px]
            lg:shrink-0
          "
        >
          <button
            type="button"
            onClick={onConfirm}
            className="
              flex
              min-h-[50px]
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-full
              bg-white
              px-5
              text-brand-600
              shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)]
              transition-transform
              hover:scale-[1.01]
              lg:min-h-[56px]
            "
          >
            <span className="font-inter text-[15px] font-bold">
              Confirm Booking
            </span>

            <ArrowRight
              className="size-[17px]"
              strokeWidth={2.4}
            />
          </button>

          <p
            className="
              flex
              items-center
              justify-center
              gap-1.5
              font-inter
              text-[9px]
              leading-[14px]
              font-medium
              text-white/65
              lg:text-[10px]
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