'use client'

import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateEmployee } from '@/hooks/post/use-create-employee'
import {
  useCreateEmployeeForm,
  UseCreateEmployeeType,
} from '@/hooks/use-create-employee-form'

function CreateEmployeeForm() {
  const { form } = useCreateEmployeeForm()
  const { createAppoitmentFn } = useCreateEmployee()

  function handleCreateNewEmployee({ name }: UseCreateEmployeeType) {
    createAppoitmentFn({ name })
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        id="createEmployeeForm"
        onSubmit={form.handleSubmit(handleCreateNewEmployee)}
      >
        <div className="col-span-3">
          <Label>Nome</Label>
          <Input
            {...form.register('name')}
            className="mt-1"
            placeholder="Digite um nome"
          />
          <FormError error={form.formState.errors.name} />
        </div>

        <Button type="submit" form="createEmployeeForm" className="w-max">
          Criar
        </Button>
      </form>
    </Form>
  )
}

export { CreateEmployeeForm }
