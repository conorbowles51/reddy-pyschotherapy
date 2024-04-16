"use client";

import { use, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Home, Info, Instagram, Linkedin, Menu, Phone, BookIcon } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Separator } from './ui/separator';
import PrivacyPolicy from './privacy-policy';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <Sheet
      open={open}
      onOpenChange={setOpen}
    > 
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 md:hidden mb-3">
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className='flex flex-col h-full justify-between'>
          <div>
            <div className='flex justify-center mb-5'>
              <Image 
                src="/assets/Logo_Text.svg"
                width={100}
                height={100}
                alt='logo'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <MobileLink href="/" onOpenChange={setOpen} className="flex items-center">
                <Home className='mr-2 h-4 w-4'/>
                <span className='font-bold font-heading'>Home</span>
              </MobileLink>

              <Separator />

              <MobileLink href="/about" onOpenChange={setOpen} className="flex items-center">
                <Info className='mr-2 h-4 w-4'/>
                <span className='font-bold font-heading'>About</span>
              </MobileLink>

              <Separator />

              <MobileLink href="/blog" onOpenChange={setOpen} className="flex items-center">
                <BookIcon className='mr-2 h-4 w-4'/>
                <span className='font-bold font-heading'>Blog</span>
              </MobileLink>

              <Separator />

              <MobileLink href="/contact" onOpenChange={setOpen} className="flex items-center">
                <Phone className='mr-2 h-4 w-4'/>
                <span className='font-bold font-heading'>Contact</span>
              </MobileLink>

              <Separator className='mb-auto'/>  
            </div>
          </div>

          <div className="flex justify-between">
            <div className='flex'>
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

            <PrivacyPolicy className=''/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  
  return (
    <Link 
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
 
export default MobileNavbar;