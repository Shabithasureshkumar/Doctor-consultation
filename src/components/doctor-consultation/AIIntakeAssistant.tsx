import { useState } from 'react'
import { Bot, Mic, Sparkles, X } from 'lucide-react'

interface AIIntakeAssistantProps {
  symptoms: string[]
  reason: string
  onRemoveSymptom: (symptom: string) => void
  onAddSymptom: (symptom: string) => void
  onReasonChange: (value: string) => void
  onViewSummary: () => void
}

export function AIIntakeAssistant({
  symptoms,
  reason,
  onRemoveSymptom,
  onAddSymptom,
  onReasonChange,
  onViewSummary,
}: AIIntakeAssistantProps) {
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState('')

  const commitDraft = () => {
    const value = draft.trim()

    if (value) {
      onAddSymptom(value)
    }

    setDraft('')
    setAdding(false)
  }

  return (
    <section
      className="
        flex
        w-full
        min-w-0
        flex-col
        gap-4
        rounded-[20px]
        border
        border-[#F1F5F9]
        bg-white
        p-4
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]

        sm:gap-5
        sm:rounded-[24px]
        sm:p-5

        lg:rounded-[28px]
        lg:p-6

        xl:rounded-[30px]
        xl:p-7
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

            lg:size-[46px]
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

            sm:text-[18px]
            sm:leading-[23px]
          "
        >
          AI Intake Assistant
        </h2>
      </div>

      {/* Detected Symptoms */}
      <div className="flex min-w-0 flex-col gap-2.5">
        <h3
          className="
            font-inter
            text-[10px]
            leading-[14px]
            font-bold
            tracking-[0.05em]
            uppercase
            text-ink-300
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
              key={symptom}
              className="
                flex
                min-h-[36px]
                max-w-full
                min-w-0
                items-center
                gap-1.5
                rounded-[13px]
                bg-brand-50
                px-3

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
                {symptom}
              </span>

              <button
                type="button"
                onClick={() => onRemoveSymptom(symptom)}
                aria-label={`Remove ${symptom}`}
                className="
                  flex
                  size-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-brand-600
                  transition-colors
                  hover:bg-brand-100
                "
              >
                <X
                  className="size-[13px]"
                  strokeWidth={2.6}
                />
              </button>
            </span>
          ))}

          {adding ? (
            <input
              autoFocus
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onBlur={commitDraft}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  commitDraft()
                }

                if (event.key === 'Escape') {
                  setDraft('')
                  setAdding(false)
                }
              }}
              placeholder="Symptom"
              aria-label="New symptom"
              className="
                min-h-[38px]
                w-[140px]
                min-w-0
                rounded-[13px]
                border
                border-[#CBD5E1]
                px-3
                font-inter
                text-[12px]
                font-semibold
                text-ink-700
                outline-none

                sm:rounded-[14px]
                sm:text-[13px]
              "
            />
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
                text-ink-300
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

      {/* AI Summary */}
      <div
        className="
          flex
          min-w-0
          flex-col
          gap-3
          rounded-[15px]
          border
          border-[rgba(48,47,191,0.20)]
          bg-[rgba(79,70,229,0.10)]
          p-3.5

          sm:rounded-[16px]
          sm:p-4
        "
      >
        <div className="flex min-w-0 items-start gap-2">
          <Sparkles
            className="mt-[2px] size-[15px] shrink-0 text-[#302FBF]"
            strokeWidth={2.2}
          />

          <div className="flex min-w-0 flex-col gap-1">
            <h4
              className="
                font-inter
                text-[13px]
                leading-[18px]
                font-bold
                text-[#302FBF]

                sm:text-[14px]
                sm:leading-[20px]
              "
            >
              Pre-visit summary ready
            </h4>

            <p
              className="
                font-inter
                text-[12px]
                leading-[18px]
                font-normal
                text-[#424752]

                sm:text-[13px]
                sm:leading-[19px]
              "
            >
              AI has synthesized your last 3 blood results for the doctor to
              review.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onViewSummary}
          className="
            flex
            min-h-[34px]
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

            sm:min-h-[36px]
            sm:rounded-[10px]
            sm:px-3.5
            sm:text-[12px]
          "
        >
          View
          <span aria-hidden>›</span>
        </button>
      </div>

      {/* Reason */}
      <div className="flex min-w-0 flex-col gap-2.5">
        <label
          htmlFor="reason"
          className="
            font-inter
            text-[10px]
            leading-[14px]
            font-bold
            tracking-[0.05em]
            uppercase
            text-ink-300
          "
        >
          Reason for Appointment
        </label>

        <div className="relative w-full min-w-0">
          <textarea
            id="reason"
            value={reason}
            onChange={(event) => onReasonChange(event.target.value)}
            placeholder="Briefly describe your condition..."
            className="
              textarea-reset
              min-h-[110px]
              w-full
              rounded-[16px]
              bg-[#F8FAFC]
              p-3.5
              pr-14
              font-inter
              text-[13px]
              leading-[20px]
              text-ink-700
              placeholder:text-[#6B7280]

              sm:min-h-[120px]
              sm:rounded-[18px]
              sm:p-4
              sm:pr-16
              sm:text-[14px]
              sm:leading-[21px]

              lg:min-h-[130px]
            "
          />

          <button
            type="button"
            aria-label="Dictate your condition"
            className="
              absolute
              right-3
              bottom-3
              flex
              size-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-indigo-accent
              shadow-[0_2px_8px_rgba(15,23,42,0.12)]
              transition-colors
              hover:bg-brand-50

              sm:size-10
            "
          >
            <Mic
              className="size-[16px] sm:size-[17px]"
              strokeWidth={2.2}
            />
          </button>
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
          leading-[17px]
          font-semibold
          text-indigo-accent

          sm:text-[12px]
          sm:leading-[18px]
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