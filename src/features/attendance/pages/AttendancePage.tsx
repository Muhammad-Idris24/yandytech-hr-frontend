import { useState } from 'react'
import { Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

import { useAttendanceRecords, useCheckIn, useCheckOut } from '../hooks/useAttendance'

const statusColors: Record<string, { bg: string; text: string; icon: typeof CheckCircle }> = {
  'On time': { bg: 'bg-green-50', text: 'text-green-700', icon: CheckCircle },
  Late: { bg: 'bg-amber-50', text: 'text-amber-700', icon: AlertCircle },
  Absent: { bg: 'bg-red-50', text: 'text-red-700', icon: AlertCircle },
}

export default function AttendancePage() {
  const { data, isLoading, isError } = useAttendanceRecords()
  const { mutate: checkIn, isPending: checkingIn } = useCheckIn()
  const { mutate: checkOut, isPending: checkingOut } = useCheckOut()
  const [checkedIn, setCheckedIn] = useState(false)

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-500 shadow-soft">Loading attendance...</div>
  }

  if (isError) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">Unable to load attendance records.</div>
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-[#f3f0eb] p-8 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Quick action</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Check in / out</h1>
          </div>
          <div className="rounded-2xl bg-white px-4 py-2 text-sm text-slate-600 shadow-soft">Today • 08:12 AM</div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <button
            onClick={() => {
              checkIn(undefined, {
                onSuccess: () => setCheckedIn(true),
              })
            }}
            disabled={checkingIn || checkedIn}
            className="flex items-center justify-center gap-3 rounded-3xl border-2 border-green-200 bg-green-50 px-6 py-4 font-semibold text-green-700 transition disabled:opacity-50"
          >
            <CheckCircle size={20} />
            {checkedIn ? 'Checked in today' : 'Check in'}
          </button>

          <button
            onClick={() => {
              checkOut(undefined, {
                onSuccess: () => setCheckedIn(false),
              })
            }}
            disabled={checkingOut || !checkedIn}
            className="flex items-center justify-center gap-3 rounded-3xl border-2 border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition disabled:opacity-50"
          >
            <Clock size={20} />
            Check out
          </button>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Records</p>
          <h2 className="mt-2 text-2xl font-semibold">Today's attendance</h2>
        </div>

        <div className="space-y-3">
          {(data ?? []).map((record) => {
            const status = record.status as keyof typeof statusColors
            const colors = statusColors[status] || { bg: 'bg-slate-50', text: 'text-slate-700', icon: AlertCircle }
            const Icon = colors.icon

            return (
              <div key={record.id} className={`rounded-2xl border border-slate-200 ${colors.bg} p-4`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Icon size={18} className={`mt-1 shrink-0 ${colors.text}`} />
                    <div>
                      <div className="font-semibold text-slate-900">{record.employee_name}</div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {record.check_in} - {record.check_out || 'In progress'}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {record.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.text} ${colors.bg}`}>{record.status}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
