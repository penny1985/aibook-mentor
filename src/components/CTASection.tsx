const CTASection = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.5] mb-6">
          你心裡那本書，<br />
          <span className="text-accent-gold">打算再等幾年？</span>
        </h2>

        <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-12">
          出書作者手把手陪跑，AI 幫你加速，資深總編幫你把關。做好心理準備，勇敢跨出第一步吧。
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center bg-accent-gold text-foreground hover:opacity-90 font-bold tracking-wide text-lg px-10 py-4 rounded transition-colors shadow-lg"
        >
          早鳥 3/28 截止
        </a>

        <div className="flex justify-center gap-4 mt-8">
          <a href="https://www.facebook.com/peiru1985" target="_blank" rel="noopener noreferrer"
            className="font-body text-muted-foreground text-base underline hover:text-accent-gold transition-colors">
            追蹤陳沛孺
          </a>
          <a href="https://lin.ee/l2TLUYQT" target="_blank" rel="noopener noreferrer"
            className="font-body text-muted-foreground text-base underline hover:text-accent-gold transition-colors">
            加入 LINE 好友
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
