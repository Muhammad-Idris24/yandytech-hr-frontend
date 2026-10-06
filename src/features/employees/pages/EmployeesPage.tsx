import { useEmployees } from '../hooks/useEmployees'

export default function EmployeesPage() {
  const { data, isLoading, isError } = useEmployees()

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-500 shadow-soft">Loading employees...</div>
  }

  if (isError) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">Unable to load employees.</div>
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-[#f7f5f0] p-8 shadow-soft">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Company</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Employees <span className="text-slate-500">{data?.length ?? 0}</span></h1>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 shadow-soft">Search employees</div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 shadow-soft">Filter</div>
      </div>

      <div className="space-y-4">
        {(data ?? []).map((employee) => (
          <div key={employee.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
              {employee.full_name
                .split(' ')
                .slice(0, 2)
                .map((part) => part[0])
                .join('')
                .toUpperCase()}
            </div>
            <div>
              <div className="text-xl font-medium">{employee.full_name}</div>
              <div className="text-sm text-slate-500">{employee.role ?? 'Employee'} • {employee.department ?? 'General'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
