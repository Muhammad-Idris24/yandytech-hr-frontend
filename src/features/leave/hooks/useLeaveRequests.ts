import { useQuery, useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { useApiClient } from '../../lib/api'

export type LeaveRequest = {
  id: string
  employee_name: string
  type: string
  start_date: string
  end_date: string
  status: string
  reason: string
}

export function useLeaveRequests() {
  const { isAuthenticated } = useAuth0()
  const api = useApiClient()

  return useQuery({
    queryKey: ['leave-requests'],
    queryFn: async () => api.get<LeaveRequest[]>('/api/v1/leave'),
    enabled: isAuthenticated,
    staleTime: 30_000,
  })
}

export function useRequestLeave() {
  const api = useApiClient()

  return useMutation({
    mutationFn: async () => api.post<{ status: string; message: string }>('/api/v1/leave/request', {}),
  })
}
