import { ArrowRight, ShieldCheck } from 'lucide-react'
import { TYPE } from '../../lib/typography'

export function StickyConfirmationBar({
  onConfirm,
}: {
  onConfirm: () => void
}) {
  return (
    <div className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(196,186,214,0.2)] bg-white/90 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] min-w-0 items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 xl:px-10">
        {/* Left copy */}
        <div className="hidden min-w-0 items-center gap-3 sm:flex">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(0,124,148,0.15)] lg:size-11">
            <ShieldCheck
              className="size-[18px] text-[#007C94]"
              strokeWidth={2.2}
            />
          </span>

          <div className="flex min-w-0 flex-col">
            <span className="truncate font-inter text-[14px] leading-[19px] font-semibold text-[#191C1E] lg:text-[16px] lg:leading-[22px]">
              You're Just One Step Away
            </span>

            <span className="truncate font-inter text-[10px] leading-[15px] text-[#494454] lg:text-[11px] lg:leading-[17px]">
              Review your appointment details and confirm your booking securely.
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onConfirm}
          className="flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-[11px] bg-[linear-gradient(92deg,#936AE6_0%,#5C24FF_100%)] px-5 text-white transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[180px] lg:min-h-[48px] lg:min-w-[205px] lg:px-7"
        >
          <span className={`${TYPE.button} font-bold`}>
            Confirm Booking
          </span>

          <ArrowRight
            className="size-[15px] shrink-0"
            strokeWidth={2.4}
          />
        </button>
      </div>
    </div>
  )
}