"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"

import SidebarSheet from "./sidebar-sheet"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const Header = async () => {
  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5">
        <Link href="/" className="flex items-center">
          <Image alt="FSWBarber" src="/logo.png" width={120} height={18} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
