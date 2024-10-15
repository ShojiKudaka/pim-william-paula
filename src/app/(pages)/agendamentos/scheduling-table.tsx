import { format } from 'date-fns'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useDeleteAppointment } from '@/hooks/delete/use-delete-appointment'
import { IAppointment } from '@/types/appointment'

function SchedulingTable({ appointments }: { appointments: IAppointment[] }) {
  const { deleteAppointmentFn } = useDeleteAppointment()

  function handleDeleteAppointment({
    idToDelete,
    deletedAppointmentName,
  }: {
    idToDelete: number
    deletedAppointmentName: string
  }) {
    try {
      deleteAppointmentFn({ id: idToDelete })
      toast.success(`Serviço ${deletedAppointmentName} deletado`)
    } catch {
      toast.success(`Erro ao deletar funcionário ${deletedAppointmentName}`)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-30">Cliente</TableHead>
          <TableHead className="w-30">Valor</TableHead>
          <TableHead className="w-30">Funcionário</TableHead>
          <TableHead className="w-30">Data</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments?.map((appointment, i) => (
          <TableRow key={i}>
            <TableCell>{i}</TableCell>
            <TableCell>{appointment.name}</TableCell>
            <TableCell>{appointment.client}</TableCell>
            <TableCell className="capitalize">
              {appointment.service?.price}
            </TableCell>
            <TableCell>Paula</TableCell>
            <TableCell>{format(appointment.date, 'MM/dd/yyyy')}</TableCell>
            <TableCell>
              <Button
                variant={'destructive'}
                onClick={() =>
                  handleDeleteAppointment({
                    idToDelete: appointment.id,
                    deletedAppointmentName: appointment.name,
                  })
                }
              >
                Deletar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { SchedulingTable }
