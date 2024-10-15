import { api } from '@/lib/axios'
import { IService } from '@/types/service'

async function deleteService({ id }: Pick<IService, 'id'>) {
  const { data } = await api.delete(`/service/${id}`)

  return data
}

export { deleteService }
