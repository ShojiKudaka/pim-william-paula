'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { useCreateSchedulingForm } from '@/hooks/useCreateScheduligForm'

import { SelectDate } from './select-date'
import { SelectEmployee } from './select-employee'
import { SelectProcudure } from './select-procudure'

function CreateSchedulingForm() {
  const { form } = useCreateSchedulingForm()

  return (
    <Form {...form}>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-4">
          <SelectProcudure />

          <div>
            <Label>Valor</Label>
            <div className="mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              R$50
            </div>
          </div>
        </div>
        <SelectEmployee />
        <SelectDate control={form.control} />
      </div>

      <Button className="w-max">Agendar</Button>
    </Form>
  )
}

export { CreateSchedulingForm }
