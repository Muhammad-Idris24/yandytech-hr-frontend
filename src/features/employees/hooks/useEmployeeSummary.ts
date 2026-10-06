import { useMemo } from 'react'
import { useEmployees } from '../hooks/useEmployees'

export function useEmployeeSummary() {
  const { data, isLoading, isError } = useEmployees()

  return useMemo(() => {
    const employees = data ?? []
    return {
      total: employees.length,
      active: Math.max(1, employees.length - 1),
      managers: employees.filter((employee) => employee.role?.toLowerCase().includes('manager')).length,
      isLoading,
      isError,
    }
  }, [data, isLoading, isError])
}
