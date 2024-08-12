import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* HEADER */}
      <Header></Header>

      <div className="p-5">
        {/* TEXTO */}
        <h2>Ola, Miguel!</h2>
        <p className="text-sm">Sexta,2 de fevereito</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        {/* BUSCA RAPIDA */}

        <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          <Button variant="secondary" className="gap-2">
            <Image alt="Cabelo" width={16} height={16} src="/cabelo.svg" />
            Cabelo
          </Button>

          <Button variant="secondary" className="gap-2">
            <FootprintsIcon width={16} height={16} />
            Pezinho
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image alt="Barba" width={16} height={16} src="/barba.svg" />
            Barba
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image
              alt="acabamento"
              width={16}
              height={16}
              src="/acabamento.svg"
            />
            acabamento
          </Button>
          <Button variant="secondary" className="gap-2">
            <EyeIcon width={16} height={16} />
            Sobrancelha
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
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
        <Card>
          <CardContent className="flex items-center justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png" />
                </Avatar>
                <p className="text-sm">FSW Barber</p>
              </div>
            </div>

            {/*DIREITA  */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid p-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">09:00</p>
            </div>
          </CardContent>
        </Card>

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
      <footer>
        <Card className="border-none px-5 py-6">
          <CardContent>
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold"> FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
export default Home
