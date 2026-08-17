import { Pencil, Video } from 'lucide-react'
import type { BookingMetric, Doctor } from '../../types/doctorConsultation'
import { BookingMetrics } from './BookingMetrics'
import { DoctorProfile } from './DoctorProfile'

interface BookingDetailsProps {
  doctor: Doctor
  metrics: BookingMetric[]
  onEditStatus: () => void
}

export function BookingDetails({
  doctor,
  metrics,
  onEditStatus,
}: BookingDetailsProps) {
  return (
    <section
      className="
        card-surface
        flex w-full min-w-0 flex-col
        gap-5
        rounded-[20px]
        p-4

        sm:gap-5
        sm:rounded-[24px]
        sm:p-5

        lg:gap-6
        lg:rounded-[28px]
        lg:p-6

        xl:rounded-[30px]
        xl:px-7
        xl:py-6
      "
    >
      {/* Header */}
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <h2
          className="
            font-inter
            text-[18px]
            leading-[23px]
            font-bold
            tracking-[-0.01em]
            text-ink-900

            sm:text-[18px]
            sm:leading-[23px]
          "
        >
          Booking Details
        </h2>

        <span
          className="
            flex shrink-0 items-center
            gap-1.5
            rounded-full
            bg-brand-100
            px-3
            py-1.5
            text-brand-600

            sm:px-3.5

            lg:px-4
          "
        >
          <Video
            className="size-[13px] shrink-0 sm:size-[14px]"
            strokeWidth={2.4}
          />

          <span
            className="
              font-inter
              text-[11px]
              leading-[16px]
              font-bold
              whitespace-nowrap

              sm:text-[12px]
              sm:leading-[17px]
            "
          >
            Video Consultation
          </span>
        </span>
      </div>

      {/* Doctor */}
      <DoctorProfile doctor={doctor} />

      {/* Appointment Metrics */}
      <BookingMetrics metrics={metrics} />

      {/* Edit Status */}
      <button
        type="button"
        onClick={onEditStatus}
        className="
          flex
          min-h-[46px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-[14px]
          border
          border-[rgba(92,36,255,0.12)]
          bg-[linear-gradient(180deg,rgba(171,132,250,0.24)_0%,rgba(92,36,255,0.24)_100%)]
          px-4
          py-2.5
          text-brand-700
          transition-all
          hover:opacity-90

          sm:min-h-[48px]
          sm:rounded-[16px]

          lg:min-h-[52px]
          lg:rounded-[18px]
        "
      >
        <Pencil
          className="size-[15px] shrink-0 sm:size-[16px]"
          strokeWidth={2.2}
        />

        <span
          className="
            font-inter
            text-[13px]
            leading-[18px]
            font-semibold

            sm:text-[14px]
            sm:leading-[19px]
          "
        >
          Edit Booking Status
        </span>
      </button>
    </section>
  )
}