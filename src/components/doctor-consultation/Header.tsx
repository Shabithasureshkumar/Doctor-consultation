import { useState } from 'react'
import {
  Bell,
  ChevronDown,
  LayoutGrid,
  Search,
  Settings,
} from 'lucide-react'
import avatar from '../../assets/images/user-david-brock.png'
import { NAV_ITEMS } from '../../data/doctorConsultationData'
import { cn } from '../../lib/cn'
import { TYPE } from '../../lib/typography'

export function Header() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex w-full min-w-0 items-center justify-between gap-3 lg:gap-6">
      <nav
        aria-label="Primary"
        className="relative flex min-w-0 items-center rounded-full border border-[rgba(79,70,229,0.05)] bg-white p-[5px] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
      >
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="Open navigation menu"
          className={cn(
            'flex h-[44px] min-w-0 items-center gap-2 rounded-full bg-[linear-gradient(90deg,#4F46E5_0%,#9F77FC_100%)] px-4 text-white lg:hidden',
            TYPE.nav,
          )}
        >
          <LayoutGrid
            className="size-[18px] shrink-0"
            strokeWidth={2.4}
          />

          <span className="truncate">{active}</span>

          <ChevronDown
            className={cn(
              'size-4 shrink-0 transition-transform',
              menuOpen && 'rotate-180',
            )}
            strokeWidth={2.4}
          />
        </button>

        {menuOpen && (
          <ul className="absolute top-[calc(100%+8px)] left-0 z-50 w-[210px] overflow-hidden rounded-2xl border border-[rgba(79,70,229,0.08)] bg-white py-2 shadow-[0_12px_32px_rgba(15,23,42,0.12)] lg:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(item)
                    setMenuOpen(false)
                  }}
                  className={cn(
                    'flex min-h-[44px] w-full items-center px-4 text-left font-manrope text-[14px] font-semibold',
                    item === active
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-black hover:bg-[#f6f6f8]',
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden min-w-0 items-center lg:flex">
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
                      : 'px-[12px] font-semibold text-black hover:text-brand-700 lg:px-[15px] xl:px-[18px]',
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

      <div className="flex shrink-0 items-center gap-2 sm:gap-3 xl:gap-[18px]">
        <div className="flex items-center gap-2">
          <IconButton label="Search" tone="muted">
            <Search
              className="size-[18px] xl:size-[21px]"
              strokeWidth={2.4}
            />
          </IconButton>

          <IconButton
            label="Settings"
            className="hidden sm:flex"
          >
            <Settings
              className="size-[18px] xl:size-[21px]"
              strokeWidth={2}
            />
          </IconButton>

          <IconButton label="Notifications">
            <Bell
              className="size-[18px] xl:size-[21px]"
              strokeWidth={2.2}
            />
          </IconButton>
        </div>

        <button
          type="button"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-full transition-opacity hover:opacity-80"
        >
          <img
            src={avatar}
            alt=""
            className="size-9 shrink-0 rounded-full border border-[rgba(145,141,141,0.15)] object-cover xl:size-10"
          />

          <span className="hidden min-w-0 flex-col items-start gap-[1px] text-left sm:flex">
            <span className="truncate font-manrope text-[12px] leading-[17px] font-semibold text-[#232C2B] xl:text-[13px]">
              David Brock
            </span>

            <span className="truncate font-manrope text-[10px] leading-[14px] font-semibold text-[rgba(35,44,43,0.5)] xl:text-[11px]">
              General Physician
            </span>
          </span>
        </button>
      </div>
    </header>
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