import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function InputPrice() {
  return (
    <div>
      <Label>Preço</Label>
      <Input className="mt-1" type="number" placeholder="20.0" />
    </div>
  )
}

export { InputPrice }
