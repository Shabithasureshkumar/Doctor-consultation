import { ArrowRight, ShieldCheck } from 'lucide-react'
import { TYPE } from '../../lib/typography'

export function StickyConfirmationBar({
  onConfirm,
}: {
  onConfirm: () => void
}) {
  return (
    <div className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(196,186,214,0.25)] bg-white/95 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] min-w-0 items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 xl:px-10">
        {/* Left copy on Mobile & Desktop */}
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex size-9 sm:size-10 lg:size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(0,124,148,0.12)]">
            <ShieldCheck
              className="size-[17px] sm:size-[18px] text-[#007C94]"
              strokeWidth={2.2}
            />
          </span>

          <div className="flex min-w-0 flex-col">
            <span className="truncate font-inter text-[13px] leading-[17px] font-bold text-[#191C1E] sm:text-[15px] sm:leading-[20px] lg:text-[16px] lg:leading-[22px]">
              You&apos;re Just One Step Away
            </span>

            <span className="hidden truncate font-inter text-[11px] leading-[15px] text-[#494454] sm:block lg:text-[12px] lg:leading-[17px]">
              Review your appointment details and confirm your booking securely.
            </span>
          </div>
        </div>

        {/* Primary CTA button with >= 48px touch target */}
        <button
          type="button"
          onClick={onConfirm}
          className="
            flex
            min-h-[48px]
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-[12px]
            bg-[linear-gradient(92deg,#936AE6_0%,#5C24FF_100%)]
            px-4
            text-white
            shadow-[0_4px_14px_rgba(92,36,255,0.25)]
            transition-all
            hover:opacity-90
            active:scale-[0.98]
            sm:min-h-[50px]
            sm:min-w-[180px]
            sm:px-6
            lg:min-h-[52px]
            lg:min-w-[205px]
            lg:px-7
          "
        >
          <span className={`${TYPE.button} font-bold text-[14px] sm:text-[15px] whitespace-nowrap`}>
            Confirm Booking
          </span>

          <ArrowRight
            className="size-[15px] sm:size-[16px] shrink-0"
            strokeWidth={2.4}
          />
        </button>
      </div>
    </div>
  )
}