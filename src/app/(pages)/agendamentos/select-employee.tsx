import { UseFormSetValue } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEmployees } from '@/hooks/get/use-employees'

function SelectEmployee({
  onChange,
}: {
  onChange: UseFormSetValue<{
    name: string
    client: string
    serviceId: string
    employeeId: string
    date: Date
  }>
}) {
  const { employees } = useEmployees()

  return (
    <div>
      <Label>Funcionario</Label>
      <Select onValueChange={(e) => onChange('employeeId', e)}>
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Selecione um funcionario" />
        </SelectTrigger>
        <SelectContent>
          {employees?.map((employee) => (
            <SelectItem key={employee.id} value={String(employee.id)}>
              {employee.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { SelectEmployee }
