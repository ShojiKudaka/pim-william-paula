import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const useCreateSchedulingSchema = z.object({
  procudure: z.string().min(1),
  employee: z.string().min(1),
  date: z.date(),
})

type UseCreateSchedulingType = z.infer<typeof useCreateSchedulingSchema>

function useCreateSchedulingForm() {
  const form = useForm<UseCreateSchedulingType>({
    resolver: zodResolver(useCreateSchedulingSchema),
  })

  // function handleLogin({
  //   procudure,
  //   employee,
  //   date,
  // }: UseCreateSchedulingType) {}

  return { form }
}

export { useCreateSchedulingForm }
