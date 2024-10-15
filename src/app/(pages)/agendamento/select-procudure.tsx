import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectProcudure() {
  return (
    <div className="col-span-3">
      <Label>Procedimeto</Label>
      <Select>
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Selecione um procedimento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tintura">Tintura</SelectItem>
          <SelectItem value="esmaltacao">Esmaltação</SelectItem>
          <SelectItem value="corte-de-cabelo">Corte de cabelo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export { SelectProcudure }
