"use client"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"

import Link from "next/link"
import LogInGoogle from "./log-in-google"
import LogOutGoogle from "./log-out-google"

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* PERFIL */}

      <LogInGoogle />

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
          <SheetClose key={option.title} asChild>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  width={18}
                  height={18}
                  src={option.imageUrl}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <LogOutGoogle />
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
