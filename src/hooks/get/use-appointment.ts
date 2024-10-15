import { useQuery } from '@tanstack/react-query'

import { getAppointmentById } from '@/utils/get/get-appointment-by-id'

function useAppointment({ id }: { id: number }) {
  const { data: appointment } = useQuery({
    queryKey: ['appointment', id],
    queryFn: () => getAppointmentById({ id }),
  })

  return { appointment }
}

export { useAppointment }
