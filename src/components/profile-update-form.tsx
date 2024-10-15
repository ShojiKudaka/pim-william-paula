'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUpdateProfileForm } from '@/hooks/use-update-profile-form'

function ProfileUpdateForm() {
  const { form } = useUpdateProfileForm()

  return (
    <Form {...form}>
      <div className="col-span-3">
        <Label>Nome</Label>
        <Input className="mt-1" placeholder="Digite um nome" />
      </div>

      <Button className="w-max">Atualizar</Button>
    </Form>
  )
}

export { ProfileUpdateForm }
