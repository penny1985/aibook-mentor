const PricingSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-16 text-center leading-[1.4]">
          選擇最適合你的<span className="text-accent-green">方案</span>
        </h2>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Workshop only */}
          <div className="bg-white border border-border rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-display text-2xl font-bold mb-2">一日工作坊</h3>
              <p className="font-body text-accent-gold text-sm font-bold mb-2">優惠價</p>
              <div className="mb-6">
                <span className="font-display text-2xl text-muted-foreground mr-2">NT$8,800</span>
                <span className="font-display text-4xl font-black text-accent-green">NT$7,500</span>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="font-body text-foreground text-sm font-medium mb-3">課程內容</p>
                <ul className="space-y-3 font-body text-muted-foreground text-base flex-1">
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 一天走完選題到企劃書的完整流程</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 選題定位、目錄架構實作</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> AI 協作寫作、投稿策略教學</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 出版實戰經驗分享</li>
                </ul>
              </div>

              <p className="font-body text-muted-foreground text-sm mt-auto mb-2">適合想先試水溫的你</p>
              <p className="font-body text-accent-gold text-xs font-medium mb-6">💳 可分期付款</p>

              <a
                href="https://api.payuni.com.tw/api/uop/receive_info/2/1/FUNC94518350/WnILt26EDSYQ9a7aex4WI"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-accent-green text-white font-body font-bold py-3 px-4 hover:opacity-90 transition-opacity"
              >
                立即報名
              </a>
            </div>
          </div>

          {/* Full package - recommended */}
          <div className="bg-white border-2 border-accent rounded-lg overflow-hidden flex flex-col relative shadow-md">
            <span className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground font-body text-sm font-bold px-4 py-2 text-center">
              推薦方案
            </span>
            <div className="p-8 pt-14 flex-1 flex flex-col">
              <h3 className="font-display text-2xl font-bold mb-2">工作坊 + 6 週陪跑</h3>
              <p className="font-body text-accent-gold text-sm font-bold mb-2">合購優惠價</p>
              <div className="mb-6">
                <span className="font-display text-2xl text-muted-foreground mr-2">NT$20,000</span>
                <span className="font-display text-4xl font-black text-accent-green">NT$16,800</span>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="font-body text-foreground text-sm font-medium mb-3">完整內容</p>
                <ul className="space-y-3 font-body text-muted-foreground text-base flex-1">
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 一日工作坊（選題定位到企劃書架構）</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 出版實戰經驗分享</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 六週線上陪跑每週精修</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 總編企劃書審閱回饋</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> 總編會客室（線上 QA）</li>
                  <li className="flex items-start gap-2"><span className="text-accent-green">→</span> LINE 群組即時問答</li>
                </ul>
              </div>

              <p className="font-body text-accent-green text-sm font-bold mb-2 flex items-center gap-2">
                <span className="text-accent-gold">★</span> 陪跑限額 5 人，額滿不加開
              </p>
              <p className="font-body text-accent-gold text-xs font-medium mb-6">💳 可分期付款</p>

              <a
                href="https://api.payuni.com.tw/api/uop/receive_info/2/1/FUNC94518350/pdVY4NlhrK63OwIr6Wiv5"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-accent-green text-white font-body font-bold py-3 px-4 hover:opacity-90 transition-opacity mt-auto"
              >
                立即報名
              </a>
            </div>
          </div>
        </div>

        {/* Session info */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg border border-border p-6 shadow-sm text-center">
            <p className="font-display text-lg font-bold text-foreground mb-1">📅 4/12（日）10:00 - 17:00（含午休）</p>
            <p className="font-body text-muted-foreground text-base">線上進行（Zoom / Google Meet，報名後通知）</p>
          </div>
        </div>

        {/* Why full package — moved to bottom as closing note */}
        <div className="bg-white border border-border rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">為什麼推薦完整方案？</h3>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            一天工作坊完成的是企劃書「初版」。要讓它變成出版社願意看的版本，需要反覆修改、專業回饋、投稿策略。這些都在六週陪跑裡。只有完整方案包含總編會客室。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
