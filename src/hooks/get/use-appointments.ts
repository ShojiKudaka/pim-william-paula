import { useQuery } from '@tanstack/react-query'

import { IAppointment } from '@/types/appointment'
import { getAllAppointments } from '@/utils/get/get-all-appointments'

function useAppointments() {
  const { data: appointments } = useQuery({
    queryKey: ['appointments'],
    queryFn: getAllAppointments,
  })

  return { appointments } as { appointments: IAppointment[] }
}

export { useAppointments }
