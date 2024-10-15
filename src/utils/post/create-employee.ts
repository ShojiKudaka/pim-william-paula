import { api } from '@/lib/axios'
import { IEmployee } from '@/types/employee'

async function createEmployee({ name }: Omit<IEmployee, 'id'>) {
  const { data } = await api.post('/employee', {
    name,
  })

  return data
}

export { createEmployee }
