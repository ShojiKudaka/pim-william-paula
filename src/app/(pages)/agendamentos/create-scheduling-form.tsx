'use client'

import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useService } from '@/hooks/get/use-service'
import { useCreateAppointment } from '@/hooks/post/use-create-appointment'
import {
  useCreateSchedulingForm,
  UseCreateSchedulingType,
} from '@/hooks/use-create-schedulig-form'

import { SelectDate } from './select-date'
import { SelectEmployee } from './select-employee'
import { SelectProcudure } from './select-procudure'

function CreateSchedulingForm() {
  const { form } = useCreateSchedulingForm()
  const { createAppoitmentFn } = useCreateAppointment()

  const hours = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 8
    return `${hour.toString().padStart(2, '0')}:00`
  })

  const selectedserviceId = form.watch('serviceId')

  const { service } = useService({ id: Number(selectedserviceId) })

  function handleHourChange(hourString: string) {
    const hour = parseInt(hourString.split(':')[0], 10)
    const currentDate = form.getValues('date') || new Date()
    const newDate = new Date(currentDate)
    newDate.setHours(hour, 0, 0, 0)

    form.setValue('date', newDate)
  }

  async function handleCreateNewAppointment({
    name,
    client,
    employeeId,
    serviceId,
    date,
  }: UseCreateSchedulingType) {
    console.log(name, client, employeeId, serviceId, date)

    createAppoitmentFn({
      name,
      client,
      employeeId: Number(employeeId),
      serviceId: Number(serviceId),
      date,
    })
  }

  return (
    <Form {...form}>
      <form
        id="createAppointmentForm"
        onSubmit={form.handleSubmit(handleCreateNewAppointment)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-6">
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

          {/* Client */}
          <div className="col-span-3">
            <Label>Cliente</Label>
            <Input
              {...form.register('client')}
              className="mt-1"
              placeholder="Digite um nome"
            />
            <FormError error={form.formState.errors.name} />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <SelectProcudure onChange={form.setValue} />

            <div>
              <Label>Valor</Label>
              <div className="mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                {service?.price}
              </div>
            </div>
          </div>
          <SelectEmployee onChange={form.setValue} />
          <SelectDate control={form.control} />

          <div>
            <Label>Hora</Label>
            <Select onValueChange={(e) => handleHourChange(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma hora" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" form="createAppointmentForm" className="w-max">
          Agendar
        </Button>
      </form>
    </Form>
  )
}

export { CreateSchedulingForm }
