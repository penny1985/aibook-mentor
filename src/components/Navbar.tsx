import { useState } from "react";

const navItems = [
  { label: "課程介紹", href: "#problem" },
  { label: "服務流程", href: "#process" },
  { label: "方案定價", href: "#pricing" },
  { label: "學員見證", href: "#cases" },
  { label: "常見問題", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" aria-label="主要導覽">
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between h-16">
        <a href="#" className="font-display text-foreground text-lg font-bold">
          AI 出書實戰班
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-foreground/70 hover:text-accent-gold text-base transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-accent-gold text-white font-bold text-base px-5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            立即報名
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="選單"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block font-body text-foreground/70 hover:text-accent-gold text-base py-3 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-accent-gold text-foreground font-bold text-base px-5 py-3 rounded text-center hover:opacity-90 transition-opacity"
          >
            立即報名
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
