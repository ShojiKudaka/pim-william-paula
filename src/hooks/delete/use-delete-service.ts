import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IService } from '@/types/service'
import { deleteService } from '@/utils/delete/delete-service'

function useDeleteService() {
  const { mutateAsync: deleteServiceFn } = useMutation({
    mutationKey: ['delete-service'],
    mutationFn: ({ id }: Pick<IService, 'id'>) => deleteService({ id }),
    onSuccess(deletedService: IService) {
      const cached = queryClient.getQueryData<IService[]>(['services'])

      if (cached) {
        queryClient.setQueryData<IService[]>(
          ['services'],
          cached.filter((prevService) => prevService.id !== deletedService.id),
        )
      }
    },
  })

  return { deleteServiceFn }
}

export { useDeleteService }
