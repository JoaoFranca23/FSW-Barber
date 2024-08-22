import Header from "./_components/header"
import { Button } from "./_components/ui/button"

import Image from "next/image"
import { authOptions } from "./_lib/auth"
import { getServerSession } from "next-auth"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"

import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const recommendBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  })

  return (
    <div>
      {/* HEADER */}
      <Header></Header>

      {/* DESKTOP */}

      <div className="relative hidden bg-[url('/banner-02.jpg')] bg-cover p-5 px-32 lg:flex">
        {/* DIREITA */}
        <div className="flex items-center justify-between gap-72 overflow-hidden">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="mb-2 text-xl font-bold">
                Olá, {session?.user ? session.user.name : "bem vindo"}!
              </h2>
              <p>
                <span className="capitalize">
                  {format(new Date(), "EEEE, dd", { locale: ptBR })}
                </span>
                <span>&nbsp;de&nbsp;</span>
                <span className="capitalize">
                  {format(new Date(), "MMMM", { locale: ptBR })}
                </span>
              </p>
            </div>
            <div className="mt-3 w-[439px]">
              <Search />
            </div>
          </div>
          {/* ESQUERDA */}
          <div>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Recomendados
            </h2>
            <div className="flex gap-3 overflow-hidden">
              {recommendBarbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="p-5 lg:px-32">
        <div className="lg:hidden">
          {/* TEXTO */}
          <h2 className="text-xl font-bold">
            Olá, {session?.user ? session.user.name : "bem vindo"}!
          </h2>
          <p>
            <span className="capitalize">
              {format(new Date(), "EEEE, dd", { locale: ptBR })}
            </span>
            <span>&nbsp;de&nbsp;</span>
            <span className="capitalize">
              {format(new Date(), "MMMM", { locale: ptBR })}
            </span>
          </p>
          {/* BUSCA */}
          <div className="mt-3">
            <Search />
          </div>
          {/* BUSCA RAPIDA */}
          <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
            {quickSearchOptions.map((option) => (
              <Button
                variant="secondary"
                className="gap-2"
                key={option.title}
                asChild
              >
                <Link href={`/barbershops?service=${option.title}`}>
                  <Image
                    src={option.imageUrl}
                    alt={option.title}
                    width={16}
                    height={16}
                  />
                  {option.title}
                </Link>
              </Button>
            ))}
          </div>
          {/* IMAGEM */}
          <div className="lg: relative mt-6 h-[150px] w-full">
            <Image
              alt="Agende nos melhores com FSW Barber"
              src="/banner-01.png"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          {/* AGENDAMENTO */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <BookingItem />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
