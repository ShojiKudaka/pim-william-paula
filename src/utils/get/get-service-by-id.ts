import { api } from '@/lib/axios'

async function getServiceById({ id }: { id: number }) {
  const { data } = await api.get(`/service/${id}`)

  return data
}

export { getServiceById }
