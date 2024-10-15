import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateSchedulingForm } from './create-scheduling-form'

function CreateSchedulingModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Marque um horário</DialogTitle>
        <DialogDescription>
          Selecione as seguintes informações e então marque seu horário
        </DialogDescription>
      </DialogHeader>

      <CreateSchedulingForm />
    </DialogContent>
  )
}

export { CreateSchedulingModal }
