import { ArrowUpRight, DollarSign, WalletCards } from 'lucide-react'

import { usePayroll } from '../hooks/usePayroll'

export default function PayrollPage() {
  const { data, isLoading, isError } = usePayroll()

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-500 shadow-soft">Loading payroll...</div>
  }

  if (isError) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">Unable to load payroll data.</div>
  }

  const records = data?.records ?? []
  const summary = data?.summary

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-[#f3f0eb] p-8 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Financial</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Payroll overview</h1>
          </div>
          <button className="rounded-2xl bg-[#2a2547] px-4 py-2 text-sm font-medium text-white">Run payroll</button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><WalletCards size={16} /> Monthly run</div>
            <div className="mt-4 text-3xl font-semibold">{summary ? `₦${summary.total_monthly_run.toLocaleString()}` : '—'}</div>
            <p className="mt-2 text-sm text-slate-500">Gross payroll</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><DollarSign size={16} /> Approved</div>
            <div className="mt-4 text-3xl font-semibold">{summary?.approved ?? 0}</div>
            <p className="mt-2 text-sm text-slate-500">Approved entries</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-slate-500"><ArrowUpRight size={16} /> Pending</div>
            <div className="mt-4 text-3xl font-semibold">{summary?.pending ?? 0}</div>
            <p className="mt-2 text-sm text-slate-500">Pending approvals</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Detailed run</p>
          <h2 className="mt-2 text-2xl font-semibold">Employee payroll</h2>
        </div>

        <div className="space-y-4">
          {records.map((pay) => (
            <div key={pay.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <div className="text-lg font-semibold">{pay.employee_name}</div>
                <div className="text-sm text-slate-500">{pay.period} • {pay.currency}</div>
                <div className="mt-1 text-sm text-slate-500">Gross: ₦{pay.gross_salary.toLocaleString()} • Net: ₦{pay.net_salary.toLocaleString()}</div>
              </div>

              <div className={`rounded-full px-3 py-1 text-xs font-semibold ${pay.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {pay.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
