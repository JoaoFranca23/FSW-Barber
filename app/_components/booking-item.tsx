import { Badge } from ".//ui/badge"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
