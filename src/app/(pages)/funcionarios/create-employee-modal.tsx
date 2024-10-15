import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateEmployeeForm } from './create-employee-form'

function CreateEmployeeModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um funcionário</DialogTitle>
        <DialogDescription>
          Selecione as seguintes informações e então adicione um novo
          funcionário
        </DialogDescription>
      </DialogHeader>

      <CreateEmployeeForm />
    </DialogContent>
  )
}

export { CreateEmployeeModal }
