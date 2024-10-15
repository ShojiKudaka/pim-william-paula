import { api } from '@/lib/axios'

async function getEmployeeById({ id }: { id: number }) {
  const { data } = await api.get(`/employee/${id}`)

  return data
}

export { getEmployeeById }
