const PricingSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-16 text-center leading-[1.4]">
          方案與<span className="text-accent-green">定價</span>
        </h2>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {/* Workshop only */}
          <div className="border border-border rounded-lg p-8 flex flex-col">
            <h3 className="font-display text-2xl font-bold mb-2">一日工作坊</h3>
            <div className="mb-4">
              <span className="font-display text-4xl font-black text-foreground">NT$7,500</span>
              <span className="font-body text-muted-foreground text-base ml-2 line-through">NT$8,800</span>
            </div>
            <p className="font-body text-accent-gold text-sm font-medium mb-6">早鳥價 3/28 前</p>
            <ul className="space-y-3 font-body text-muted-foreground text-base flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 企劃書初版</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 選題定位表</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 章節開頭</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 投稿信範本</li>
            </ul>
            <p className="font-body text-muted-foreground text-sm">適合想先試水溫的你</p>
          </div>

          {/* Full package - recommended */}
          <div className="border-2 border-accent rounded-lg p-8 flex flex-col relative">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground font-body text-sm font-bold px-4 py-1 rounded">
              推薦
            </span>
            <h3 className="font-display text-2xl font-bold mb-2">工作坊 + 6 週陪跑</h3>
            <div className="mb-4">
              <span className="font-display text-4xl font-black text-foreground">NT$16,800</span>
              <span className="font-body text-muted-foreground text-base ml-2 line-through">NT$20,000</span>
            </div>
            <p className="font-body text-accent-gold text-sm font-medium mb-6">合購早鳥價</p>
            <ul className="space-y-3 font-body text-muted-foreground text-base flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 包含工作坊所有內容</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> 每週三線上精修</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">✓</span> LINE 群組隨時問答</li>
              <li className="flex items-start gap-2 font-medium text-foreground">
                <span className="text-accent-gold">★</span> 總編會客室（獨家）
              </li>
            </ul>
            <p className="font-body text-accent-green text-sm font-bold">陪跑限額 5 人，額滿不加開</p>
          </div>
        </div>

        {/* Why full package */}
        <div className="bg-secondary rounded-lg p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">為什麼推薦完整方案</h3>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            一天工作坊完成的是企劃書「初版」。要讓它變成出版社願意看的版本，需要反覆修改、專業回饋、投稿策略。這些都在六週陪跑裡。只有完整方案包含總編會客室。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
