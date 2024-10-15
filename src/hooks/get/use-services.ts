import { useQuery } from '@tanstack/react-query'

import { IService } from '@/types/service'
import { getAllServices } from '@/utils/get/get-all-services'

function useServices() {
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: getAllServices,
  })

  return { services } as { services: IService[] }
}

export { useServices }
