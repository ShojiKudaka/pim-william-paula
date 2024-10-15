import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/query'
import { IAppointment } from '@/types/appointment'
import { IService } from '@/types/service'
import { getServiceById } from '@/utils/get/get-service-by-id'
import { createAppointment } from '@/utils/post/create-appointment'

function useCreateAppointment() {
  const { mutateAsync: createAppoitmentFn } = useMutation({
    mutationKey: ['create-appointment'],
    mutationFn: ({
      name,
      client,
      employeeId,
      serviceId,
      date,
    }: Omit<IAppointment, 'id'>) =>
      createAppointment({
        name,
        client,
        employeeId,
        serviceId,
        date,
      }),
    onSuccess: async (newAppointment: IAppointment) => {
      const cached = queryClient.getQueryData<IAppointment[]>(['appointments'])
      const service: IService = await getServiceById({
        id: newAppointment.serviceId,
      })

      console.log(newAppointment.id)
      console.log(service)
      if (cached) {
        queryClient.setQueryData<IAppointment[]>(
          ['appointments'],
          [...cached, { ...newAppointment, service }],
        )
      }
    },
  })

  return { createAppoitmentFn }
}

export { useCreateAppointment }
