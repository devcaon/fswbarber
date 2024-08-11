import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import SideBarButton from './Sidebar-button'

const Header = () => {
  return (
    <Card>
      <CardContent className='p-5 flex items-center justify-between'>
        <Link href='/'>
          <Image src='/logo.png' alt='FSW Barber' width={130} height={22} /></Link>
        <SideBarButton />
      </CardContent>
    </Card >
  )
}

export default Header