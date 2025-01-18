'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="relative w-full bg-white border-b">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-[41px] mt-4 sm:mt-[29px] overflow-hidden">

        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[28px] sm:w-[50px] sm:h-[32px]">
            <div className="w-full h-full" />
          </div>
          <h1 className="text-[24px] sm:text-[34px] font-bold font-montserrat text-black flex items-center gap-2 sm:gap-4">
            <div>
              <Image
                src={'/logo.png'}
                alt={'Logo'}
                height={28}
                width={40}
                className="sm:h-[32px] sm:w-[50px]"
              />
            </div>
            Furniro
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-9 sm:gap-8">
          <Link
            href="/"
            className="text-sm sm:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-sm sm:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm sm:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            About
          </Link>
          <Link
            href="/ContactForm"
            className="text-sm sm:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-8 sm:gap-6">
          <button
            aria-label="Account"
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            aria-label="Search"
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            aria-label="Wishlist"
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            aria-label="Shopping Cart"
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <div className="md:hidden flex justify-center mt-4">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="text-sm font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
