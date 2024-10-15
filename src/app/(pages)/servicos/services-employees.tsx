import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IEmployee } from '@/types/employee'

function ServicesEmployees({ employees }: { employees: IEmployee[] }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Funcionários</DialogTitle>
        <DialogDescription>
          Funcionários que exercem esse serviço
        </DialogDescription>
      </DialogHeader>

      <Table>
        <TableHeader>
          <TableHead className="w-10">Id</TableHead>
          <TableHead>Nome</TableHead>
        </TableHeader>
        <TableBody>
          {employees?.map((employee) => {
            return (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </DialogContent>
  )
}

export { ServicesEmployees }
