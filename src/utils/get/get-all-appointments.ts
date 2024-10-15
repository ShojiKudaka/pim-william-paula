import { api } from '@/lib/axios'

async function getAllAppointments() {
  const { data } = await api.get('/appointment')

  return data
}

export { getAllAppointments }
