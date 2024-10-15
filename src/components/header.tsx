import { Mountain } from 'lucide-react'

import { NavLink } from './nav-link'
import { ProfileDropdown } from './profile-dropdown'
import { Divider } from './ui/divider'
import { ThemeToggle } from './ui/theme-toggle'

function Header() {
  return (
    <header>
      <nav className="container-c flex h-20 items-center justify-between border-b border-muted">
        <div className="flex items-center gap-4">
          <Mountain className="h-6 w-6" />

          <Divider />

          <div className="flex gap-4">
            <NavLink to="/agendamentos">Agendamentos</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/funcionarios">Funcionários</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  )
}

export { Header }
