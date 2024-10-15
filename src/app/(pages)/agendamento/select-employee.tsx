import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectEmployee() {
  return (
    <div>
      <Label>Funcionario</Label>
      <Select>
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Selecione um funcionario" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="paula">Paula</SelectItem>
          <SelectItem value="william">William</SelectItem>
          <SelectItem value="joao">Joao</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export { SelectEmployee }
