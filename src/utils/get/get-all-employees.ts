import { api } from '@/lib/axios'

async function getAllEmployees() {
  const { data } = await api.get('/employee')

  return data
}

export { getAllEmployees }
