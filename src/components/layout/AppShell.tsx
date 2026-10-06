import { Search } from 'lucide-react'
import { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen bg-yandy-paper text-yandy-ink">
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-[#2a2547] text-white">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold">
            Y
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-violet-200">YandyTech</div>
            <div className="text-base font-semibold">HR Platform</div>
          </div>
        </div>

        <div className="space-y-2 p-4">
          {[
            ['Home', '/'],
            ['Employees', '/employees'],
            ['Organization', '/organization'],
          ].map(([label, path]) => (
            <a
              key={path}
              href={path}
              className="flex items-center rounded-xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-violet-300" />
              {label}
            </a>
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-[#f7f5f0]/80 px-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-soft">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              aria-label="Search"
              placeholder="Search employees and modules"
              className="w-72 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-soft">Mohammed Abubakar</div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2547] text-sm font-semibold text-white">
              MA
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </div>
  )
}
