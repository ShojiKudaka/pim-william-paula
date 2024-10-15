import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateServiceForm } from './create-service-form'

function CreateServiceModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Crie um serviço</DialogTitle>
        <DialogDescription>
          Selecione as seguintes informações e então crie um novo serviço
        </DialogDescription>
      </DialogHeader>

      <CreateServiceForm />
    </DialogContent>
  )
}

export { CreateServiceModal }
