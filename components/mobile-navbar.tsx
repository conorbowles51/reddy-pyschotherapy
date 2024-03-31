"use client";

import { use, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Home, Info, Menu, Phone } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <Sheet
      open={open}
      onOpenChange={setOpen}
    > 
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 md:hidden">
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
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

          <MobileLink href="/about" onOpenChange={setOpen} className="flex items-center">
            <Info className='mr-2 h-4 w-4'/>
            <span className='font-bold font-heading'>About</span>
          </MobileLink>

          <MobileLink href="/contact" onOpenChange={setOpen} className="flex items-center">
            <Phone className='mr-2 h-4 w-4'/>
            <span className='font-bold font-heading'>Contact</span>
          </MobileLink>
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