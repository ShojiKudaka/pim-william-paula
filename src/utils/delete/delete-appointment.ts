import { api } from '@/lib/axios'
import { IAppointment } from '@/types/appointment'

async function deleteAppointment({ id }: Pick<IAppointment, 'id'>) {
  const { data } = await api.delete(`/appointment/${id}`)

  return data
}

export { deleteAppointment }
