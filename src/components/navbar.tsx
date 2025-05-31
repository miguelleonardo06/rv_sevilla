import { Link } from "@tanstack/react-router";
import { MockLinks } from "@/mock/link";
import Logo from "@/assets/logo/logo.png";
export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <img src={Logo} className="h-24" />
      </div>
      <ul className="flex gap-16 mr-14">
        {MockLinks.map((link) => (
          <Link key={link.title} to={link.route}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
