const employees = [
  { name: 'Adejolu Ajagunna', initials: 'AA', role: 'Operations Officer' },
  { name: 'Adeola Alowoyin', initials: 'AO', role: 'Finance Associate' },
  { name: 'Maryam Lawal', initials: 'ML', role: 'People & Culture' },
  { name: 'Fatima Alhassan', initials: 'FA', role: 'Director' },
  { name: 'Bashir Muhammad', initials: 'BM', role: 'North-East Coordinator' },
]

export default function EmployeesPage() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-[#f7f5f0] p-8 shadow-soft">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Company</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Employees <span className="text-slate-500">337</span></h1>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 shadow-soft">
          Search employees
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-500 shadow-soft">
          Filter
        </div>
      </div>

      <div className="space-y-4">
        {employees.map((employee) => (
          <div key={employee.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
              {employee.initials}
            </div>
            <div>
              <div className="text-xl font-medium">{employee.name}</div>
              <div className="text-sm text-slate-500">{employee.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
