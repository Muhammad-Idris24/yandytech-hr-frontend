import { useOrganizations } from '../hooks/useOrganizations'

export default function OrganizationPage() {
  const { data, isLoading, isError } = useOrganizations()

  if (isLoading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-500 shadow-soft">Loading organizations...</div>
  }

  if (isError) {
    return <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">Unable to load organization information.</div>
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-[#f7f5f0] p-8 shadow-soft">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Organization</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{data?.[0]?.name ?? 'Your organization'}</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Departments</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Management Team</li>
            <li>• HR & People & Culture</li>
            <li>• Technology & Research</li>
            <li>• Communication & Partnership</li>
            <li>• Programmes & Resource Mobilisation</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Org chart</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-violet-50 p-3">CEO • Mohammed Bayero Yayandi</div>
            <div className="rounded-2xl bg-violet-50 p-3">COO • Mohammed Abubakar Yayanko</div>
            <div className="rounded-2xl bg-violet-50 p-3">CTO • Alamin Musa Magaga</div>
            <div className="rounded-2xl bg-violet-50 p-3">CCPO • Aliyu Alhassan Kutigi</div>
          </div>
        </div>
      </div>
    </div>
  )
}
