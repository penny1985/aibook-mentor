const PricingSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-16 text-center leading-[1.4]">
          方案與<span className="text-accent-green">定價</span>
        </h2>

        {/* Course info */}
        <div className="font-body text-base text-muted-foreground text-center mb-12 space-y-2">
          <p><span className="text-foreground font-medium">日期：</span>4/11（五）台中｜4/12（六）高雄</p>
          <p><span className="text-foreground font-medium">時間：</span>10:00 - 17:00（含午休）</p>
          <p><span className="text-foreground font-medium">台中場地：</span>Monospace（台灣大道二段 2 號 16F-2）<span className="text-accent-gold text-sm">（暫定）</span></p>
          <p><span className="text-foreground font-medium">高雄場地：</span>WEE 威易聯合辦公室（中正三路 55 號 27F）<span className="text-accent-gold text-sm">（暫定）</span></p>
        </div>

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
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 一天走完選題到企劃書的完整流程</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 選題定位、目錄架構實作</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> AI 協作寫作、投稿策略教學</li>
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
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 一日工作坊（選題定位到企劃書架構）</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 六週線上陪跑每週精修</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 總編企劃書審閱回饋</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 總編會客室（線上 QA）</li>
              <li className="flex items-start gap-2"><span className="text-accent-green">→</span> LINE 群組即時問答</li>
              <li className="flex items-start gap-2 font-medium text-foreground">
                <span className="text-accent-gold">★</span> 陪跑限額 5 人
              </li>
            </ul>
            <p className="font-body text-accent-green text-sm font-bold">陪跑限額 5 人，額滿不加開</p>
          </div>
        </div>

        {/* Why full package */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">為什麼推薦完整方案</h3>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            一天工作坊完成的是企劃書「初版」。要讓它變成出版社願意看的版本，需要反覆修改、專業回饋、投稿策略。這些都在六週陪跑裡。只有完整方案包含總編會客室。
          </p>
        </div>

        {/* Google Maps */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">場地位置</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-body text-foreground text-sm font-medium mb-2">📍 台中場：Monospace（暫定）</p>
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=Monospace+%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E5%8F%B0%E7%81%A3%E5%A4%A7%E9%81%93%E4%BA%8C%E6%AE%B52%E8%99%9F&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="台中場地 Monospace 地圖"
                />
              </div>
            </div>
            <div>
              <p className="font-body text-foreground text-sm font-medium mb-2">📍 高雄場：WEE 威易聯合辦公室（暫定）</p>
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=22.6273,120.2959+(WEE+%E5%A8%81%E6%98%93%E8%81%AF%E5%90%88%E8%BE%A6%E5%85%AC%E5%AE%A4)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="高雄場地 WEE 威易聯合辦公室地圖"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
