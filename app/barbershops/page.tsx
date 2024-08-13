import { notFound } from "next/navigation";
import { db } from "../_lib/prisma";
import BarbershopItem from "../_components/Barbershop-item";
import Header from "../_components/Header";
import Search from "../_components/Search";

interface BarbershopsPageProps {
  searchParams: {
    search?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {

  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams?.search,
            mode: 'insensitive'
          }
        },
        {
          services: {
            some: {
              name: {
                contains: searchParams?.search,
                mode: 'insensitive'
              }
            }
          }
        }
      ]
    }
  })

  if (!barbershops) return notFound()

  return <div>
    <Header />
    <div className="my-6 px-5">
      <Search />
    </div>
    <div className="px-5">
      <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">Resultados para &quot;{searchParams.search}&quot;</h2>
      <div className="grid grid-cols-2 gap-4">
        {barbershops.map(barbershop => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  </div>
}

export default BarbershopsPage;