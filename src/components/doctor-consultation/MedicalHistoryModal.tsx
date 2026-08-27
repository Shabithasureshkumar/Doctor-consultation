import { AlertCircle, FileText, Pill, ShieldAlert, Stethoscope, X } from 'lucide-react'
import type { MedicalHistory } from '../../types/doctorConsultation'

interface MedicalHistoryModalProps {
  isOpen: boolean
  onClose: () => void
  patientName: string
  medicalHistory: MedicalHistory
}

export function MedicalHistoryModal({
  isOpen,
  onClose,
  patientName,
  medicalHistory,
}: MedicalHistoryModalProps) {
  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="medical-history-title"
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
          max-w-[650px]
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
              <FileText className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <h2
                id="medical-history-title"
                className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
              >
                Comprehensive Medical History
              </h2>

              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Patient record for <strong>{patientName}</strong>
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

        {/* Sections */}
        <div className="mt-5 space-y-5">
          {/* Current Medications */}
          <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-4">
            <h3 className="flex items-center gap-2 font-inter text-[12px] font-bold tracking-wider text-ink-600 uppercase">
              <Pill className="size-4 text-brand-600" />
              Current Active Medications
            </h3>

            {medicalHistory.currentMedications.length > 0 ? (
              <div className="mt-2.5 divide-y divide-slate-200/60">
                {medicalHistory.currentMedications.map((med, idx) => (
                  <div key={idx} className="py-2 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-[13px] font-bold text-ink-850">
                        {med.name} — <span className="font-normal text-brand-700">{med.dosage}</span>
                      </span>
                      <span className="rounded-full bg-slate-200/60 px-2 py-0.5 font-inter text-[10px] font-semibold text-ink-600">
                        {med.prescribedBy}
                      </span>
                    </div>
                    <span className="block font-inter text-[11px] text-ink-500">
                      Frequency: {med.frequency}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 font-inter text-[12px] text-ink-400">No active medications reported.</p>
            )}
          </div>

          {/* Allergies & Reactions */}
          <div className="rounded-[16px] border border-rose-100 bg-rose-50/50 p-4">
            <h3 className="flex items-center gap-2 font-inter text-[12px] font-bold tracking-wider text-rose-800 uppercase">
              <ShieldAlert className="size-4 text-rose-600" />
              Documented Allergies & Sensitivities
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {medicalHistory.allergies.map((allergy, idx) => (
                <span
                  key={idx}
                  className="rounded-[10px] border border-rose-200 bg-white px-3 py-1 font-inter text-[12px] font-bold text-rose-700 shadow-sm"
                >
                  ⚠️ {allergy}
                </span>
              ))}
            </div>
          </div>

          {/* Chronic Conditions */}
          <div className="rounded-[16px] border border-indigo-100 bg-brand-50/40 p-4">
            <h3 className="flex items-center gap-2 font-inter text-[12px] font-bold tracking-wider text-brand-700 uppercase">
              <AlertCircle className="size-4 text-brand-600" />
              Chronic & Recurring Conditions
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {medicalHistory.chronicConditions.map((condition, idx) => (
                <span
                  key={idx}
                  className="rounded-[10px] border border-brand-200 bg-white px-3 py-1 font-inter text-[12px] font-semibold text-brand-700 shadow-sm"
                >
                  🩺 {condition}
                </span>
              ))}
            </div>
          </div>

          {/* Past Medical & Surgical History */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-4">
              <h3 className="flex items-center gap-2 font-inter text-[11px] font-bold tracking-wider text-ink-600 uppercase">
                <Stethoscope className="size-3.5 text-brand-600" />
                Past Medical History
              </h3>

              <ul className="mt-2 space-y-1.5 font-inter text-[12px] text-ink-700">
                {medicalHistory.pastMedicalHistory.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-4">
              <h3 className="flex items-center gap-2 font-inter text-[11px] font-bold tracking-wider text-ink-600 uppercase">
                <FileText className="size-3.5 text-brand-600" />
                Surgical History
              </h3>

              <ul className="mt-2 space-y-1.5 font-inter text-[12px] text-ink-700">
                {medicalHistory.surgicalHistory.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-indigo-deep" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Close Record
          </button>
        </div>
      </div>
    </div>
  )
}
