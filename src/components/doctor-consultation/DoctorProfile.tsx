import { Award, Star } from 'lucide-react'
import type { Doctor } from '../../types/doctorConsultation'

const TAG_STYLES = [
  'bg-[#ECFDF5] border-[#D1FAE5] text-[#047857]',
  'bg-[#EFF6FF] border-[#DBEAFE] text-[#1D4ED8]',
]

export function DoctorProfile({
  doctor,
}: {
  doctor: Doctor
}) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
        sm:gap-4
      "
    >
      {/* Doctor Image */}
      <div className="relative shrink-0 self-start">
        <div
          className="
            overflow-hidden
            rounded-[20px]
            border
            border-white/50
            bg-[rgba(197,180,255,0.30)]
            p-[3px]
            lg:rounded-[22px]
          "
        >
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="
              size-[92px]
              rounded-[17px]
              object-cover
              object-top
              sm:size-[104px]
              lg:size-[108px]
              lg:rounded-[19px]
            "
          />
        </div>

        <span
          className="
            absolute
            right-[-6px]
            bottom-[-6px]
            flex
            size-[30px]
            items-center
            justify-center
            rounded-[9px]
            bg-[linear-gradient(161deg,#AB84FA_0%,#5C24FF_100%)]
            shadow-[0_5px_14px_rgba(92,36,255,0.35)]
          "
        >
          <Award
            className="size-[16px] text-white"
            strokeWidth={2.2}
          />
        </span>
      </div>

      {/* Doctor Details */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {/* Name + Badge */}
        <div
          className="
            flex
            min-w-0
            flex-wrap
            items-center
            gap-x-2.5
            gap-y-1.5
          "
        >
          <h3
            className="
              min-w-0
              font-inter
              text-[20px]
              leading-[25px]
              font-bold
              text-[#1D1A23]
              sm:text-[21px]
            "
          >
            {doctor.name}
          </h3>

          <span
            className="
              shrink-0
              rounded-full
              bg-[rgba(56,189,248,0.20)]
              px-2.5
              py-1
              font-inter
              text-[8px]
              leading-[11px]
              font-bold
              tracking-[0.07em]
              text-[#00668A]
              uppercase
            "
          >
            {doctor.badge}
          </span>
        </div>

        {/* Specialty + Experience + Rating */}
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
          <span
            className="
              font-inter
              text-[11px]
              leading-[16px]
              font-medium
              text-ink-500
            "
          >
            {doctor.specialty}
          </span>

          <span
            aria-hidden
            className="text-ink-300"
          >
            ·
          </span>

          <span
            className="
              font-inter
              text-[11px]
              leading-[16px]
              text-ink-500
            "
          >
            {doctor.experience}
          </span>

          <span className="mx-0.5 flex items-center gap-1">
            <span
              className="flex items-center gap-[1px]"
              aria-hidden
            >
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <Star
                    key={index}
                    className="
                      size-[13px]
                      fill-[#FBBF24]
                      text-[#FBBF24]
                    "
                    strokeWidth={1}
                  />
                ),
              )}
            </span>

            <span
              className="
                font-inter
                text-[11px]
                font-bold
                text-ink-700
              "
            >
              {doctor.rating.toFixed(1)}
            </span>
          </span>
        </div>

        {/* Status Tags */}
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          {doctor.tags.map((tag, index) => (
            <span
              key={tag}
              className={`
                rounded-[6px]
                border
                px-2
                py-1
                font-inter
                text-[9px]
                leading-[12px]
                font-medium
                ${TAG_STYLES[index % TAG_STYLES.length]}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}