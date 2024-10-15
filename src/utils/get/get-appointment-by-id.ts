import { api } from '@/lib/axios'

async function getAppointmentById({ id }: { id: number }) {
  const { data } = await api.get(`/appointment/${id}`)

  return data
}

export { getAppointmentById }
