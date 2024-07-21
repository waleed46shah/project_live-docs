import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex-1">
        <Image
          src="/assets/icons/logo.svg"
          className="hidden md:block"
          width={120}
          height={32}
          alt="Logo with name"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          className="md:hidden mr-2"
          width={32}
          height={32}
          alt="Logo"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
