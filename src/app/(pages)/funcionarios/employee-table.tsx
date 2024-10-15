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
import { useDeleteEmployee } from '@/hooks/delete/use-delete-employee'
import { IEmployee } from '@/types/employee'

function EmployeeTable({ employees }: { employees: IEmployee[] }) {
  const { deleteEmployeeFn } = useDeleteEmployee()

  function handleDeleteEmployee({
    idToDelete,
    deletedEmployeeName,
  }: {
    idToDelete: number
    deletedEmployeeName: string
  }) {
    try {
      deleteEmployeeFn({ id: idToDelete })
      toast.success(`Funcionário ${deletedEmployeeName} deletado`)
    } catch {
      toast.success(`Erro ao deletar funcionário ${deletedEmployeeName}`)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees?.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>
              <Button
                variant={'destructive'}
                onClick={() =>
                  handleDeleteEmployee({
                    idToDelete: employee.id,
                    deletedEmployeeName: employee.name,
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

export { EmployeeTable }
