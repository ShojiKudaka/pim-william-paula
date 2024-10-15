import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import { ProfileUpdateModal } from './profile-update-modal'

function ProfileDropdown() {
  return (
    <Dialog>
      <DropdownMenu>
        {/* <DropdownMenuTrigger asChild> */}
        <Button variant={'outline'}>Paula</Button>
        {/* </DropdownMenuTrigger> */}
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex flex-col">
            Paula
            <span className="text-sm font-normal text-foreground/70">
              paula@uscsonline.com.br
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DialogTrigger>Atualizar informações</DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileUpdateModal />
    </Dialog>
  )
}

export { ProfileDropdown }
