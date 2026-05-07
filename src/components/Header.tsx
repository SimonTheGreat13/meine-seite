import { Link } from "react-router-dom";

const navItems = [
  { number: "01", label: "Home", to: "/" },
  { number: "02", label: "Work", to: "/#work" },
  { number: "03", label: "About", to: "/article/about-james" },
  { number: "04", label: "Pricing", to: "/#pricing" },
  { number: "05", label: "Contact", to: "/contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="article-header-grid" style={{ minHeight: "72px" }}>
        <div className="article-wrapper-constrained">
          <div className="flex items-center justify-between h-full py-4 gap-4">
            <Link
              to="/"
              className="text-lg md:text-2xl font-bold text-foreground shrink-0"
            >
              Andom Web Studio
            </Link>

            <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.number}
                  to={item.to}
                  className="flex items-center gap-1.5 sm:gap-2 group transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-[0.625rem] sm:text-[0.75rem] font-medium text-muted-foreground [writing-mode:vertical-rl] rotate-180 tracking-widest">
                    {item.number}
                  </span>
                  <span className="text-[0.75rem] sm:text-[0.875rem] font-semibold uppercase tracking-[0.15em] text-foreground underline underline-offset-[6px] decoration-1 group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="shrink-0 w-0 md:w-[140px]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
