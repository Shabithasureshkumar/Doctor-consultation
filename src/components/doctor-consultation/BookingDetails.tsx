import { Pencil, Video } from 'lucide-react'
import type { BookingMetric, Doctor } from '../../types/doctorConsultation'
import { BookingMetrics } from './BookingMetrics'
import { DoctorProfile } from './DoctorProfile'

interface BookingDetailsProps {
  doctor: Doctor
  metrics: BookingMetric[]
  onManageAppointment: () => void
  onTestHardware: () => void
  isLiveSession?: boolean
  onJoinVideo?: () => void
}

export function BookingDetails({
  doctor,
  metrics,
  onManageAppointment,
  onTestHardware,
  isLiveSession = false,
  onJoinVideo,
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
          "
        >
          Booking Details
        </h2>

        {/* Video Consultation Pill matching Figma */}
        <div className="flex items-center gap-2">
          {isLiveSession ? (
            <button
              type="button"
              onClick={onJoinVideo}
              className="
                flex shrink-0 items-center
                gap-1.5
                rounded-full
                bg-emerald-100
                border border-emerald-300
                px-3.5
                py-1.5
                text-emerald-800
                hover:bg-emerald-200
                transition-colors
              "
            >
              <span className="size-2 rounded-full bg-emerald-600 animate-ping" />
              <span className="font-inter text-[12px] font-bold">
                ● Live Now · Join Room
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onTestHardware}
              title="Click to test audio & video setup"
              className="
                flex shrink-0 items-center
                gap-1.5
                rounded-full
                bg-brand-100
                px-3
                py-1.5
                text-brand-600
                hover:bg-brand-200/80
                transition-colors
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
            </button>
          )}
        </div>
      </div>

      {/* Doctor */}
      <DoctorProfile doctor={doctor} />

      {/* Appointment Metrics */}
      <BookingMetrics metrics={metrics} />

      {/* Action Button: Manage Appointment matching Figma height and styling */}
      <button
        type="button"
        onClick={onManageAppointment}
        className="
          flex
          min-h-[50px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-[14px]
          border
          border-[rgba(92,36,255,0.14)]
          bg-[linear-gradient(180deg,rgba(171,132,250,0.24)_0%,rgba(92,36,255,0.24)_100%)]
          px-4
          py-2.5
          text-brand-700
          transition-all
          hover:opacity-90
          active:scale-[0.995]
          sm:min-h-[52px]
          sm:rounded-[16px]
          lg:min-h-[54px]
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
          Manage Appointment
        </span>
      </button>
    </section>
  )
}