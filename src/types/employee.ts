import { IService } from './service'

interface IEmployee {
  id: number
  name: string
  services?: IService[]
}

export { type IEmployee }
