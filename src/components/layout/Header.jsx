import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "News", path: "/news" },
    { name: "Action Plan", path: "/action-plan" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        {/* LOGO */}
        <div className="flex justify-start">
          <Link to="/" className="flex items-center">
            <img
              src="/logos/TEXT_LOGO.png"
              alt="BHCA"
              className="h-18 w-auto"
            />
          </Link>
        </div>

        {/* CENTERED DESKTOP NAV */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `font-semibold transition ${
                  isActive
                    ? "text-[#5e17eb]"
                    : "text-[#171717] hover:text-[#ff914d]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden items-center justify-end gap-3 md:flex">
          <Button
            href="https://forms.gle/HdPxKtQfXRHJ3AH17"
            variant="outline"
            className="px-5 py-3 text-sm"
          >
            Volunteer
          </Button>

          <Button
            href="https://donorbox.org/embed/beeston-hill-community-association-838411?"
            variant="orange"
            className="px-5 py-3 text-sm"
          >
            Donate
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="col-start-3 flex justify-end md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#faf8ff]"
            aria-label="Open menu"
          >
            <div className="space-y-1">
              <div className="h-0.5 w-5 bg-[#171717]" />
              <div className="h-0.5 w-5 bg-[#171717]" />
              <div className="h-0.5 w-5 bg-[#171717]" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-6 md:hidden">
          <nav className="grid gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold transition ${
                    isActive ? "text-[#5e17eb]" : "text-[#171717]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-4 grid gap-3">
              <Button
                href="https://forms.gle/HdPxKtQfXRHJ3AH17"
                variant="outline"
                className="w-full"
              >
                Volunteer
              </Button>

              <Button
                href="https://donorbox.org/embed/beeston-hill-community-association-838411?"
                variant="orange"
                className="w-full"
              >
                Donate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}