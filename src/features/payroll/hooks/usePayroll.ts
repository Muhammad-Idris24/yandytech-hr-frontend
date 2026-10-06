import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { useApiClient } from '../../lib/api'

export type PayrollRecord = {
  id: string
  employee_name: string
  period: string
  gross_salary: number
  net_salary: number
  status: string
  currency: string
}

export type PayrollSummary = {
  total_monthly_run: number
  approved: number
  pending: number
  currency: string
}

export function usePayroll() {
  const { isAuthenticated } = useAuth0()
  const api = useApiClient()

  return useQuery({
    queryKey: ['payroll'],
    queryFn: async () => ({
      records: await api.get<PayrollRecord[]>('/api/v1/payroll'),
      summary: await api.get<PayrollSummary>('/api/v1/payroll/summary'),
    }),
    enabled: isAuthenticated,
    staleTime: 30_000,
  })
}
