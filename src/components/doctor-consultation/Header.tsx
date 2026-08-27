import { useState } from 'react'
import {
  Bell,
  Calendar,
  CreditCard,
  FileText,
  LayoutGrid,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
  X,
} from 'lucide-react'
import avatar from '../../assets/images/user-david-brock.png'
import { NAV_ITEMS } from '../../data/doctorConsultationData'
import { cn } from '../../lib/cn'
import { TYPE } from '../../lib/typography'

const MOBILE_DRAWER_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'appointments', label: 'My Appointments', icon: Calendar },
  { id: 'patients', label: 'Patients', icon: Users },
  { id: 'records', label: 'Medical Records', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'payments', label: 'Payments', icon: CreditCard },
]

export function Header() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0]) // 'Dashboard'
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="w-full min-w-0">
        {/* =====================================================
            1. DESKTOP NAVIGATION (>= 1024px / lg)
            Strict Figma Design with Pill Navigation Bar
        ====================================================== */}
        <div className="hidden lg:flex w-full min-w-0 items-center justify-between gap-6">
          {/* Navigation Pill Container */}
          <nav
            aria-label="Primary"
            className="flex min-w-0 items-center rounded-full border border-[rgba(79,70,229,0.05)] bg-white p-[5px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            <ul className="flex min-w-0 items-center">
              {NAV_ITEMS.map((item) => {
                const isActive = item === active

                return (
                  <li key={item} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setActive(item)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'flex h-[46px] items-center rounded-full transition-colors',
                        TYPE.nav,
                        isActive
                          ? 'gap-[10px] bg-[linear-gradient(90deg,#4F46E5_0%,#9F77FC_100%)] pr-[20px] pl-[16px] text-white shadow-[0_4px_14px_rgba(92,36,255,0.25)] xl:gap-[16px] xl:pr-[24px] xl:pl-[18px]'
                          : 'px-[15px] font-semibold text-black hover:text-brand-700 xl:px-[18px]',
                      )}
                    >
                      {isActive && (
                        <LayoutGrid
                          className="size-[20px] shrink-0"
                          strokeWidth={2.4}
                        />
                      )}

                      <span className="whitespace-nowrap">{item}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop Utilities & Profile */}
          <div className="flex shrink-0 items-center gap-3 xl:gap-[18px]">
            <div className="flex items-center gap-2">
              <IconButton label="Search" tone="muted">
                <Search className="size-[19px] xl:size-[21px]" strokeWidth={2.4} />
              </IconButton>

              <IconButton label="Settings">
                <Settings className="size-[19px] xl:size-[21px]" strokeWidth={2} />
              </IconButton>

              <IconButton label="Notifications">
                <Bell className="size-[19px] xl:size-[21px]" strokeWidth={2.2} />
              </IconButton>
            </div>

            <button
              type="button"
              className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-full transition-opacity hover:opacity-80"
            >
              <img
                src={avatar}
                alt="David Brock"
                className="size-9 shrink-0 rounded-full border border-[rgba(145,141,141,0.15)] object-cover xl:size-10"
              />

              <span className="flex min-w-0 flex-col items-start gap-[1px] text-left">
                <span className="truncate font-manrope text-[13px] leading-[17px] font-bold text-[#232C2B]">
                  David Brock
                </span>

                <span className="truncate font-manrope text-[11px] leading-[14px] font-semibold text-[rgba(35,44,43,0.5)]">
                  General Physician
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            2. MOBILE & TABLET NAVBAR (< 1024px / lg:hidden)
            Strict Requirements:
            LEFT: Hamburger Button
            CENTER: Empty Space
            RIGHT: Search + Notifications + Profile (David Brock / Free user)
            Height: 72px - 84px
        ====================================================== */}
        <div className="flex lg:hidden w-full min-w-0 h-[72px] sm:h-[80px] items-center justify-between gap-3 px-1 sm:px-2">
          {/* LEFT: Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation drawer"
            className="
              flex
              size-[48px]
              sm:size-[50px]
              shrink-0
              items-center
              justify-center
              rounded-[14px]
              border
              border-[#E2E8F0]
              bg-white
              text-ink-800
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              transition-colors
              hover:bg-[#F8FAFC]
              active:scale-95
            "
          >
            <Menu className="size-[22px] sm:size-[24px]" strokeWidth={2.4} />
          </button>

          {/* CENTER / FLEXIBLE SPACE */}
          <div className="flex-1 min-w-0" />

          {/* RIGHT: Search + Bell + Profile */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="
                flex
                size-[42px]
                sm:size-[46px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#DDE2E8]
                text-[#232C2B]
                transition-colors
                hover:bg-[#d2d8e0]
                active:scale-95
              "
            >
              <Search className="size-[18px] sm:size-[19px]" strokeWidth={2.4} />
            </button>

            {/* Notification Bell */}
            <button
              type="button"
              aria-label="Notifications"
              className="
                flex
                size-[42px]
                sm:size-[46px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#E2E8F0]
                bg-white
                text-[#232C2B]
                transition-colors
                hover:bg-[#F8FAFC]
                active:scale-95
              "
            >
              <Bell className="size-[18px] sm:size-[19px]" strokeWidth={2.2} />
            </button>

            {/* User Profile */}
            <button
              type="button"
              className="
                flex
                min-w-0
                shrink-0
                items-center
                gap-2
                sm:gap-2.5
                rounded-full
                p-1
                transition-opacity
                hover:opacity-85
              "
            >
              <img
                src={avatar}
                alt="David Brock"
                className="
                  size-[40px]
                  sm:size-[44px]
                  shrink-0
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <span className="hidden min-w-0 flex-col items-start text-left sm:flex">
                <span className="truncate font-manrope text-[13px] leading-[17px] font-bold text-[#232C2B]">
                  David Brock
                </span>

                <span className="truncate font-manrope text-[11px] leading-[14px] font-medium text-[#71717A]">
                  Free user
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          3. MOBILE NAVIGATION DRAWER
          Smooth Slide-in Drawer from Left with Dark Backdrop
      ====================================================== */}
      {drawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 flex lg:hidden"
        >
          {/* Semi-transparent dark backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Content */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              w-[290px]
              max-w-[85vw]
              flex-col
              justify-between
              bg-white
              p-5
              shadow-2xl
              animate-in
              slide-in-from-left
              duration-200
            "
          >
            {/* Top: Logo / Title + Close Button */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-[10px] bg-[linear-gradient(94deg,#B18CFF_0%,#5C24FF_100%)] text-white">
                    <LayoutGrid className="size-5" />
                  </span>
                  <span className="font-sora text-[16px] font-bold text-ink-900">
                    HealthPulse
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="flex size-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 flex flex-col gap-1.5">
                {MOBILE_DRAWER_ITEMS.map((item) => {
                  const isActive = item.label === 'Dashboard'
                  const Icon = item.icon

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActive(item.label)
                        setDrawerOpen(false)
                      }}
                      className={cn(
                        'flex items-center gap-3.5 rounded-[12px] px-3.5 py-3 text-left font-inter text-[14px] font-semibold transition-all',
                        isActive
                          ? 'bg-[linear-gradient(94deg,#B18CFF_0%,#5C24FF_100%)] text-white shadow-[0_4px_12px_rgba(92,36,255,0.25)]'
                          : 'text-ink-700 hover:bg-slate-100',
                      )}
                    >
                      <Icon className="size-[19px] shrink-0" strokeWidth={2.2} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="flex flex-col gap-1 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left font-inter text-[13px] font-medium text-ink-700 hover:bg-slate-100"
              >
                <User className="size-4 text-slate-500" />
                <span>Profile</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left font-inter text-[13px] font-medium text-ink-700 hover:bg-slate-100"
              >
                <Settings className="size-4 text-slate-500" />
                <span>Settings</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left font-inter text-[13px] font-medium text-rose-600 hover:bg-rose-50"
              >
                <LogOut className="size-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function IconButton({
  children,
  label,
  tone = 'plain',
  className,
}: {
  children: React.ReactNode
  label: string
  tone?: 'plain' | 'muted'
  className?: string
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'flex size-[42px] shrink-0 items-center justify-center rounded-full text-[#232C2B] transition-colors xl:size-[46px]',
        tone === 'muted'
          ? 'bg-[#DDE2E8] hover:bg-[#d2d8e0]'
          : 'bg-white hover:bg-[#f5f5f7]',
        className,
      )}
    >
      {children}
    </button>
  )
}