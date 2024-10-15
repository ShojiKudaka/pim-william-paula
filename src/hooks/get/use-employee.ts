import { useQuery } from '@tanstack/react-query'

import { getEmployeeById } from '@/utils/get/get-employee-by-id'

function useEmployee({ id }: { id: number }) {
  const { data: employee } = useQuery({
    queryKey: ['employee', id],
    queryFn: () => getEmployeeById({ id }),
  })

  return { employee }
}

export { useEmployee }
