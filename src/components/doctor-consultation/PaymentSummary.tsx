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
              text-[9px]
              leading-[13px]
              font-bold
              tracking-[0.08em]
              uppercase

              sm:text-[10px]
              sm:leading-[14px]
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

      {/* Card */}
      <div
        className="
          mx-auto
          w-full
          max-w-[430px]
          min-w-0
          rounded-[18px]
          bg-brand-200
          p-4

          sm:rounded-[20px]
          sm:p-5

          lg:rounded-[24px]
          lg:p-5
        "
      >
        <div
          className="
            flex
            aspect-[16/10]
            w-full
            min-w-0
            -rotate-[6deg]
            flex-col
            justify-between
            rounded-[14px]
            bg-[linear-gradient(109deg,#4648D4_0%,#8127CF_100%)]
            p-4
            shadow-[0_16px_36px_-12px_rgba(70,72,212,0.55)]

            sm:rounded-[16px]
            sm:p-5
          "
        >
          {/* Card Top */}
          <div className="flex min-w-0 items-start justify-between gap-3">
            <CreditCard
              className="size-[22px] shrink-0 text-white/90 sm:size-[25px]"
              strokeWidth={1.8}
            />

            <span
              className="
                shrink-0
                font-inter
                text-[14px]
                font-bold
                italic
                text-white

                sm:text-[16px]
              "
            >
              VISA
            </span>
          </div>

          {/* Card Bottom */}
          <div className="flex min-w-0 flex-col gap-1">
            <span
              className="
                truncate
                font-inter
                text-[13px]
                tracking-[0.1em]
                text-white

                sm:text-[15px]
                lg:text-[17px]
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
                text-white/60

                sm:text-[11px]
                sm:leading-[15px]
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