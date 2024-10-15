import { api } from '@/lib/axios'
import { IEmployee } from '@/types/employee'

async function deleteEmployee({ id }: Pick<IEmployee, 'id'>) {
  const { data } = await api.delete(`/employee/${id}`)

  return data
}

export { deleteEmployee }
