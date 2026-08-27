import { useState } from 'react'
import { Activity, Trash2, X } from 'lucide-react'
import type { SymptomItem } from '../../types/doctorConsultation'

interface SymptomDetailModalProps {
  isOpen: boolean
  onClose: () => void
  symptom: SymptomItem | null
  onUpdate: (updated: SymptomItem) => void
  onRemove: (id: string) => void
}

export function SymptomDetailModal({
  isOpen,
  onClose,
  symptom,
  onUpdate,
  onRemove,
}: SymptomDetailModalProps) {
  if (!isOpen || !symptom) return null

  const [severity, setSeverity] = useState<'Mild' | 'Moderate' | 'Severe'>(symptom.severity)
  const [duration, setDuration] = useState(symptom.duration)
  const [onset, setOnset] = useState<'Sudden' | 'Gradual'>(symptom.onset)

  const handleSave = () => {
    onUpdate({
      ...symptom,
      severity,
      duration,
      onset,
    })
    onClose()
  }

  const handleRemove = () => {
    onRemove(symptom.id)
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="symptom-detail-title"
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
          w-full
          max-w-[440px]
          rounded-[24px]
          border
          border-white/80
          bg-white
          p-5
          shadow-[0_25px_60px_-15px_rgba(79,70,229,0.3)]
          sm:p-6
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-[14px] bg-brand-50 text-brand-600">
              <Activity className="size-5 text-brand-600" />
            </span>
            <div>
              <h2
                id="symptom-detail-title"
                className="font-inter text-[17px] font-bold text-ink-900"
              >
                {symptom.name}
              </h2>
              <span className="font-inter text-[11px] text-ink-500">
                Symptom Details & Severity
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-8 items-center justify-center rounded-full text-ink-400 hover:bg-slate-100 hover:text-ink-700"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-4 space-y-4">
          {/* Severity */}
          <div>
            <label className="block font-inter text-[11px] font-bold tracking-wider text-ink-500 uppercase">
              Severity Level
            </label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(['Mild', 'Moderate', 'Severe'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSeverity(level)}
                  className={`rounded-[12px] py-2 font-inter text-[12px] font-bold transition-all ${
                    severity === level
                      ? level === 'Severe'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : level === 'Moderate'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-emerald-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-[#F8FAFC] text-ink-700 hover:bg-slate-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label
              htmlFor="symptom-duration"
              className="block font-inter text-[11px] font-bold tracking-wider text-ink-500 uppercase"
            >
              Duration
            </label>
            <input
              id="symptom-duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 4 days, 2 weeks"
              className="mt-1.5 w-full rounded-[12px] border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-inter text-[13px] text-ink-800 outline-none focus:border-brand-600 focus:bg-white"
            />
          </div>

          {/* Onset */}
          <div>
            <label className="block font-inter text-[11px] font-bold tracking-wider text-ink-500 uppercase">
              Pattern / Onset
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(['Gradual', 'Sudden'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOnset(type)}
                  className={`rounded-[12px] py-2 font-inter text-[12px] font-semibold transition-all ${
                    onset === type
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-[#F8FAFC] text-ink-700 hover:bg-slate-100'
                  }`}
                >
                  {type} Onset
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={handleRemove}
            className="flex items-center gap-1 font-inter text-[12px] font-semibold text-rose-600 hover:text-rose-700"
          >
            <Trash2 className="size-3.5" /> Remove
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[10px] border border-slate-200 px-3 py-1.5 font-inter text-[12px] font-semibold text-ink-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-[10px] bg-brand-600 px-4 py-1.5 font-inter text-[12px] font-bold text-white hover:opacity-90"
            >
              Save Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
