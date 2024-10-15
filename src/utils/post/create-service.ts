import { api } from '@/lib/axios'
import { IService } from '@/types/service'

async function createService({
  name,
  price,
  employees,
}: Omit<IService, 'id' | 'createdDate'>) {
  const { data } = await api.post('/service', {
    name,
    price,
  })

  await api.patch(`/service/${data.id}`, {
    employeeId: employees[0].id,
  })

  return data
}

export { createService }
