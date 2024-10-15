import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const useCreateServiceSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  employee: z.string().min(1),
})

export type UseCreateServiceType = z.infer<typeof useCreateServiceSchema>

function useCreateServiceForm() {
  const form = useForm<UseCreateServiceType>({
    resolver: zodResolver(useCreateServiceSchema),
  })

  // function handleLogin({
  //   procudure,
  //   employee,
  //   date,
  // }: UseCreateServiceType) {}

  return { form }
}

export { useCreateServiceForm }
