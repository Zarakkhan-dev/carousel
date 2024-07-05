import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'

const Header = () => {
  return (
    <>
    <section className="Header h-[100vh] overflow-hidden relative">  
        <nav>
        <Link href="/">
        Home
        </Link>
        <Link href="/">
        About us
        </Link>
        <Link href="/">
        Contact us
        </Link>
        <Link href="/">
        Blog
        </Link>
    </nav>
    <Carousel/>
    </section>

    </>
  )
}

export default Header
