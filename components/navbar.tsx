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


const Navbar = () => {
  return (
    <nav className="">
      <div className="hidden lg:flex justify-between items-center pt-2 px-6 font-link underline">
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

      <div className="lg:hidden flex justify-between">
        <Image 
          src="assets/Logo_Fox.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <Menu size={50}/>
      </div>
    </nav>
  )
}

export default Navbar