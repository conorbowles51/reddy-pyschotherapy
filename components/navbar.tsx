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

import { Instagram, Linkedin } from "lucide-react"


const Navbar = () => {
  return (
    <nav className="">
      <div className="hidden md:flex justify-between items-center pt-2 px-6 font-link font-bold text-[#2B3349] underline">
        <Link href="/" className="">
          <Image 
            width={200}
            height={160}
            alt="logo"
            src="/assets/Logo_Fox.svg"
          />
        </Link>

          <Link href="/about" className="mx-4">About</Link>
          <Link href="#advice" className="mx-4">Advice</Link>

        <Link href="/" className="">
          <Image 
            width={320}
            height={133}
            alt="logo"
            src="/assets/Logo_Text.svg"
          />
        </Link>

          <Link href="/#services" className="mx-4">Services</Link>
          <Link href="/contact" className="mx-4">Contact</Link>

        <div className="flex">
          <Link href="https://ie.linkedin.com/in/evareddypsychotherapy">
            <div className="p-3 text-white bg-[#D4491D] rounded-full mx-1">
              <Linkedin/>
            </div>
          </Link>

          <Link href="https://www.instagram.com/reddypsychotherapy/">
            <div className="p-3 text-white bg-[#D4491D] rounded-full mx-1">
              <Instagram/>
            </div>
          </Link>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default Navbar