import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IAppointment } from '@/types/appointment'
import { deleteAppointment } from '@/utils/delete/delete-appointment'

function useDeleteAppointment() {
  const { mutateAsync: deleteAppointmentFn } = useMutation({
    mutationKey: ['create-appointment'],
    mutationFn: ({ id }: Pick<IAppointment, 'id'>) => deleteAppointment({ id }),
    onSuccess(deletedAppointment: IAppointment) {
      const cached = queryClient.getQueryData<IAppointment[]>(['appointments'])

      if (cached) {
        queryClient.setQueryData<IAppointment[]>(
          ['appointments'],
          cached.filter(
            (prevAppointment) => prevAppointment.id !== deletedAppointment.id,
          ),
        )
      }
    },
  })

  return { deleteAppointmentFn }
}

export { useDeleteAppointment }
