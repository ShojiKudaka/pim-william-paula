import { IService } from './service'

interface IAppointment {
  id: number
  name: string
  client: string
  employeeId: number
  serviceId: number
  date: Date
  service?: IService
}

export { type IAppointment }
