import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CreateSchedulingModal } from './create-scheduling-modal'

export default function Agendamento() {
  return (
    <Dialog>
      <main className="container-c mt-10">
        <header className="flex items-center justify-between">
          <h1>Agendamento</h1>
          <DialogTrigger asChild>
            <Button>Marcar um horário</Button>
          </DialogTrigger>
        </header>
      </main>

      <CreateSchedulingModal />
    </Dialog>
  )
}
