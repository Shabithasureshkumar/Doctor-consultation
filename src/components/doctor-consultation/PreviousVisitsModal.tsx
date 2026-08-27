import { Calendar, Clock, FileText, Pill, Stethoscope, User, X } from 'lucide-react'
import type { PastConsultation } from '../../types/doctorConsultation'

interface PreviousVisitsModalProps {
  isOpen: boolean
  onClose: () => void
  patientName: string
  consultations: PastConsultation[]
}

export function PreviousVisitsModal({
  isOpen,
  onClose,
  patientName,
  consultations,
}: PreviousVisitsModalProps) {
  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="previous-visits-title"
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
          max-w-[680px]
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
              <Clock className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <h2
                id="previous-visits-title"
                className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
              >
                Previous Consultations & Timeline
              </h2>

              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Medical visit history for <strong>{patientName}</strong>
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

        {/* Content Body */}
        <div className="mt-5 space-y-4">
          {consultations.length > 0 ? (
            consultations.map((visit) => (
              <div
                key={visit.id}
                className="rounded-[18px] border border-slate-100 bg-[#F8FAFC] p-4 transition-all hover:border-brand-200 hover:bg-white hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <User className="size-4" />
                    </span>

                    <div>
                      <h3 className="font-inter text-[14px] font-bold text-ink-900">
                        {visit.doctorName}
                      </h3>
                      <span className="font-inter text-[11px] text-ink-500">
                        {visit.specialty}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-inter text-[11px] font-semibold text-ink-600 shadow-sm border border-slate-200/60">
                    <Calendar className="size-3 text-brand-600" />
                    {visit.date}
                  </span>
                </div>

                <div className="mt-3 space-y-2 font-inter text-[12px]">
                  <div>
                    <span className="font-bold text-ink-600 uppercase tracking-wide text-[10px]">Reason: </span>
                    <span className="text-ink-800">{visit.reason}</span>
                  </div>

                  <div className="rounded-[10px] bg-brand-50/70 p-2.5">
                    <span className="flex items-center gap-1.5 font-bold text-brand-800">
                      <Stethoscope className="size-3.5 text-brand-600" />
                      Diagnosis: {visit.diagnosis}
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 text-ink-700">
                    <Pill className="mt-0.5 size-3.5 shrink-0 text-indigo-accent" />
                    <span>
                      <strong className="text-ink-900">Rx:</strong> {visit.prescriptionSummary}
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 text-ink-600">
                    <FileText className="mt-0.5 size-3.5 shrink-0 text-slate-400" />
                    <span>
                      <strong className="text-ink-900">Doctor Notes:</strong> {visit.notes}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-ink-400">
              <Clock className="mx-auto size-10 text-slate-300" />
              <p className="mt-2 font-inter text-[13px]">No previous consultation records found.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Close Timeline
          </button>
        </div>
      </div>
    </div>
  )
}
