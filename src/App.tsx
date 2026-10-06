import { Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import DashboardPage from './features/dashboard/pages/DashboardPage'
import EmployeesPage from './features/employees/pages/EmployeesPage'
import OrganizationPage from './features/organization/pages/OrganizationPage'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/organization" element={<OrganizationPage />} />
      </Routes>
    </AppShell>
  )
}

export default App
