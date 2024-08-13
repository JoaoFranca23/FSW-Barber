import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"

import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
const SidebarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {/* PERFIL */}
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Avatar>

          <div>
            <p className="font-bold">Joao Franca</p>
            <p className="text-sx">joaofranc@gmial.io</p>
          </div>
        </div>

        {/* DESCRIÇÃO */}
        <div className="flex flex-col gap-4 border-b border-solid p-5">
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button variant="ghost" className="justify-start gap-2">
            <CalendarIcon size={18} /> Agendamento
          </Button>
        </div>
        <div className="flex flex-col gap-4 border-b border-solid p-5">
          {quickSearchOptions.map((option) => (
            <Button variant="ghost" className="justify-start gap-2">
              <Image
                alt={option.title}
                width={18}
                height={18}
                src={option.imageUrl}
              />
              {option.title}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-b border-solid p-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarSheet
