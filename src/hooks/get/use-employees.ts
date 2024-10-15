import { useQuery } from '@tanstack/react-query'

import { IAppointment } from '@/types/appointment'
import { getAllEmployees } from '@/utils/get/get-all-employees'

function useEmployees() {
  const { data: employees } = useQuery({
    queryKey: ['employees'],
    queryFn: getAllEmployees,
  })

  return { employees } as { employees: IAppointment[] }
}

export { useEmployees }
