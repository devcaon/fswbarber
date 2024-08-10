import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[170px] rounded-lg">
      <CardContent className="p-0 px-[6px] pt-2">
        {/* imagem */}
        <div className="relative h-[159px] w-full">
          <Image className="object-cover rounded-lg" src={barbershop.imageUrl} alt={barbershop.name} fill />

          <Badge className="absolute top-2 left-2 opacity-65 gap-1" variant="secondary">
            <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-bold">4.5</span>
          </Badge>

        </div>

        {/* texto */}
        <div className="py-3 px-1">
          <h3 className="font-semibold truncate ">{barbershop.name}</h3>
          <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>

          {/* button */}
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/barbershop/${barbershop.id}`}>
              Reservar
            </Link>
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

export default BarbershopItem