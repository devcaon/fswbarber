import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/Barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/Booking-item";
import Footer from "./_components/Footer";
import Search from "./_components/Search";


export default async function Home() {

  // chamar banco de dados

  const barbershops = await db.barbershop.findMany({})

  // TODO: Filtrar por mais acessados
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return (
    <div className="">
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Cláudio</h2>
        <p>Segunda-feira, 05 de Agosto</p>

        {/* search */}
        <div className="mt-6">
          <Search />
        </div>

        {/* busca rápida */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => (
            <Button key={option.title} className="gap-2" variant='secondary'>
              <Image src={option.imageUrl} alt={option.title} width={16} height={16} />
              <p>{option.title}</p>
            </Button>
          ))}
        </div>

        {/* banner */}
        <div className="relative w-full h-[150px] mt-6">
          <Image src='/banner_01.png' alt="Agende nos melhores com FSW Barber" className="object-cover  rounded-lg" fill />
        </div>

        {/* Agendamento */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) =>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          )}
        </div>

        {/* Populares */}
        <h2 className="pt-6 mb-3 uppercase text-xs text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) =>
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          )}
        </div>
      </div>

    </div>
  );
}
