import { Bot, CheckCircle2, FileText, Sparkles, TrendingUp, X } from 'lucide-react'
import type { AIPreVisitSummaryData } from '../../types/doctorConsultation'

interface AIPreVisitSummaryModalProps {
  isOpen: boolean
  onClose: () => void
  data: AIPreVisitSummaryData
}

export function AIPreVisitSummaryModal({
  isOpen,
  onClose,
  data,
}: AIPreVisitSummaryModalProps) {
  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-summary-title"
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
            <span className="flex size-11 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#EEF2FF_0%,#E0E7FF_100%)] text-indigo-accent">
              <Bot className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2
                  id="ai-summary-title"
                  className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
                >
                  AI Pre-Visit Clinical Summary
                </h2>

                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 font-inter text-[11px] font-semibold text-brand-700">
                  <Sparkles className="size-3 text-brand-600" />
                  AI-Assisted
                </span>
              </div>

              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Synthesized for {data.doctorName} · {data.patientName}
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

        {/* Disclaimer Banner */}
        <div className="mt-4 flex items-center gap-2.5 rounded-[12px] border border-amber-200/80 bg-amber-50/80 px-3.5 py-2.5 text-amber-900">
          <Sparkles className="size-4 shrink-0 text-amber-600" />
          <span className="font-inter text-[11px] font-medium leading-[16px] text-amber-800">
            <strong>AI-generated summary — for doctor review.</strong> Synthesized from patient intake, reported symptoms, and recent lab history.
          </span>
        </div>

        {/* Content Body */}
        <div className="mt-5 space-y-5">
          {/* Main Complaint */}
          <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-4">
            <h3 className="flex items-center gap-2 font-inter text-[12px] font-bold tracking-wider text-ink-500 uppercase">
              <FileText className="size-4 text-brand-600" />
              Chief Complaint & Clinical Overview
            </h3>

            <p className="mt-2 font-inter text-[13px] leading-[20px] font-medium text-ink-800">
              {data.mainComplaint}
            </p>

            <div className="mt-3 border-t border-slate-200/70 pt-2.5">
              <span className="font-inter text-[11px] font-bold text-ink-500 uppercase">Timeline: </span>
              <span className="font-inter text-[12px] text-ink-700">{data.symptomTimeline}</span>
            </div>
          </div>

          {/* Detected Symptoms with Severity */}
          <div>
            <h3 className="font-inter text-[12px] font-bold tracking-wider text-ink-500 uppercase">
              Reported Symptoms & Attributes
            </h3>

            <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {data.detectedSymptoms.map((symptom) => (
                <div
                  key={symptom.id}
                  className="flex flex-col rounded-[14px] border border-indigo-100/80 bg-brand-50/60 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-[13px] font-bold text-brand-700">
                      {symptom.name}
                    </span>

                    <span
                      className={`rounded-full px-2 py-0.5 font-inter text-[10px] font-bold uppercase ${
                        symptom.severity === 'Severe'
                          ? 'bg-rose-100 text-rose-700'
                          : symptom.severity === 'Moderate'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {symptom.severity}
                    </span>
                  </div>

                  <span className="mt-1 font-inter text-[11px] text-ink-500">
                    Duration: {symptom.duration} · Onset: {symptom.onset}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Lab Trends */}
          <div>
            <h3 className="flex items-center gap-1.5 font-inter text-[12px] font-bold tracking-wider text-ink-500 uppercase">
              <TrendingUp className="size-4 text-brand-600" />
              Recent Lab Trends (Synthesized)
            </h3>

            <div className="mt-2.5 overflow-hidden rounded-[16px] border border-slate-100 bg-[#F8FAFC]">
              <div className="divide-y divide-slate-100">
                {data.recentLabTrends.map((lab) => (
                  <div
                    key={lab.testName}
                    className="flex flex-wrap items-center justify-between gap-2 p-3 text-left"
                  >
                    <div>
                      <span className="font-inter text-[12px] font-bold text-ink-800">
                        {lab.testName}
                      </span>
                      <span className="block font-inter text-[11px] text-ink-400">
                        Ref: {lab.referenceRange} · {lab.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-inter text-[13px] font-bold text-ink-900">
                        {lab.value} {lab.unit}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase ${
                          lab.status === 'normal'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {lab.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Clinical Observations */}
          <div className="rounded-[16px] border border-brand-100 bg-[linear-gradient(135deg,rgba(79,70,229,0.05)_0%,rgba(168,85,247,0.05)_100%)] p-4">
            <h3 className="font-inter text-[12px] font-bold tracking-wider text-brand-700 uppercase">
              AI Clinical Observations for Attending Doctor
            </h3>

            <ul className="mt-2 space-y-1.5">
              {data.observations.map((obs, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 font-inter text-[12px] leading-[18px] text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-600" />
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
