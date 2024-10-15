'use client'

import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLoginForm } from '@/hooks/use-login-form'

export default function SignIn() {
  const { register, handleSubmit, handleLogin, errors } = useLoginForm()

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="max-w-[30rem]">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold">Paula PIM</h1>
          <h2 className="text-foreground/80">
            Acesse sua conta e organize sua agenda, fidelize clientes e
            acompanhe o crescimento do seu negócio de beleza.
          </h2>
        </header>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-8"
        >
          <div>
            <Label htmlFor="email" className="font-bold">
              Email
            </Label>
            <Input
              id="email"
              {...register('email')}
              placeholder="nome@teste.com"
            />
            <FormError error={errors.email} />
          </div>

          <div>
            <Label htmlFor="password" className="font-bold">
              Senha
            </Label>
            <Input
              id="password"
              {...register('password')}
              type="password"
              placeholder="••••••••"
            />
            <FormError error={errors.password} />
          </div>

          <Button>Entrar</Button>
        </form>
      </div>
    </main>
  )
}
