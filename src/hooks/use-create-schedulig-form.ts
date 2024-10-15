import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const useCreateSchedulingSchema = z.object({
  name: z.string().min(1),
  client: z.string().min(1),
  serviceId: z.string().min(1),
  employeeId: z.string().min(1),
  date: z.date(),
})

export type UseCreateSchedulingType = z.infer<typeof useCreateSchedulingSchema>

function useCreateSchedulingForm() {
  const form = useForm<UseCreateSchedulingType>({
    resolver: zodResolver(useCreateSchedulingSchema),
  })

  return { form }
}

export { useCreateSchedulingForm }
