"use client"
import { LogInIcon } from "lucide-react"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

const LogInGoogle = () => {
  const { data } = useSession()

  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-solid py-5 lg:border-none lg:py-0">
      {data?.user ? (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={data?.user?.image ?? ""} />
          </Avatar>

          <div>
            <p className="font-bold">{data.user.name}</p>
            <p className="text-sx truncate">{data.user.email}</p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-bold">Olá, faça seu login</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <LogInIcon />
              </Button>
            </DialogTrigger>

            <DialogContent className="w-[90%]">
              <DialogHeader>
                <DialogTitle>Faça seu login</DialogTitle>
                <DialogDescription>
                  Conecte-se usando sua conta do Google
                </DialogDescription>
              </DialogHeader>
              <Button
                variant="outline"
                className="flex gap-2 font-bold"
                onClick={handleLoginWithGoogleClick}
              >
                <Image
                  src="/google.svg"
                  alt="Fazer login com o Google"
                  width={18}
                  height={18}
                />
                Google
              </Button>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}

export default LogInGoogle
