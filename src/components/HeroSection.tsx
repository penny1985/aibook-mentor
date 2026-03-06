import heroImg from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-dark overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="AI 出書實戰班工作坊現場" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 via-surface-dark/40 to-surface-dark" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Top tag */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block border border-accent-red text-accent-red font-body text-xs tracking-[0.2em] uppercase px-4 py-2">
            4/11 台中 ｜ 4/12 高雄 ｜ 早鳥 3/28 截止
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-surface-dark-foreground text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          AI 出書實戰班
          <br />
          <span className="text-accent-red">6 週帶你從企劃到投稿</span>
        </h1>

        {/* Sub headline */}
        <p className="font-body text-surface-dark-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          30 年出版資歷的賈俊國總編 × AI 雙引擎 × 講師手把手陪跑
        </p>
        <p className="font-body text-surface-dark-foreground/60 text-base md:text-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          帶著一份可投遞的書籍企劃書離開，這個組合市面上找不到第二個
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div>
            <p className="text-surface-dark-foreground/60 font-body text-sm mb-2">👉 台中場 4/11</p>
            <div className="flex gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6cE" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-wide text-sm px-6 py-3 rounded transition-colors">
                工作坊＋陪跑 NT$16,800
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z5Z9" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body text-sm px-6 py-3 rounded transition-colors">
                工作坊 NT$7,500
              </a>
            </div>
          </div>
          <div>
            <p className="text-surface-dark-foreground/60 font-body text-sm mb-2">👉 高雄場 4/12</p>
            <div className="flex gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6dF" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-wide text-sm px-6 py-3 rounded transition-colors">
                工作坊＋陪跑 NT$16,800
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6a5" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body text-sm px-6 py-3 rounded transition-colors">
                工作坊 NT$7,500
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="flex flex-wrap gap-4 text-surface-dark-foreground/40 font-body text-xs tracking-widest uppercase animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span>工作坊限額 12-15 人</span>
          <span className="text-accent-red">陪跑限額 5 人</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
