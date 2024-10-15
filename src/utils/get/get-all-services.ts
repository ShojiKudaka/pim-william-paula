import { api } from '@/lib/axios'

async function getAllServices() {
  const { data } = await api.get('/service')

  return data
}

export { getAllServices }
