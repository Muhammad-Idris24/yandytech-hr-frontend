import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { useApiClient } from '../lib/api'

export type Employee = {
  id: string
  full_name: string
  email: string
  department: string | null
  role: string | null
}

export function useEmployees() {
  const { isAuthenticated } = useAuth0()
  const api = useApiClient()

  return useQuery({
    queryKey: ['employees'],
    queryFn: async () => api.get<Employee[]>('/api/v1/employees'),
    enabled: isAuthenticated,
    staleTime: 60_000,
  })
}
