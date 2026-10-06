const employeeRows = [
  { name: 'Adejolu Ajagunna', initials: 'AA', team: 'Operations' },
  { name: 'Adebayo Lawoyin', initials: 'AL', team: 'Programme' },
  { name: 'Musa Salisu', initials: 'MS', team: 'Technology' },
  { name: 'Fatima Alhassan', initials: 'FA', team: 'Youth Development' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-[#f3f0eb] p-8 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">People overview</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Hi there, Mohammed Abubakar!</h1>
          </div>
          <div className="rounded-2xl bg-white px-4 py-2 text-sm text-slate-600 shadow-soft">Today • 94% productivity</div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your checklist</h2>
              <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700">2 pending</span>
            </div>
            <div className="space-y-3">
              {['Review payroll summary', 'Approve leave requests', 'Submit weekly report'].map((task) => (
                <div key={task} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span>{task}</span>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">Pending</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#f6f3ef] p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Team</h2>
            <div className="mt-4 space-y-3">
              {employeeRows.slice(0, 3).map((person) => (
                <div key={person.name} className="flex items-center gap-3 rounded-2xl bg-white p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold">
                    {person.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-slate-500">{person.team}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Attendance</h3>
          <div className="mt-4 text-3xl font-semibold">96%</div>
          <p className="mt-2 text-sm text-slate-500">On-time rate this month</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Leave</h3>
          <div className="mt-4 text-3xl font-semibold">12 days</div>
          <p className="mt-2 text-sm text-slate-500">Balance remaining</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Payroll</h3>
          <div className="mt-4 text-3xl font-semibold">₦623,452</div>
          <p className="mt-2 text-sm text-slate-500">Net pay this cycle</p>
        </div>
      </section>
    </div>
  )
}
