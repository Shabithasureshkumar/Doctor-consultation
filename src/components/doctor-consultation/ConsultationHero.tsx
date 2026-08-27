import { PayPhoneIllustration } from './icons/PayPhoneIllustration'

export function ConsultationHero() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden rounded-[20px] bg-[linear-gradient(94deg,#B18CFF_0%,#5C24FF_100%)] p-4 sm:rounded-[24px] sm:p-5 lg:min-h-[136px] lg:px-[22px] lg:py-[20px] xl:min-h-[141px]">
      <div className="relative z-10 max-w-[72%] min-w-0 sm:max-w-[68%] lg:max-w-[calc(100%-170px)]">
        <h1 className="font-sora text-[17px] leading-[22px] sm:text-[22px] sm:leading-[27px] md:text-[25px] md:leading-[30px] lg:text-[27px] lg:leading-[32px] font-bold text-white whitespace-nowrap">
          Doctor Consultation
        </h1>

        <p className="mt-1 font-inter text-[11px] leading-[15px] sm:text-[12px] sm:leading-[17px] lg:text-[12px] lg:leading-[18px] text-white/90">
          Consult and get better with top specialists powered by AI
        </p>
      </div>

      <PayPhoneIllustration
        className="pointer-events-none absolute -right-1 -bottom-1 h-[78px] w-auto sm:right-1 sm:bottom-0 sm:h-[105px] lg:right-2 lg:h-[134px]"
      />
    </section>
  )
}