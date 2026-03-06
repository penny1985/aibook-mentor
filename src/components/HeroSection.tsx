import heroImg from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-dark overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="AI 出書實戰班工作坊現場" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 via-surface-dark/40 to-surface-dark" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Top tag */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block border border-accent-gold text-accent-gold font-body text-sm tracking-[0.2em] uppercase px-4 py-2">
            4/11 台中 ｜ 4/12 高雄 ｜ 早鳥 3/28 截止
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-surface-dark-foreground text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          AI 出書實戰班
          <br />
          <span className="text-accent-gold">6 週帶你從企劃到投稿</span>
        </h1>

        {/* Sub headline */}
        <p className="font-body text-surface-dark-foreground/80 text-xl md:text-2xl leading-relaxed max-w-2xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          出書作者陪跑 × AI 輔助 × 出版社資深總編審閱
        </p>
        <p className="font-body text-surface-dark-foreground/60 text-lg md:text-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          帶著一份可投遞的書籍企劃書離開，這個組合市面上找不到第二個
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div>
            <p className="text-surface-dark-foreground/60 font-body text-base mb-2">👉 台中場 4/11</p>
            <div className="flex gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6cE" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-gold text-foreground hover:opacity-90 font-bold tracking-wide text-base px-6 py-3 rounded transition-colors">
                工作坊＋陪跑
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z5Z9" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-foreground font-body text-base px-6 py-3 rounded transition-colors">
                一日工作坊
              </a>
            </div>
          </div>
          <div>
            <p className="text-surface-dark-foreground/60 font-body text-base mb-2">👉 高雄場 4/12</p>
            <div className="flex gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6dF" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-gold text-foreground hover:opacity-90 font-bold tracking-wide text-base px-6 py-3 rounded transition-colors">
                工作坊＋陪跑
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6a5" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-foreground font-body text-base px-6 py-3 rounded transition-colors">
                一日工作坊
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="flex flex-wrap gap-4 text-surface-dark-foreground/40 font-body text-sm tracking-widest uppercase animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span>台中 ＆ 高雄</span>
          <span className="text-accent-gold">早鳥優惠 3/28 截止</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
