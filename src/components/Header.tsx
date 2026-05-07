import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { number: "01", label: "Home", to: "/" },
  { number: "02", label: "Work", to: "/#work" },
  { number: "03", label: "About", to: "/article/about-james" },
  { number: "04", label: "Pricing", to: "/#pricing" },
  { number: "05", label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="article-header-grid" style={{ minHeight: "72px" }}>
        <div className="article-wrapper-constrained">
          <div className="flex items-center justify-between h-full py-4">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground"
            >
              Andom Web Studio
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.number}
                  to={item.to}
                  className="flex items-center gap-2 group"
                >
                  <span className="text-[0.75rem] font-medium text-muted-foreground [writing-mode:vertical-rl] rotate-180 tracking-widest">
                    {item.number}
                  </span>
                  <span className="text-[0.875rem] font-semibold uppercase tracking-[0.15em] text-foreground underline underline-offset-[6px] decoration-1 group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.number}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-3"
                    >
                      <span className="text-[0.875rem] font-medium text-muted-foreground tracking-widest">
                        {item.number}
                      </span>
                      <span className="text-[1.5rem] font-semibold uppercase tracking-[0.15em] text-foreground underline underline-offset-[6px] decoration-1 hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
