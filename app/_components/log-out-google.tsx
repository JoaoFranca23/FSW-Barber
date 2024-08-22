import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { LogOutIcon } from "lucide-react"

const LogOutGoogle = () => {
  const handleLogoutClick = async () => {
    await signOut()
  }
  return (
    <Button
      variant="ghost"
      className="justify-start gap-2"
      onClick={handleLogoutClick}
    >
      <LogOutIcon size={18} />
      Sair da conta
    </Button>
  )
}

export default LogOutGoogle
