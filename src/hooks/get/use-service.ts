import { useQuery } from '@tanstack/react-query'

import { IService } from '@/types/service'
import { getServiceById } from '@/utils/get/get-service-by-id'

function useService({ id }: { id: number }) {
  const { data: service } = useQuery({
    queryKey: ['service', id],
    queryFn: () => getServiceById({ id }),
  })

  return { service } as { service: IService }
}

export { useService }
