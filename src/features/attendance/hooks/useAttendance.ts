import { useQuery, useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { useApiClient } from '../lib/api'

export type AttendanceRecord = {
  id: string
  employee_name: string
  date: string
  check_in: string | null
  check_out: string | null
  status: string
  location: string | null
}

export function useAttendanceRecords() {
  const { isAuthenticated } = useAuth0()
  const api = useApiClient()

  return useQuery({
    queryKey: ['attendance'],
    queryFn: async () => api.get<AttendanceRecord[]>('/api/v1/attendance'),
    enabled: isAuthenticated,
    staleTime: 30_000,
  })
}

export function useCheckIn() {
  const api = useApiClient()

  return useMutation({
    mutationFn: async () => api.post<{ status: string; message: string }>('/api/v1/attendance/check-in', {}),
  })
}

export function useCheckOut() {
  const api = useApiClient()

  return useMutation({
    mutationFn: async () => api.post<{ status: string; message: string }>('/api/v1/attendance/check-out', {}),
  })
}
