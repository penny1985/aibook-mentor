const PricingSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-16 text-center">
          方案與<span className="text-accent-red">定價</span>
        </h2>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Workshop only */}
          <div className="border border-border rounded p-8 flex flex-col">
            <h3 className="font-display text-xl font-bold mb-2">一日工作坊</h3>
            <div className="mb-4">
              <span className="font-display text-3xl font-black text-foreground">NT$7,500</span>
              <span className="font-body text-muted-foreground text-sm ml-2 line-through">NT$8,800</span>
            </div>
            <p className="font-body text-accent-red text-xs font-medium mb-6">早鳥價 3/28 前</p>
            <ul className="space-y-3 font-body text-muted-foreground text-sm flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 企劃書初版</li>
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 選題定位表</li>
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 章節開頭</li>
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 投稿信範本</li>
            </ul>
            <p className="font-body text-muted-foreground text-xs">適合想先試水溫的你</p>
          </div>

          {/* Full package - recommended */}
          <div className="border-2 border-accent rounded p-8 flex flex-col relative">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground font-body text-xs font-bold px-3 py-1 rounded">
              推薦
            </span>
            <h3 className="font-display text-xl font-bold mb-2">工作坊 + 6 週陪跑</h3>
            <div className="mb-4">
              <span className="font-display text-3xl font-black text-foreground">NT$16,800</span>
              <span className="font-body text-muted-foreground text-sm ml-2 line-through">NT$20,000</span>
            </div>
            <p className="font-body text-accent-red text-xs font-medium mb-6">合購價，開課當天前</p>
            <ul className="space-y-3 font-body text-muted-foreground text-sm flex-1 mb-8">
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 包含工作坊所有內容</li>
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> 每週三線上精修</li>
              <li className="flex items-start gap-2"><span className="text-accent-red">✓</span> LINE 群組隨時問答</li>
              <li className="flex items-start gap-2 font-medium text-foreground">
                <span className="text-accent-red">★</span> 總編會客室（獨家）
              </li>
            </ul>
            <p className="font-body text-accent-red text-xs font-bold">陪跑限額 5 人，額滿不加開</p>
          </div>

          {/* Coaching only */}
          <div className="border border-border rounded p-8 flex flex-col">
            <h3 className="font-display text-xl font-bold mb-2">6 週陪跑</h3>
            <div className="mb-4">
              <span className="font-display text-3xl font-black text-foreground">NT$9,800</span>
              <span className="font-body text-muted-foreground text-sm ml-2 line-through">NT$12,800</span>
            </div>
            <p className="font-body text-accent-red text-xs font-medium mb-6">早鳥價，開課當天前</p>
            <p className="font-body text-muted-foreground text-sm flex-1">可單獨購買，需已有企劃書初版基礎</p>
          </div>
        </div>

        {/* Why full package */}
        <div className="bg-secondary rounded p-8 mb-12">
          <h3 className="font-display text-lg font-bold text-foreground mb-3">為什麼推薦完整方案</h3>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            一天工作坊完成的是企劃書「初版」。要讓它變成出版社願意看的版本，需要反覆修改、專業回饋、投稿策略。這些都在六週陪跑裡。只有完整方案包含總編會客室，這個權益不單賣。
          </p>
        </div>

        {/* Bonus */}
        <div className="border-l-4 border-accent-red pl-8">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">報名即贈：AI 出書工具包</h3>
          <ul className="space-y-2 font-body text-muted-foreground text-sm">
            <li>● 選題定位 Prompt 模板：快速釐清書的市場定位和讀者輪廓</li>
            <li>● 企劃書撰寫 Skill：輸入你的資料，AI 自動產出企劃書初稿架構</li>
            <li>● AI 品質檢視 Prompt：讓 AI 幫你抓出邏輯漏洞、論述薄弱處</li>
            <li>● 投稿信範本 + 出版社對照表：離開教室就能寄出去</li>
          </ul>
          <p className="font-body text-muted-foreground/60 text-xs mt-4">工具包在課前寄出，你可以先熟悉流程，上課當天直接進入實作。</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
