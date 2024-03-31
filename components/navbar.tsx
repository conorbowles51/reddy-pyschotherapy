import Image from "next/image"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

import { Menu } from 'lucide-react'
import MobileNavbar from "./mobile-navbar"


const Navbar = () => {
  return (
    <nav className="">
      <div className="hidden md:flex justify-between items-center pt-2 px-6 font-link underline">
        <Link href="/">
          <Image 
            width={200}
            height={160}
            alt="logo"
            src="/assets/Logo_fox.svg"
          />
        </Link>

        <div className="flex gap-[100px]">
          <Link href="/about">About</Link>
          <Link href="#advice">Advice</Link>
        </div>

        <Image 
          width={320}
          height={133}
          alt="logo"
          src="/assets/Logo_text.svg"
        />

        <div className="flex gap-[100px]">
          <Link href="/#services">Services</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        <div className="flex">
          <Link href="facebook.com">
            <Image 
              width={50}
              height={50}
              alt="facebook"
              src="assets/Button_Facebook.svg"
            />
          </Link>

          <Link href="instagram.com">
            <Image 
              width={50}
              height={50}
              alt="instagram"
              src="assets/Button_Instagram.svg"
            />
          </Link>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default Navbar