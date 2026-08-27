import { Check, UserPlus } from 'lucide-react'
import type { FamilyMember } from '../../types/doctorConsultation'
import { cn } from '../../lib/cn'

interface FamilyMembersProps {
  members: FamilyMember[]
  selectedId: string
  onSelect: (id: string) => void
  onAddMember: () => void
}

export function FamilyMembers({
  members,
  selectedId,
  onSelect,
  onAddMember,
}: FamilyMembersProps) {
  return (
    <section className="flex h-full w-full min-w-0 flex-col">
      {/* Section Heading */}
      <h2
        className="
          mb-2.5
          font-inter
          text-[15px]
          leading-[20px]
          font-semibold
          text-ink-900
          sm:text-[17px]
          lg:mb-3
        "
      >
        Who Needs Help?
      </h2>

      {/* =====================================================
          1. MOBILE / TABLET HORIZONTAL SELECTOR (< lg)
      ====================================================== */}
      <div className="flex lg:hidden w-full min-w-0 items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
        {members.map((member) => {
          const isActive = member.id === selectedId

          return (
            <button
              key={member.id}
              type="button"
              onClick={() => onSelect(member.id)}
              className={cn(
                'flex shrink-0 items-center gap-2.5 rounded-[14px] px-3 py-2 text-left transition-all',
                isActive
                  ? 'border border-[rgba(70,72,212,0.4)] bg-white shadow-[0_4px_12px_rgba(70,72,212,0.15)]'
                  : 'border border-slate-200/80 bg-white/75 hover:border-slate-300',
              )}
            >
              <img
                src={member.avatar}
                alt=""
                className="size-8 shrink-0 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <span className="font-inter text-[12px] font-bold text-ink-800 whitespace-nowrap">
                  {member.name}
                </span>
                <span className="font-inter text-[10px] text-ink-400">
                  {member.relation}
                </span>
              </div>

              {isActive && (
                <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-indigo-deep text-white ml-1">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
              )}
            </button>
          )
        })}

        {/* Add Family Member Pill on Mobile */}
        <button
          type="button"
          onClick={onAddMember}
          className="flex shrink-0 items-center gap-1.5 rounded-[14px] border border-dashed border-slate-300 bg-white/50 px-3 py-2 text-ink-600 hover:border-brand-600 hover:text-brand-600"
        >
          <UserPlus className="size-3.5" />
          <span className="font-inter text-[11px] font-semibold whitespace-nowrap">
            + Add
          </span>
        </button>
      </div>

      {/* =====================================================
          2. DESKTOP VERTICAL SELECTOR (>= lg)
      ====================================================== */}
      <div className="hidden lg:flex flex-col gap-2">
        <ul className="flex flex-col gap-2">
          {members.map((member) => {
            const isActive = member.id === selectedId

            return (
              <li key={member.id} className="w-full">
                <button
                  type="button"
                  onClick={() => onSelect(member.id)}
                  aria-pressed={isActive}
                  className={cn(
                    `
                      flex
                      min-h-[56px]
                      w-full
                      min-w-0
                      items-center
                      gap-2.5
                      rounded-[14px]
                      px-3
                      py-2
                      text-left
                      transition-all
                    `,
                    isActive
                      ? `
                        border
                        border-[rgba(70,72,212,0.35)]
                        bg-white
                        shadow-[0_5px_16px_-6px_rgba(70,72,212,0.25)]
                      `
                      : `
                        border
                        border-white/50
                        bg-white/75
                        shadow-[0_4px_14px_-6px_rgba(0,0,0,0.07)]
                        hover:border-[rgba(70,72,212,0.2)]
                      `,
                  )}
                >
                  <img
                    src={member.avatar}
                    alt=""
                    className="
                      size-[32px]
                      shrink-0
                      rounded-full
                      object-cover
                    "
                  />

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span
                      className="
                        truncate
                        font-inter
                        text-[12px]
                        leading-[16px]
                        font-bold
                        text-ink-800
                      "
                    >
                      {member.name}
                    </span>

                    <span
                      className="
                        truncate
                        font-inter
                        text-[11px]
                        leading-[14px]
                        font-normal
                        text-ink-400
                      "
                    >
                      {member.relation}
                    </span>
                  </span>

                  {isActive && (
                    <span
                      className="
                        flex
                        size-[19px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-deep
                      "
                    >
                      <Check
                        className="size-[11px] text-white"
                        strokeWidth={3}
                      />
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Add Family Member Desktop */}
        <button
          type="button"
          onClick={onAddMember}
          className="
            mt-2.5
            flex
            min-h-[42px]
            w-full
            items-center
            justify-center
            gap-1.5
            rounded-[13px]
            border
            border-dashed
            border-[#C7C4D8]
            bg-white/30
            px-2
            py-2
            transition-colors
            hover:border-brand-600
            hover:bg-brand-50
            hover:text-brand-600
          "
        >
          <UserPlus
            className="size-[13px] shrink-0"
            strokeWidth={2.1}
          />

          <span
            className="
              whitespace-nowrap
              font-inter
              text-[11px]
              leading-[15px]
              font-medium
              text-ink-600
            "
          >
            Add Family Member
          </span>
        </button>
      </div>
    </section>
  )
}