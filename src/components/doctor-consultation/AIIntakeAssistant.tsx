import { useState } from 'react'
import { Bot, Check, ChevronRight, Mic, MicOff, Search, Sparkles, X } from 'lucide-react'
import type { SymptomItem } from '../../types/doctorConsultation'
import { SYMPTOM_SUGGESTIONS } from '../../data/doctorConsultationData'

interface AIIntakeAssistantProps {
  symptoms: SymptomItem[]
  reason: string
  onRemoveSymptom: (id: string) => void
  onAddSymptom: (symptom: SymptomItem) => void
  onSelectSymptom: (symptom: SymptomItem) => void
  onReasonChange: (value: string) => void
  onViewSummary: () => void
}

export function AIIntakeAssistant({
  symptoms,
  reason,
  onRemoveSymptom,
  onAddSymptom,
  onSelectSymptom,
  onReasonChange,
  onViewSummary,
}: AIIntakeAssistantProps) {
  const [adding, setAdding] = useState(false)
  const [query, setQuery] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const filteredSuggestions = SYMPTOM_SUGGESTIONS.filter(
    (s) =>
      s.toLowerCase().includes(query.toLowerCase()) &&
      !symptoms.some((item) => item.name.toLowerCase() === s.toLowerCase()),
  )

  const handleAdd = (name: string) => {
    if (!name.trim()) return

    const newSymptom: SymptomItem = {
      id: `symptom-${Date.now()}`,
      name: name.trim(),
      severity: 'Moderate',
      duration: '3 days',
      onset: 'Gradual',
    }

    onAddSymptom(newSymptom)
    setQuery('')
    setAdding(false)
  }

  const toggleVoiceRecording = () => {
    if (isRecording) {
      setIsRecording(false)
    } else {
      setIsRecording(true)
      setTimeout(() => {
        const dictationText =
          reason.trim()
            ? `${reason} Experiencing throbbing headaches and light sensitivity.`
            : 'Experiencing recurring throbbing headaches for the past 4 days, especially in the afternoon.'
        onReasonChange(dictationText.slice(0, 500))
        setIsRecording(false)
      }, 2500)
    }
  }

  return (
    <section
      className="
        card-surface
        flex
        w-full
        min-w-0
        flex-col
        gap-3.5
        rounded-[20px]
        p-4
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]
        sm:gap-4
        sm:rounded-[24px]
        sm:p-5
        lg:rounded-[28px]
        lg:p-6
        xl:rounded-[30px]
        xl:p-6
      "
    >
      {/* Header */}
      <div
        className="
          flex
          min-w-0
          items-center
          gap-3
        "
      >
        <span
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-[13px]
            bg-brand-50
            sm:size-11
            sm:rounded-[14px]
            lg:size-[44px]
          "
        >
          <Bot
            className="size-[20px] text-indigo-accent sm:size-[21px]"
            strokeWidth={2}
          />
        </span>

        <h2
          className="
            min-w-0
            font-inter
            text-[18px]
            leading-[23px]
            font-bold
            tracking-[-0.01em]
            text-ink-850
          "
        >
          AI Intake Assistant
        </h2>
      </div>

      {/* Detected Symptoms */}
      <div className="flex min-w-0 flex-col gap-2">
        <h3
          className="
            font-inter
            text-[11px]
            leading-[14px]
            font-bold
            tracking-[0.05em]
            uppercase
            text-ink-400
          "
        >
          Detected Symptoms
        </h3>

        <div
          className="
            flex
            min-w-0
            flex-wrap
            items-center
            gap-2
          "
        >
          {symptoms.map((symptom) => (
            <span
              key={symptom.id}
              onClick={() => onSelectSymptom(symptom)}
              className="
                group
                flex
                min-h-[36px]
                max-w-full
                min-w-0
                items-center
                gap-1.5
                rounded-[13px]
                bg-brand-50
                px-3
                cursor-pointer
                transition-all
                hover:bg-brand-100
                sm:min-h-[38px]
                sm:rounded-[14px]
                sm:px-3.5
              "
            >
              <span
                className="
                  min-w-0
                  truncate
                  font-inter
                  text-[12px]
                  leading-[17px]
                  font-semibold
                  text-brand-600
                  sm:text-[13px]
                  sm:leading-[18px]
                "
              >
                {symptom.name}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemoveSymptom(symptom.id)
                }}
                aria-label={`Remove ${symptom.name}`}
                className="
                  flex
                  size-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-brand-600
                  transition-colors
                  hover:bg-brand-200
                "
              >
                <X
                  className="size-[13px]"
                  strokeWidth={2.6}
                />
              </button>
            </span>
          ))}

          {/* Add Symptom Trigger / Autocomplete */}
          {adding ? (
            <div className="relative z-20">
              <div className="flex items-center rounded-[13px] border border-brand-400 bg-white px-3 py-1 sm:rounded-[14px]">
                <Search className="size-3.5 text-slate-400 mr-1.5" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAdd(query)
                    }
                    if (e.key === 'Escape') {
                      setAdding(false)
                      setQuery('')
                    }
                  }}
                  placeholder="Symptom name..."
                  className="w-[120px] font-inter text-[12px] font-semibold text-ink-800 outline-none sm:text-[13px]"
                />
                <button
                  type="button"
                  onClick={() => setAdding(false)}
                  className="text-slate-400 hover:text-slate-600 ml-1"
                >
                  <X className="size-3.5" />
                </button>
              </div>

              {/* Dropdown Suggestions */}
              <div className="absolute top-[calc(100%+4px)] left-0 z-30 max-h-[170px] w-[190px] overflow-y-auto rounded-[14px] border border-slate-200 bg-white p-1.5 shadow-lg">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => handleAdd(sug)}
                      className="flex w-full items-center justify-between rounded-[8px] px-2.5 py-1.5 text-left font-inter text-[12px] font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{sug}</span>
                      <ChevronRight className="size-3 text-slate-400" />
                    </button>
                  ))
                ) : (
                  <button
                    type="button"
                    onClick={() => handleAdd(query)}
                    className="flex w-full items-center justify-between rounded-[8px] px-2.5 py-1.5 text-left font-inter text-[12px] font-bold text-brand-700 hover:bg-brand-50"
                  >
                    <span>+ Add &quot;{query}&quot;</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setAdding(true)}
              className="
                flex
                min-h-[38px]
                shrink-0
                items-center
                rounded-[13px]
                border
                border-dashed
                border-[#CBD5E1]
                px-3
                font-inter
                text-[12px]
                leading-[17px]
                font-semibold
                text-ink-400
                transition-colors
                hover:border-brand-600
                hover:text-brand-600
                sm:rounded-[14px]
                sm:px-3.5
                sm:text-[13px]
              "
            >
              + Add Symptom
            </button>
          )}
        </div>
      </div>

      {/* AI Summary Card from Figma */}
      <div
        className="
          flex
          min-w-0
          flex-col
          gap-2.5
          rounded-[15px]
          border
          border-[rgba(48,47,191,0.20)]
          bg-[rgba(79,70,229,0.10)]
          p-3.5
          sm:rounded-[16px]
        "
      >
        <div className="flex min-w-0 items-start gap-2">
          <Sparkles
            className="mt-[2px] size-[15px] shrink-0 text-[#302FBF]"
            strokeWidth={2.2}
          />

          <div className="flex min-w-0 flex-col gap-0.5">
            <h4
              className="
                font-inter
                text-[13px]
                leading-[18px]
                font-bold
                text-[#302FBF]
                sm:text-[14px]
                sm:leading-[19px]
              "
            >
              Pre-visit summary ready
            </h4>

            <p
              className="
                font-inter
                text-[11.5px]
                leading-[16px]
                font-normal
                text-[#424752]
                sm:text-[12px]
                sm:leading-[17px]
              "
            >
              AI has synthesized your last 3 blood results for the doctor to review.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onViewSummary}
          className="
            flex
            min-h-[32px]
            shrink-0
            items-center
            gap-1
            self-end
            rounded-[9px]
            bg-brand-600
            px-3
            font-inter
            text-[11px]
            leading-[15px]
            font-semibold
            text-white
            transition-opacity
            hover:opacity-90
            sm:min-h-[34px]
            sm:rounded-[10px]
            sm:px-3.5
            sm:text-[12px]
          "
        >
          View
          <span aria-hidden>›</span>
        </button>
      </div>

      {/* Reason for Appointment */}
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="reason"
            className="
              font-inter
              text-[11px]
              leading-[14px]
              font-bold
              tracking-[0.05em]
              uppercase
              text-ink-400
            "
          >
            Reason for Appointment
          </label>

          {reason.length > 0 && (
            <span className="flex items-center gap-1 font-inter text-[11px] text-emerald-600 font-medium">
              <Check className="size-3" /> Draft saved just now ✓
            </span>
          )}
        </div>

        <div className="relative w-full min-w-0">
          <textarea
            id="reason"
            maxLength={500}
            value={reason}
            onChange={(event) => onReasonChange(event.target.value)}
            placeholder="Briefly describe your condition..."
            className="
              textarea-reset
              min-h-[96px]
              w-full
              rounded-[16px]
              bg-[#F8FAFC]
              p-3
              pr-14
              font-inter
              text-[13px]
              leading-[19px]
              text-ink-700
              placeholder:text-[#6B7280]
              sm:min-h-[105px]
              sm:rounded-[18px]
              sm:p-3.5
              sm:pr-16
            "
          />

          <button
            type="button"
            onClick={toggleVoiceRecording}
            aria-label={isRecording ? 'Stop recording' : 'Dictate your condition'}
            title={isRecording ? 'Recording... click to stop' : 'Click to dictate'}
            className={`
              absolute
              right-2.5
              bottom-2.5
              flex
              size-8
              items-center
              justify-center
              rounded-full
              shadow-[0_2px_8px_rgba(15,23,42,0.12)]
              transition-all
              ${
                isRecording
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-white text-indigo-accent hover:bg-brand-50'
              }
              sm:size-9
            `}
          >
            {isRecording ? (
              <MicOff className="size-[15px] sm:size-[16px]" strokeWidth={2.2} />
            ) : (
              <Mic className="size-[15px] sm:size-[16px]" strokeWidth={2.2} />
            )}
          </button>
        </div>

        {/* Character count & validation note */}
        <div className="flex items-center justify-between font-inter text-[10.5px] text-ink-400 px-1">
          <span>{isRecording ? '🎙️ Listening to your voice...' : 'Describe symptoms or current discomfort'}</span>
          <span>{reason.length} / 500</span>
        </div>
      </div>

      {/* AI Footer */}
      <p
        className="
          flex
          min-w-0
          items-start
          gap-2
          font-inter
          text-[11px]
          leading-[16px]
          font-semibold
          text-indigo-accent
          sm:text-[11.5px]
        "
      >
        <Sparkles
          className="mt-[1px] size-[14px] shrink-0"
          strokeWidth={2.2}
        />

        <span className="min-w-0">
          Our AI will prepare a clinical summary for the doctor
        </span>
      </p>
    </section>
  )
}