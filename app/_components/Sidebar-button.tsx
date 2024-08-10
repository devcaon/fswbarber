"use client";

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";

const SideBarButton = () => {

  const { data } = useSession() // dados do usuário logado

  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }
  const handleSignOutClick = async () => {
    await signOut()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[85vw]'>
        <SheetHeader>
          <SheetTitle className='text-left font-bold'>Menu</SheetTitle>
        </SheetHeader>

        <div className="py-5 flex items-center justify-between gap-4 border-b border-solid">

          {data?.user ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={data?.user?.image ?? ''} className='object-cover' />
                <AvatarFallback>CV</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>{data?.user.name}</h3>
                <span className='text-xs text-gray-400'>{data?.user?.email}</span>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-bold italic">Olá, Faça seu login!</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size='icon'>
                    <LogInIcon size={18} />
                  </Button>
                </DialogTrigger>
                <DialogContent className='w-[90vw]'>
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Faça login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta Google
                    </DialogDescription>
                  </DialogHeader>
                  <Button variant='outline' className="flex items-center gap-2 font-bold" onClick={handleLoginWithGoogleClick}>
                    <Image src='/google.svg' width={18} height={18} alt="Fazer login com o google" />
                    <span>Google</span>
                  </Button>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        <div className="py-5 flex flex-col gap-4 border-b border-solid">
          <SheetClose asChild>
            <Button variant='ghost' className='gap-2 font-bold justify-start' asChild>
              <Link href='/'>
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button variant='ghost' className='gap-2 font-bold justify-start'>
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        <div className="py-5 flex flex-col gap-4 border-b border-solid">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} variant='ghost' className='gap-2 font-bold justify-start'>
              <Image src={option.imageUrl} width={18} height={18} alt={option.title} />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="py-5 flex flex-col gap-4 ">
          <SheetClose asChild>
            {data?.user ? (
              <Button variant='ghost' className='gap-2 font-bold justify-start' onClick={handleSignOutClick}>
                <LogOutIcon size={18} />
                Sair da conta
              </Button>

            ) : (
              <Button variant='ghost' className='gap-2 font-bold justify-start'>
                <X size={18} />
                Fechar
              </Button>
            )}
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBarButton;