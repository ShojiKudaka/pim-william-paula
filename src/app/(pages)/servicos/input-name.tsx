import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function InputName() {
  return (
    <div className="col-span-3">
      <Label>Nome</Label>
      <Input className="mt-1" placeholder="Digite um nome" />
    </div>
  )
}

export { InputName }
