import { DialogTrigger } from '@radix-ui/react-dialog'
import { format } from 'date-fns'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useDeleteService } from '@/hooks/delete/use-delete-service'
import { IService } from '@/types/service'

import { ServicesEmployees } from './services-employees'

function ServicesTable({ services }: { services: IService[] }) {
  const { deleteServiceFn } = useDeleteService()

  function handleDeleteService({
    idToDelete,
    deletedServiceName,
  }: {
    idToDelete: number
    deletedServiceName: string
  }) {
    try {
      deleteServiceFn({ id: idToDelete })
      toast.success(`Serviço ${deletedServiceName} deletado`)
    } catch {
      toast.success(`Erro ao deletar funcionário ${deletedServiceName}`)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-30">Funcionários</TableHead>
          <TableHead className="w-30">Preço</TableHead>
          <TableHead className="w-30">Criado em</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services?.map((service) => (
          <TableRow key={service.id}>
            <TableCell>{service.id}</TableCell>
            <TableCell>{service.name}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Mostrar</Button>
                </DialogTrigger>

                <ServicesEmployees employees={service.employees} />
              </Dialog>
            </TableCell>
            <TableCell className="capitalize">R$ {service.price}</TableCell>
            <TableCell>{format(service.createdDate, 'MM/dd/yyyy')}</TableCell>
            <TableCell>
              <Button
                variant={'destructive'}
                onClick={() =>
                  handleDeleteService({
                    idToDelete: service.id,
                    deletedServiceName: service.name,
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

export { ServicesTable }
