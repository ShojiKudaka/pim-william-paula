import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const useUpdateProfileSchema = z.object({
  name: z.string().min(1),
})

type UseUpdateProfileType = z.infer<typeof useUpdateProfileSchema>

function useUpdateProfileForm() {
  const form = useForm<UseUpdateProfileType>({
    resolver: zodResolver(useUpdateProfileSchema),
  })

  return { form }
}

export { useUpdateProfileForm }
