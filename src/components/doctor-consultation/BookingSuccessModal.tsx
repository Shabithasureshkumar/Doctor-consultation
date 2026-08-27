import { useState } from 'react'
import { Calendar, Check, CheckCircle2, Copy, ExternalLink, ShieldCheck, Video, X } from 'lucide-react'

interface BookingSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  appointmentId: string
  doctorName: string
  specialty: string
  date: string
  time: string
  patientName: string
}

export function BookingSuccessModal({
  isOpen,
  onClose,
  appointmentId,
  doctorName,
  specialty,
  date,
  time,
  patientName,
}: BookingSuccessModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopyId = () => {
    navigator.clipboard?.writeText(appointmentId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-success-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-[580px]
          overflow-y-auto
          rounded-[24px]
          border
          border-white/80
          bg-white
          p-5
          shadow-[0_25px_60px_-15px_rgba(79,70,229,0.3)]
          sm:p-7
        "
      >
        {/* Header with Success Icon */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-[18px] bg-emerald-100 text-emerald-600 shadow-sm">
              <CheckCircle2 className="size-7" strokeWidth={2.4} />
            </span>

            <div>
              <h2
                id="booking-success-title"
                className="font-inter text-[19px] font-bold text-ink-900 sm:text-[22px]"
              >
                Appointment Confirmed!
              </h2>
              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Your consultation has been scheduled successfully
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-9 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-slate-100 hover:text-ink-700"
          >
            <X className="size-5" strokeWidth={2.2} />
          </button>
        </div>

        {/* Appointment Pass Card */}
        <div className="mt-5 rounded-[20px] bg-[linear-gradient(135deg,#EEF2FF_0%,#F5F3FF_100%)] border border-brand-100 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-200/60 pb-3">
            <div>
              <span className="font-inter text-[11px] font-bold text-brand-700 uppercase tracking-wider">
                Booking Reference
              </span>
              <div className="flex items-center gap-2">
                <span className="font-inter text-[16px] font-extrabold text-ink-900">
                  {appointmentId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="rounded px-1.5 py-0.5 font-inter text-[11px] font-semibold text-brand-700 hover:bg-brand-100 transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 font-inter text-[11px] font-bold text-emerald-700">
              Confirmed ✓
            </span>
          </div>

          {/* Details Grid */}
          <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className="block font-inter text-[11px] font-semibold text-ink-500 uppercase">
                Attending Doctor
              </span>
              <span className="font-inter text-[13px] font-bold text-ink-900">
                {doctorName}
              </span>
              <span className="block font-inter text-[11px] text-brand-700 font-medium">
                {specialty}
              </span>
            </div>

            <div>
              <span className="block font-inter text-[11px] font-semibold text-ink-500 uppercase">
                Patient Name
              </span>
              <span className="font-inter text-[13px] font-bold text-ink-900">
                {patientName}
              </span>
              <span className="block font-inter text-[11px] text-ink-500">
                Primary Profile
              </span>
            </div>

            <div>
              <span className="block font-inter text-[11px] font-semibold text-ink-500 uppercase">
                Date & Time
              </span>
              <span className="font-inter text-[13px] font-bold text-ink-900">
                {date} · {time}
              </span>
              <span className="block font-inter text-[11px] text-ink-500">
                Duration: 40 minutes
              </span>
            </div>

            <div>
              <span className="block font-inter text-[11px] font-semibold text-ink-500 uppercase">
                Consultation Format
              </span>
              <span className="flex items-center gap-1.5 font-inter text-[13px] font-bold text-brand-700">
                <Video className="size-4 text-brand-600" />
                Video Consultation
              </span>
              <span className="block font-inter text-[11px] text-emerald-600 font-medium">
                Link generated
              </span>
            </div>
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="mt-4 rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-3.5 sm:p-4">
          <h3 className="flex items-center gap-2 font-inter text-[12px] font-bold text-ink-800 uppercase tracking-wider">
            <ShieldCheck className="size-4 text-brand-600" />
            Pre-Consultation Checklist
          </h3>

          <ul className="mt-2 space-y-1.5 font-inter text-[12px] text-ink-600">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-600 shrink-0" />
              Join the video room 5 minutes prior to appointment time.
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-600 shrink-0" />
              Keep your medication list and any past lab reports handy.
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-600 shrink-0" />
              Ensure stable high-speed Wi-Fi and a quiet, well-lit room.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => {
              alert('Calendar event (.ics) downloaded and synced!')
            }}
            className="flex items-center justify-center gap-2 rounded-[12px] border border-slate-200 px-4 py-2.5 font-inter text-[12px] font-bold text-ink-700 hover:bg-slate-50 transition-colors"
          >
            <Calendar className="size-4 text-brand-600" />
            Add to Calendar (.ics)
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            >
              <span>Done</span>
              <ExternalLink className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
