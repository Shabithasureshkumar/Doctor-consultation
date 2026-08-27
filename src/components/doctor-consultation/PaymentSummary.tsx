import { CreditCard, Lock } from 'lucide-react'
import type { FeeLine } from '../../types/doctorConsultation'

interface PaymentSummaryProps {
  fees: FeeLine[]
  total: string
  cardHolder: string
  cardNumber: string
}

export function PaymentSummary({
  fees,
  total,
  cardHolder,
  cardNumber,
}: PaymentSummaryProps) {
  return (
    <section
      className="
        card-surface
        flex w-full min-w-0 flex-col
        gap-5
        rounded-[20px]
        p-4
        sm:gap-5
        sm:rounded-[24px]
        sm:p-5
        lg:gap-6
        lg:rounded-[28px]
        lg:p-6
        xl:rounded-[30px]
        xl:p-7
      "
    >
      {/* Header */}
      <div className="flex min-w-0 items-center justify-between gap-3">
        <h2
          className="
            font-inter
            text-[18px]
            leading-[23px]
            font-bold
            tracking-[-0.01em]
            text-ink-900
          "
        >
          Payment Summary
        </h2>

        <span
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            text-[#16A34A]
          "
        >
          <Lock
            className="size-[12px] shrink-0 sm:size-[13px]"
            strokeWidth={2.4}
          />

          <span
            className="
              font-inter
              text-[11px]
              leading-[14px]
              font-bold
              tracking-[0.08em]
              uppercase
            "
          >
            Secure
          </span>
        </span>
      </div>

      {/* Fee Breakdown */}
      <dl
        className="
          flex
          min-w-0
          flex-col
          gap-2.5
          sm:gap-3
          lg:gap-3.5
        "
      >
        {fees.map((fee) => (
          <div
            key={fee.id}
            className="
              flex
              min-w-0
              items-center
              justify-between
              gap-4
            "
          >
            <dt
              className="
                min-w-0
                font-inter
                text-[13px]
                leading-[19px]
                font-normal
                text-ink-600
                sm:text-[14px]
                sm:leading-[20px]
              "
            >
              {fee.label}
            </dt>

            <dd
              className="
                shrink-0
                whitespace-nowrap
                font-inter
                text-[13px]
                leading-[19px]
                font-semibold
                text-ink-900
                sm:text-[14px]
                sm:leading-[20px]
              "
            >
              {fee.value}
            </dd>
          </div>
        ))}

        {/* Total */}
        <div
          className="
            mt-1
            flex
            min-w-0
            items-center
            justify-between
            gap-4
            border-t
            border-[#C7C4D7]
            pt-3
            sm:pt-4
          "
        >
          <dt
            className="
              min-w-0
              font-inter
              text-[15px]
              leading-[21px]
              font-bold
              text-ink-900
              sm:text-[16px]
              sm:leading-[22px]
            "
          >
            Total Amount
          </dt>

          <dd
            className="
              shrink-0
              whitespace-nowrap
              font-inter
              text-[16px]
              leading-[22px]
              font-bold
              text-[#4648D4]
              sm:text-[17px]
              sm:leading-[23px]
            "
          >
            {total}
          </dd>
        </div>
      </dl>

      {/* Credit Card Graphic refined & centered matching Figma */}
      <div
        className="
          mx-auto
          w-full
          max-w-[380px]
          min-w-0
          rounded-[18px]
          bg-brand-200
          p-3.5
          sm:rounded-[20px]
          sm:p-4
        "
      >
        <div
          className="
            mx-auto
            flex
            aspect-[16/9.5]
            w-full
            max-w-[320px]
            min-w-0
            rotate-0
            sm:-rotate-[3.5deg]
            flex-col
            justify-between
            rounded-[14px]
            bg-[linear-gradient(109deg,#4648D4_0%,#8127CF_100%)]
            p-4
            shadow-[0_12px_28px_-10px_rgba(70,72,212,0.5)]
            sm:rounded-[16px]
            sm:p-4.5
          "
        >
          {/* Card Top */}
          <div className="flex min-w-0 items-start justify-between gap-3">
            <CreditCard
              className="size-[20px] shrink-0 text-white/90 sm:size-[22px]"
              strokeWidth={1.8}
            />

            <span
              className="
                shrink-0
                font-inter
                text-[13px]
                font-bold
                italic
                text-white
                sm:text-[15px]
              "
            >
              VISA
            </span>
          </div>

          {/* Card Bottom */}
          <div className="flex min-w-0 flex-col gap-0.5">
            <span
              className="
                truncate
                font-inter
                text-[12px]
                tracking-[0.1em]
                text-white
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              {cardNumber}
            </span>

            <span
              className="
                truncate
                font-inter
                text-[10px]
                leading-[14px]
                font-semibold
                text-white/70
                sm:text-[11px]
              "
            >
              {cardHolder}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}