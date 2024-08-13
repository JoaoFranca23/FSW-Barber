"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"

import SidebarSheet from "./sidebar-sheet"

const Header = async () => {
  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5">
        <Image alt="FSWBarber" src="/logo.png" width={120} height={18} />

        <SidebarSheet />
      </CardContent>
    </Card>
  )
}

export default Header
