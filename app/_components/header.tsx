import Image from "next/image"
import { Card, CardContent } from "./ui/card"

import SidebarSheet from "./sidebar-sheet"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { CalendarIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import LogInGoogle from "./log-in-google"

const Header = async () => {
  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5 lg:px-32">
        <Link href="/" className="flex items-center">
          <Image alt="FSWBarber" src="/logo.png" width={120} height={18} />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <Button className="flex items-center gap-5">
            <CalendarIcon /> Agendamentos
          </Button>

          <LogInGoogle />
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
