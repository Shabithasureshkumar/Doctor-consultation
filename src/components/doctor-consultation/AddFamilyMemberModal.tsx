import { useState } from 'react'
import { UserPlus, X } from 'lucide-react'
import type { FamilyMember } from '../../types/doctorConsultation'
import familyDefault from '../../assets/images/family-sarah.png'

interface AddFamilyMemberModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (member: FamilyMember) => void
}

export function AddFamilyMemberModal({
  isOpen,
  onClose,
  onAdd,
}: AddFamilyMemberModalProps) {
  const [name, setName] = useState('')
  const [relation, setRelation] = useState('Child')
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Please enter the family member full name.')
      return
    }

    const newMember: FamilyMember = {
      id: `member-${Date.now()}`,
      name: name.trim(),
      relation,
      avatar: familyDefault,
    }

    onAdd(newMember)
    setName('')
    setError('')
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-member-title"
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
          w-full
          max-w-[480px]
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
              <UserPlus className="size-6 text-brand-600" strokeWidth={2.2} />
            </span>

            <div>
              <h2
                id="add-member-title"
                className="font-inter text-[18px] font-bold text-ink-900 sm:text-[20px]"
              >
                Add Family Member
              </h2>
              <p className="mt-0.5 font-inter text-[12px] text-ink-500">
                Manage dependents and book consultations on their behalf
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="member-name"
              className="block font-inter text-[12px] font-bold tracking-wider text-ink-600 uppercase"
            >
              Full Name *
            </label>
            <input
              id="member-name"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError('')
              }}
              placeholder="e.g. Liam Johnson"
              className="mt-1.5 w-full rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-3.5 py-2.5 font-inter text-[13px] text-ink-800 outline-none focus:border-brand-600 focus:bg-white"
            />
            {error && <p className="mt-1 font-inter text-[11px] text-rose-600">{error}</p>}
          </div>

          <div>
            <label
              htmlFor="member-relation"
              className="block font-inter text-[12px] font-bold tracking-wider text-ink-600 uppercase"
            >
              Relationship *
            </label>
            <select
              id="member-relation"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="mt-1.5 w-full rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-3.5 py-2.5 font-inter text-[13px] text-ink-800 outline-none focus:border-brand-600 focus:bg-white"
            >
              <option value="Child">Child / Dependent</option>
              <option value="Spouse">Spouse / Partner</option>
              <option value="Dad">Father</option>
              <option value="Mom">Mother</option>
              <option value="Sibling">Sibling</option>
              <option value="Other">Other Family Member</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[12px] border border-slate-200 px-4 py-2.5 font-inter text-[13px] font-semibold text-ink-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-[12px] bg-brand-600 px-5 py-2.5 font-inter text-[13px] font-bold text-white hover:opacity-90"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
