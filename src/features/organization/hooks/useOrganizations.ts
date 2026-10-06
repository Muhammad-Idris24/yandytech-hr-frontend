import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { useApiClient } from '../../lib/api'

export type Organization = {
  id: string
  name: string
  slug: string
  description: string
}

export function useOrganizations() {
  const { isAuthenticated } = useAuth0()
  const api = useApiClient()

  return useQuery({
    queryKey: ['organizations'],
    queryFn: async () => api.get<Organization[]>('/api/v1/organizations'),
    enabled: isAuthenticated,
    staleTime: 60_000,
  })
}
