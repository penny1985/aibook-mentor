import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="AI 出書實戰班" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Top tag */}
        <div className="mb-8 animate-fade-in flex flex-wrap gap-3">
          <span className="inline-block bg-accent-gold text-foreground font-body text-base font-bold tracking-wide px-5 py-2 rounded">
            3/28 前早鳥優惠
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.5] mb-8 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
          AI 出書實戰班
          <br />
          <span className="text-accent-gold">6 週帶你從企劃到投稿</span>
        </h1>

        {/* Sub headline */}
        <p className="font-body text-white/90 text-xl md:text-2xl leading-relaxed max-w-2xl mb-4 animate-fade-in-up drop-shadow" style={{ animationDelay: '0.2s' }}>
          出書作者陪跑 × AI 輔助 × 出版社資深總編審閱
        </p>
        <p className="font-body text-white/75 text-lg md:text-xl mb-12 animate-fade-in-up drop-shadow" style={{ animationDelay: '0.3s' }}>
          讓你帶著一份可投遞的書籍企劃書離開
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#cta"
            className="inline-flex items-center justify-center bg-accent-gold text-foreground hover:opacity-90 font-bold tracking-wide text-lg px-8 py-4 rounded transition-colors shadow-lg">
            立即報名
          </a>
          <a href="#process"
            className="inline-flex items-center justify-center bg-white/20 backdrop-blur text-white hover:bg-white/30 font-body text-lg px-8 py-4 rounded transition-colors">
            了解課程內容
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
