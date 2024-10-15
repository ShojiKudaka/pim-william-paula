import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { ProfileUpdateForm } from './profile-update-form'

function ProfileUpdateModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Atualizar perfil</DialogTitle>
        <DialogDescription>
          Preencha as seguintes informações e então atualize seu perfil
        </DialogDescription>
      </DialogHeader>

      <ProfileUpdateForm />
    </DialogContent>
  )
}

export { ProfileUpdateModal }
