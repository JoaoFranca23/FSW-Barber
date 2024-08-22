import Header from "@/app/_components/header"
import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}
const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  const weekDays = [
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ]
  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="justify-between lg:mt-8 lg:flex lg:px-32">
        {/* IMAGE */}
        <div>
          <div className="relative h-[250px] w-full opacity-30 grayscale lg:h-[450px] lg:w-[1080px]">
            <Image
              alt={barbershop.name}
              src={barbershop?.imageUrl}
              fill
              className="object-cover lg:rounded-2xl"
            />

            <Button
              size="icon"
              variant="secondary"
              className="absolute left-4 top-4 lg:hidden"
              asChild
            >
              <Link href="/">
                <ChevronLeftIcon />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute right-4 top-4 lg:hidden"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SidebarSheet />
            </Sheet>
          </div>
          {/* TITULO */}
          <div className="items-start justify-between border-b border-solid p-5 lg:flex lg:hidden">
            <div>
              <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
              <div className="mb-2 flex items-center gap-2">
                <MapPinIcon className="text-primary" size={18} />
                <p className="text-sm"> {barbershop?.address}</p>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2 lg:flex-col">
              <div className="flex gap-1">
                <StarIcon className="fill-primary text-primary" size={18} />
                <p className="text-sm">5,0 </p>
              </div>

              <p className="text-sm">(889 avaliações)</p>
            </div>
          </div>
          {/* SOBRE NOS */}
          <div className="space-y-2 border-b border-solid p-5 lg:hidden">
            <h2 className="text-xs font-bold uppercase text-gray-400">
              Sobre nós
            </h2>
            <p className="text-justify text-sm">{barbershop?.description}</p>
          </div>
          {/* SERVIÇOS */}
          <div className="flex flex-col gap-2 p-5 lg:px-0">
            <h2 className="text-xs font-bold uppercase text-gray-400">
              Serviços
            </h2>
            <div className="flex grid-cols-2 flex-col gap-2 lg:grid">
              {barbershop.services.map((service) => (
                <ServiceItem
                  key={service.id}
                  barbershop={barbershop}
                  service={service}
                />
              ))}
            </div>
          </div>
          {/* CONTATO */}
          <div className="space-y-3 p-5 lg:hidden">
            {barbershop.phones.map((phone) => (
              <PhoneItem key={phone} phone={phone} />
            ))}
          </div>
        </div>

        {/*  DIREITA DESKTOP*/}

        <Card className="hidden h-full w-[500px] flex-col items-center gap-5 px-8 py-6 lg:flex">
          <div className="relative flex h-[200px] w-full justify-center">
            <Image fill alt={barbershop.name} src="/barberShopMap.png" />

            <Card className="absolute top-1/2 flex w-[266px]">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 p-4">
                  <Avatar>
                    <AvatarImage src={barbershop.imageUrl} />
                  </Avatar>

                  <div>
                    <p className="font-bold">{barbershop.name}</p>
                    <p className="text-sx truncate">{barbershop.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2>Sobre nós</h2>
            <p className="text-justify text-sm text-gray-400">
              {barbershop?.description}
            </p>
          </div>
          <div className="flex w-full flex-col justify-between gap-1 border-y border-solid p-5">
            {barbershop.phones.map((phone) => (
              <PhoneItem key={phone} phone={phone} />
            ))}
          </div>

          {/* HORARIOS */}
          <div className="flex w-full flex-col gap-2 border-b border-solid pb-5">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="capitalize text-gray-400">domingo</p>
                <p className="capitalize text-gray-400">segunda</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm capitalize">fechado</p>
                <p className="text-sm capitalize">fechado</p>
              </div>
            </div>
            {weekDays.map((day, index) => (
              <div className="flex justify-between">
                <p className="capitalize text-gray-400" key={index}>
                  {day}
                </p>
                <p className="text-sm">09:00 - 18:00</p>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-between p-3 px-0">
            <div>
              <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
              <div className="mb-2 flex items-center gap-2">
                <MapPinIcon className="text-primary" size={18} />
                <p className="text-sm"> {barbershop?.address}</p>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2 lg:flex-col">
              <div className="flex gap-1">
                <StarIcon className="fill-primary text-primary" size={18} />
                <p className="text-sm">5,0 </p>
              </div>

              <p className="text-sm">(889 avaliações)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default BarbershopPage
