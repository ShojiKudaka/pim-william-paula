'use client'

import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateService } from '@/hooks/post/use-create-service'
import {
  useCreateServiceForm,
  UseCreateServiceType,
} from '@/hooks/use-create-service-form'
import { IEmployee } from '@/types/employee'
import { getEmployeeById } from '@/utils/get/get-employee-by-id'

import { SelectEmployee } from './select-employee'

function CreateServiceForm() {
  const { form } = useCreateServiceForm()
  const { createServiceFn } = useCreateService()

  async function handleCreateNewService({
    name,
    price,
    employee,
  }: UseCreateServiceType) {
    const addedEmployee = (await getEmployeeById({
      id: Number(employee),
    })) as IEmployee

    // @ts-expect-error vscode bugged
    createServiceFn({
      name,
      price: Number(price),
      employees: [addedEmployee],
    })
  }

  return (
    <Form {...form}>
      <form
        id="createServiceForm"
        onSubmit={form.handleSubmit(handleCreateNewService)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-6"></div>
        <div className="grid grid-cols-4 gap-4">
          {/* Name */}
          <div className="col-span-3">
            <Label>Nome</Label>
            <Input
              {...form.register('name')}
              className="mt-1"
              placeholder="Digite um nome"
            />
            <FormError error={form.formState.errors.name} />
          </div>

          {/* Price */}
          <div>
            <Label>Preço</Label>
            <Input
              {...form.register('price')}
              className="mt-1"
              type="number"
              placeholder="20.0"
            />
            <FormError error={form.formState.errors.price} />
          </div>
        </div>

        <SelectEmployee onChange={form.setValue} />

        <Button form="createServiceForm" type="submit" className="w-max">
          Criar
        </Button>
      </form>
    </Form>
  )
}

export { CreateServiceForm }
