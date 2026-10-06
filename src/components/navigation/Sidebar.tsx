import { Home, Users, Building2, Bell, Search, Settings, ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../lib/utils'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/employees', label: 'Employees', icon: Users },
  { to: '/organization', label: 'Organization', icon: Building2 },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-[#2a2547] text-white">
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold">
          Y
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-violet-200">YandyTech</div>
          <div className="text-base font-semibold">HR Platform</div>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors',
                isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
              )
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-violet-200">
            <span>Team health</span>
            <ArrowUpRight size={16} />
          </div>
          <div className="text-3xl font-semibold">94%</div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-violet-400 to-indigo-300" />
          </div>
        </div>
      </div>
    </aside>
  )
}
