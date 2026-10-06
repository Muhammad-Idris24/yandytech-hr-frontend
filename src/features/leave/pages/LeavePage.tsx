import { CheckCircle2, Clock3, CalendarRange } from 'lucide-react'

import { useLeaveRequests } from '../hooks/useLeaveRequests'

export default function LeavePage() {
  const { data, isLoading, isError } = useLeaveRequests()

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-500 shadow-soft">Loading leave requests...</div>
  }

  if (isError) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">Unable to load leave requests.</div>
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-[#f3f0eb] p-8 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Leave overview</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Leave management</h1>
          </div>
          <button className="rounded-2xl bg-[#2a2547] px-4 py-2 text-sm font-medium text-white">Request leave</button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><CalendarRange size={16} /> Annual</div>
            <div className="mt-4 text-3xl font-semibold">12 days</div>
            <p className="mt-2 text-sm text-slate-500">Balance remaining</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><Clock3 size={16} /> Pending</div>
            <div className="mt-4 text-3xl font-semibold">{(data ?? []).filter((item) => item.status === 'Pending').length}</div>
            <p className="mt-2 text-sm text-slate-500">Awaiting approval</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><CheckCircle2 size={16} /> Approved</div>
            <div className="mt-4 text-3xl font-semibold">{(data ?? []).filter((item) => item.status === 'Approved').length}</div>
            <p className="mt-2 text-sm text-slate-500">Approved this cycle</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Requests</p>
          <h2 className="mt-2 text-2xl font-semibold">Recent leave records</h2>
        </div>

        <div className="space-y-4">
          {(data ?? []).map((leave) => (
            <div key={leave.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <div className="text-lg font-semibold">{leave.employee_name}</div>
                <div className="text-sm text-slate-500">{leave.type} • {leave.start_date} to {leave.end_date}</div>
                <div className="mt-1 text-sm text-slate-500">{leave.reason}</div>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs font-semibold ${leave.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {leave.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
