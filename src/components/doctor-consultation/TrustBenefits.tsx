import {
  Headphones,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TRUST_BENEFITS } from '../../data/doctorConsultationData'
import { TYPE } from '../../lib/typography'

const ICONS: Record<string, LucideIcon> = {
  instant: Zap,
  support: Headphones,
  hipaa: ShieldCheck,
  specialists: Star,
}

export function TrustBenefits() {
  return (
    <div className="grid h-full w-full min-w-0 grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4 xl:gap-4">
      {TRUST_BENEFITS.map((benefit) => {
        const Icon = ICONS[benefit.id] ?? Zap

        return (
          <article
            key={benefit.id}
            className="flex min-w-0 flex-col items-center justify-center rounded-[20px] border border-[#F1F5F9] bg-white px-3 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:rounded-[22px] sm:px-4 sm:py-5 xl:min-h-[141px] xl:rounded-[26px]"
          >
            <span className="mb-2.5 flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-brand-50 sm:size-10">
              <Icon
                className="size-[18px] text-indigo-accent sm:size-5"
                strokeWidth={2.2}
              />
            </span>

            <h3 className={`${TYPE.badge} font-bold text-ink-850`}>
              {benefit.title}
            </h3>

            <p className="mt-1 font-inter text-[11px] leading-[15px] text-ink-400">
              {benefit.subtitle}
            </p>
          </article>
        )
      })}
    </div>
  )
}