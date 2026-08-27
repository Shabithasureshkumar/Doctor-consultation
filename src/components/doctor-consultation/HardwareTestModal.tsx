import { useState } from 'react'
import { Camera, CheckCircle2, Mic, Volume2, Wifi, X } from 'lucide-react'

interface HardwareTestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HardwareTestModal({ isOpen, onClose }: HardwareTestModalProps) {
  const [playingTestAudio, setPlayingTestAudio] = useState(false)
  const [audioSuccess, setAudioSuccess] = useState(false)

  if (!isOpen) return null

  const handleTestSound = () => {
    setPlayingTestAudio(true)
    setTimeout(() => {
      setPlayingTestAudio(false)
      setAudioSuccess(true)
    }, 1500)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="hardware-test-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-[540px]
          overflow-y-auto
          rounded-[24px]
          border
          border-white/80
          bg-white
          p-5
          shadow-[0_25px_60px_-15px_rgba(79,70,229,0.3)]
          sm:p-7
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[16px] bg-brand-50 text-brand-600">
              <Camera className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <h2
                id="hardware-test-title"
                className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
              >
                Test Audio & Video Setup
              </h2>
              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Verify camera, microphone, and speakers before consultation
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex size-9 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-slate-100 hover:text-ink-700"
          >
            <X className="size-5" strokeWidth={2.2} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4">
          {/* Video Preview Simulation */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-slate-900 shadow-inner flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center text-white/80">
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                <Camera className="size-6 text-brand-400" />
              </span>
              <span className="font-inter text-[13px] font-semibold text-white">
                HD FaceTime Camera (Built-in)
              </span>
              <span className="flex items-center gap-1.5 font-inter text-[11px] text-emerald-400 font-medium">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Video Feed Active & Operational
              </span>
            </div>

            <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 font-inter text-[10px] text-white/90 backdrop-blur-md">
              1080p @ 30fps
            </span>
          </div>

          {/* Microphone Test */}
          <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-inter text-[13px] font-bold text-ink-800">
                <Mic className="size-4 text-brand-600" />
                Microphone Input Level
              </div>
              <span className="font-inter text-[11px] font-semibold text-emerald-600">
                Detecting Voice
              </span>
            </div>

            {/* Visual Level Meter */}
            <div className="mt-2 flex h-2.5 w-full gap-1 overflow-hidden rounded-full bg-slate-200/80 p-0.5">
              <div className="h-full w-[65%] rounded-full bg-[linear-gradient(90deg,#22C55E_0%,#4F46E5_100%)] animate-pulse" />
            </div>
          </div>

          {/* Speaker Test */}
          <div className="rounded-[16px] border border-slate-100 bg-[#F8FAFC] p-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-inter text-[13px] font-bold text-ink-800">
                <Volume2 className="size-4 text-brand-600" />
                Speaker Output Test
              </div>

              <button
                type="button"
                onClick={handleTestSound}
                className="rounded-[10px] bg-white border border-slate-200 px-3 py-1.5 font-inter text-[12px] font-semibold text-brand-700 shadow-sm hover:border-brand-300"
              >
                {playingTestAudio ? 'Playing chime...' : 'Play Test Sound'}
              </button>
            </div>

            {audioSuccess && (
              <p className="mt-2 font-inter text-[11px] text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="size-3.5" /> Test chime played successfully.
              </p>
            )}
          </div>

          {/* Network Health */}
          <div className="flex items-center justify-between rounded-[16px] border border-slate-100 bg-[#F8FAFC] px-4 py-3">
            <div className="flex items-center gap-2">
              <Wifi className="size-4 text-emerald-600" />
              <span className="font-inter text-[12px] font-bold text-ink-800">
                Network Latency
              </span>
            </div>

            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-inter text-[11px] font-bold text-emerald-700">
              Excellent (18 ms)
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[12px] bg-brand-600 px-6 py-2.5 font-inter text-[13px] font-bold text-white hover:opacity-90"
          >
            Ready for Call
          </button>
        </div>
      </div>
    </div>
  )
}
