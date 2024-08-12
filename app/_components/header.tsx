"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = async () => {
  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5">
        <Image alt="FSWBarber" src="/logo.png" width={120} height={18} />
        <Button size="icon" variant="outline">
          <MenuIcon></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
