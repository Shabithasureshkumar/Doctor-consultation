import { useState } from 'react'
import { AlertTriangle, Calendar, Check, Clock, Settings, Video, X } from 'lucide-react'

interface ManageAppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  currentDate: string
  currentTime: string
  onSave: (date: string, time: string, type: string) => void
  onCancelAppointment: () => void
}

const DATE_OPTIONS = [
  { date: 'Mon, Jun 1', times: ['7:30 PM', '8:15 PM'] },
  { date: 'Tue, Jun 2', times: ['10:00 AM', '2:30 PM', '5:00 PM'] },
  { date: 'Wed, Jun 3', times: ['11:30 AM', '4:00 PM', '6:30 PM'] },
]

const CONSULT_TYPES = [
  { id: 'video', label: 'Video Consultation', subtitle: 'HD video with audio', icon: Video },
  { id: 'audio', label: 'Phone / Audio Only', subtitle: 'Direct voice call', icon: Clock },
]

export function ManageAppointmentModal({
  isOpen,
  onClose,
  currentDate,
  currentTime,
  onSave,
  onCancelAppointment,
}: ManageAppointmentModalProps) {
  const [selectedDate, setSelectedDate] = useState(currentDate)
  const [selectedTime, setSelectedTime] = useState(currentTime)
  const [selectedType, setSelectedType] = useState('video')
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  if (!isOpen) return null

  const handleSave = () => {
    onSave(selectedDate, selectedTime, selectedType)
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="manage-appointment-title"
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
          max-h-[90vh]
          w-full
          max-w-[560px]
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
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[16px] bg-brand-50 text-brand-600">
              <Settings className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <h2
                id="manage-appointment-title"
                className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
              >
                Manage Appointment
              </h2>
              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Reschedule, switch format, or cancel session
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

        {!showCancelConfirm ? (
          <div className="mt-5 space-y-5">
            {/* Consultation Format */}
            <div>
              <h3 className="font-inter text-[12px] font-bold tracking-wider text-ink-500 uppercase">
                Consultation Format
              </h3>

              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {CONSULT_TYPES.map((type) => {
                  const Icon = type.icon
                  const isSelected = selectedType === type.id

                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center gap-3 rounded-[16px] border p-3.5 text-left transition-all ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/70 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span
                        className={`flex size-9 items-center justify-center rounded-full ${
                          isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600'
                        }`}
                      >
                        <Icon className="size-4" strokeWidth={2.2} />
                      </span>

                      <div className="flex-1">
                        <span className="block font-inter text-[13px] font-bold text-ink-900">
                          {type.label}
                        </span>
                        <span className="font-inter text-[11px] text-ink-500">
                          {type.subtitle}
                        </span>
                      </div>

                      {isSelected && (
                        <Check className="size-4 text-brand-600" strokeWidth={3} />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Reschedule Date & Time */}
            <div>
              <h3 className="font-inter text-[12px] font-bold tracking-wider text-ink-500 uppercase">
                Select New Date & Time Slot
              </h3>

              <div className="mt-2.5 space-y-3">
                {DATE_OPTIONS.map((slot) => (
                  <div
                    key={slot.date}
                    className={`rounded-[16px] border p-3.5 transition-all ${
                      selectedDate === slot.date
                        ? 'border-brand-300 bg-brand-50/30'
                        : 'border-slate-200 bg-slate-50/60'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDate(slot.date)
                        setSelectedTime(slot.times[0])
                      }}
                      className="flex w-full items-center justify-between font-inter text-[13px] font-bold text-ink-800"
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="size-4 text-brand-600" />
                        {slot.date}
                      </span>
                      {selectedDate === slot.date && (
                        <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-700 uppercase">
                          Selected Day
                        </span>
                      )}
                    </button>

                    {selectedDate === slot.date && (
                      <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                        {slot.times.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-[10px] px-3 py-1.5 font-inter text-[12px] font-semibold transition-all ${
                              selectedTime === time
                                ? 'bg-brand-600 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-ink-700 hover:border-brand-400'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(true)}
                className="font-inter text-[12px] font-semibold text-rose-600 transition-colors hover:text-rose-700"
              >
                Cancel this Appointment
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-[12px] border border-slate-200 px-4 py-2.5 font-inter text-[13px] font-semibold text-ink-600 hover:bg-slate-50"
                >
                  Keep Current
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white hover:opacity-90"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Cancel Confirmation Step */
          <div className="mt-5 space-y-4">
            <div className="rounded-[16px] border border-rose-100 bg-rose-50 p-4">
              <div className="flex items-center gap-2 text-rose-700">
                <AlertTriangle className="size-5" />
                <h3 className="font-inter text-[14px] font-bold">
                  Are you sure you want to cancel?
                </h3>
              </div>
              <p className="mt-2 font-inter text-[12px] text-rose-900 leading-[18px]">
                Your reserved slot with <strong>Dr. Sarah Jenkins</strong> on {currentDate} at {currentTime} will be released. You will not be charged.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="rounded-[12px] border border-slate-200 px-4 py-2.5 font-inter text-[13px] font-semibold text-ink-600 hover:bg-slate-50"
              >
                No, Keep Booking
              </button>

              <button
                type="button"
                onClick={() => {
                  onCancelAppointment()
                  onClose()
                }}
                className="rounded-[12px] bg-rose-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white hover:bg-rose-700"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
