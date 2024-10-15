import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const useLoginFormSchema = z.object({
  email: z
    .string()
    .email('Preencha um email válido')
    .min(1, 'Este campo é obrigatório'),
  password: z.string().min(1, 'Este campo é obrigatório'),
})

type UseLoginFormType = z.infer<typeof useLoginFormSchema>

function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseLoginFormType>({
    resolver: zodResolver(useLoginFormSchema),
  })

  function handleLogin({ email, password }: UseLoginFormType) {
    if (email === 'paula@uscsonline.com.br' && password === 'paula123') {
      toast.loading('Sendo redirecionado')
      window.location.href = '/agendamentos'
    } else {
      toast.error('Credencias inválidas')
    }
  }

  return { register, handleSubmit, handleLogin, errors }
}

export { useLoginForm }
