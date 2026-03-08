import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Book image positioned on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden md:block">
        <img
          src={heroBanner}
          alt="AI 出書實戰班 — 翻開的書本"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Instructor name */}
        <p className="font-body text-accent-gold text-base md:text-lg font-bold tracking-[0.2em] mb-6 animate-fade-in">
          陳沛孺 PENNY
        </p>

        {/* Main headline */}
        <h1 className="font-display text-foreground text-5xl md:text-6xl lg:text-7xl font-black leading-[1.5] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          AI 出書實戰班
        </h1>

        {/* Sub headline - italic style */}
        <p className="font-display text-accent-gold text-2xl md:text-3xl lg:text-4xl leading-[1.5] max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          6 週帶你從企劃到投稿，並由總編親自回饋
        </p>

        {/* Description */}
        <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          出書作者手把手陪跑 × AI 協作方法 × 資深總編親自審閱
        </p>

        {/* Info tags */}
        <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="inline-flex items-center border border-border font-body text-foreground text-base px-5 py-3 rounded">
            4/11（五）台中
          </span>
          <span className="inline-flex items-center border border-border font-body text-foreground text-base px-5 py-3 rounded">
            4/12（六）高雄
          </span>
          <span className="inline-flex items-center border border-border font-body text-foreground text-base px-5 py-3 rounded">
            陪跑限額 5 人
          </span>
        </div>

        <div className="mt-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#pricing"
            className="inline-flex items-center border border-border font-body text-foreground text-base px-5 py-3 rounded hover:border-accent-gold hover:text-accent-gold transition-colors"
          >
            早鳥 3/28 截止
          </a>
        </div>
      </div>

      {/* Mobile: show book image below text */}
      <div className="md:hidden w-full px-6 pb-12">
        <img
          src={heroBanner}
          alt="AI 出書實戰班 — 翻開的書本"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
