import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IEmployee } from '@/types/employee'
import { createEmployee } from '@/utils/post/create-employee'

function useCreateEmployee() {
  const { mutateAsync: createAppoitmentFn } = useMutation({
    mutationKey: ['create-employee'],
    mutationFn: ({ name }: Omit<IEmployee, 'id'>) =>
      createEmployee({
        name,
      }),
    onSuccess(newEmployee: IEmployee) {
      const cached = queryClient.getQueryData<IEmployee[]>(['employees'])

      if (cached) {
        queryClient.setQueryData<IEmployee[]>(
          ['employees'],
          [...cached, newEmployee],
        )
      }
    },
  })

  return { createAppoitmentFn }
}

export { useCreateEmployee }
