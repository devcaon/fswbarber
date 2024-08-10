import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { quickSearchOptions } from '../_constants/search';
import { Avatar, AvatarImage } from './ui/avatar'
import { AvatarFallback } from './ui/avatar'
import Link from 'next/link'
import SideBarButton from './Sidebar-button'

const Header = () => {
  return (
    <Card>
      <CardContent className='p-5 flex items-center justify-between'>
        <Image src='/logo.png' alt='FSW Barber' width={130} height={22} />
        <SideBarButton />
      </CardContent>
    </Card >
  )
}

export default Header