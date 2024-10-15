import { api } from '@/lib/axios'
import { IEmployee } from '@/types/employee'
import { IService } from '@/types/service'

async function addEmployeeToService({
  serviceId,
  employeeId,
}: {
  serviceId: IService['id']
  employeeId: IEmployee['id']
}) {
  const { data } = await api.post(`/appointment/${serviceId}`, {
    employeeId,
  })

  return data
}

export { addEmployeeToService }
