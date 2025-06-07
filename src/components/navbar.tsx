import { Link } from "@tanstack/react-router";
import { MockLinks } from "@/mock/link";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import Logo from "@/assets/logo/logo.png";
import * as React from "react";
export function Navbar() {
  const [isMobileMenuActive, toggleMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="sticky top-0 overflow-hidden bg-white z-20">
      <nav className="navbar-container flex items-center justify-between">
        <div>
          <img src={Logo} className="h-24 cursor-pointer" />
        </div>
        <ul className="hidden md:flex md:flex-row lg:gap-16 md:gap-8">
          {MockLinks.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className="inter-normal-font text-primary"
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <List
          className="block md:hidden mr-12"
          height="27px"
          width="27px"
          onClick={() => {
            toggleMobileMenu((prev) => !prev);
          }}
        />
        <Button className="mr-12 font-semibold hidden md:block">
          Message us for Booking
        </Button>
      </nav>
      {/* Mobile menu */}
      {isMobileMenuActive && (
        <ul className="flex flex-col w-full items-center bg-white z-40 shadow-md md:hidden px-6 pb-4">
          {MockLinks.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className="inter-normal-font text-primary py-2"
              onClick={() => toggleMobileMenu(false)}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
