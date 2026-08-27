import {
  CalendarDays,
  Clock,
  CreditCard,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { BookingMetric } from '../../types/doctorConsultation'

const ICONS: Record<string, LucideIcon> = {
  date: CalendarDays,
  time: Clock,
  duration: Users,
  fee: CreditCard,
}

export function BookingMetrics({
  metrics,
}: {
  metrics: BookingMetric[]
}) {
  return (
    <div
      className="
        grid
        w-full
        min-w-0
        grid-cols-2
        gap-2.5
        lg:grid-cols-4
      "
    >
      {metrics.map((metric) => {
        const Icon = ICONS[metric.id] ?? CalendarDays

        return (
          <div
            key={metric.id}
            className="
              flex
              min-h-[76px]
              min-w-0
              flex-col
              items-center
              justify-center
              gap-1
              rounded-[16px]
              bg-metric
              px-2
              py-2.5
              text-center
              lg:min-h-[78px]
              lg:rounded-[17px]
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-1.5
              "
            >
              <Icon
                className="
                  size-[13px]
                  shrink-0
                  text-ink-400
                "
                strokeWidth={2.2}
              />

              <span
                className="
                  truncate
                  font-inter
                  text-[11px]
                  leading-[14px]
                  font-semibold
                  tracking-[0.02em]
                  text-ink-400
                  uppercase
                "
              >
                {metric.label}
              </span>
            </div>

            <span
              className={
                `
                  font-inter
                  text-[14px]
                  leading-[18px]
                  font-bold
                  ${
                    metric.emphasised
                      ? 'gradient-text bg-[linear-gradient(180deg,#6B38D4_0%,#5C24FF_100%)]'
                      : 'text-ink-900'
                  }
                `
              }
            >
              {metric.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}