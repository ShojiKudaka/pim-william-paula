import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IService } from '@/types/service'
import { createService } from '@/utils/post/create-service'

function useCreateService() {
  const { mutateAsync: createServiceFn } = useMutation({
    mutationKey: ['create-service'],
    mutationFn: ({
      name,
      price,
      employees,
    }: Omit<IService, 'id' | 'createdDate'>) =>
      createService({
        name,
        price,
        employees,
      }),
    onSuccess: async (newServiceApi: IService, newService: IService) => {
      const cached = queryClient.getQueryData<IService[]>(['services'])

      if (cached) {
        queryClient.setQueryData<IService[]>(
          ['services'],
          [...cached, { ...newServiceApi, employees: newService.employees }],
        )
      }
    },
  })

  return { createServiceFn }
}

export { useCreateService }
