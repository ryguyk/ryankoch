'use client'

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Home, Laptop, GraduationCap, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

function NavLink({ href, icon, onClick, children }: { href: string; icon: React.ReactNode; onClick?: () => void; children: React.ReactNode }) {
  const pathName = usePathname();
  const currentPage = href === pathName;
  const handleClick = () => {
    if (currentPage) {
      onClick?.();
    }
  }

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-sm font-medium hover:underline transition ${currentPage ? 'underline' : ''}`}
      onClick={handleClick}
    >
      {icon}
      {children}
    </Link>
  );
}

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
      <NavLink href="/" icon={<Home className="h-5 w-5" />} onClick={onLinkClick}>About Me</NavLink>
      <NavLink href="/experience" icon={<Laptop className="h-5 w-5" />} onClick={onLinkClick}>Experience</NavLink>
      <NavLink href="/education" icon={<GraduationCap className="h-5 w-5" />} onClick={onLinkClick}>Education</NavLink>
      <NavLink href="/contact" icon={<Mail className="h-5 w-5" />} onClick={onLinkClick}>Contact</NavLink>
    </>
  )
}

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case "/":
      return "About Me";
    case "/experience":
      return "Experience";
    case "/education":
      return "Education";
    case "/contact":
      return "Contact";
    default:
      return "Resume";
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <header className="text-white bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <h1 className="text-2xl font-semibold">{title}</h1>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLinks />
          </nav>

          {/* Mobile hamburger (only when menu is closed) */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 fixed inset-0 z-50 bg-primary text-white">
            {/* Close button inside menu */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center text-lg space-y-10">
                <NavLinks onLinkClick={handleClose}/>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
