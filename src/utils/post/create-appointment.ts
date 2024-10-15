import { api } from '@/lib/axios'
import { IAppointment } from '@/types/appointment'

async function createAppointment({
  name,
  client,
  employeeId,
  serviceId,
  date,
}: Omit<IAppointment, 'id'>) {
  const { data } = await api.post('/appointment', {
    name,
    client,
    employeeId,
    serviceId,
    date,
  })

  return data
}

export { createAppointment }
