import { TYPE } from '../../lib/typography'
import { PayPhoneIllustration } from './icons/PayPhoneIllustration'

export function ConsultationHero() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden rounded-[20px] bg-[linear-gradient(94deg,#B18CFF_0%,#5C24FF_100%)] px-5 py-5 sm:rounded-[24px] sm:px-6 sm:py-5 lg:min-h-[132px] lg:px-[22px] lg:py-[20px] xl:min-h-[141px]">
      <div className="relative z-10 max-w-[62%] min-w-0 sm:max-w-[66%] lg:max-w-[calc(100%-175px)]">
        <h1 className={`${TYPE.hero} text-white`}>
          Doctor Consultation
        </h1>

        <p className={`${TYPE.heroSub} mt-1 text-white/90`}>
          Consult and get better with top specialists powered by AI
        </p>
      </div>

      <PayPhoneIllustration
        className="pointer-events-none absolute right-1 -bottom-1 h-[82px] w-auto sm:right-2 sm:h-[102px] lg:right-3 lg:h-[132px]"
      />
    </section>
  )
}