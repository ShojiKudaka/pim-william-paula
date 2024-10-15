import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IEmployee } from '@/types/employee'
import { deleteEmployee } from '@/utils/delete/delete-employee'

function useDeleteEmployee() {
  const { mutateAsync: deleteEmployeeFn } = useMutation({
    mutationKey: ['delete-employee'],
    mutationFn: ({ id }: Pick<IEmployee, 'id'>) => deleteEmployee({ id }),
    onSuccess(deletedEmployee: IEmployee) {
      const cached = queryClient.getQueryData<IEmployee[]>(['employees'])

      if (cached) {
        queryClient.setQueryData<IEmployee[]>(
          ['employees'],
          cached.filter(
            (prevEmployee) => prevEmployee.id !== deletedEmployee.id,
          ),
        )
      }
    },
  })

  return { deleteEmployeeFn }
}

export { useDeleteEmployee }
