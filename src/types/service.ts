import { IEmployee } from './employee'

interface IService {
  id: number
  name: string
  price: number
  createdDate: string
  employees: IEmployee[]
}

export { type IService }
