'use client'

import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useServices } from '@/hooks/get/use-services'

import { CreateServiceModal } from './create-service-modal'
import { ServicesTable } from './services-table'

export default function Serviços() {
  const { services } = useServices()

  return (
    <Dialog>
      <main className="container-c mt-10">
        <header className="mb-12 flex items-center justify-between">
          <h1>Serviços</h1>
          <DialogTrigger asChild>
            <Button>Crie um serviço</Button>
          </DialogTrigger>
        </header>

        <ServicesTable services={services} />

        <Pagination
          // onPaginate={(page: number) => console.log(page)}
          currentQuantity={1}
          limit={10}
          page={1}
          totalCount={100}
        />
      </main>

      <CreateServiceModal />
    </Dialog>
  )
}
