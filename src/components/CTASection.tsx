import bookProposalImg from "@/assets/book-proposal.jpg";

const CTASection = () => {
  return (
    <section className="relative bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.5] mb-6">
            你心裡那本書，<br />
            <span className="text-accent-gold">打算再等幾年</span>
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              出版社越來越保守，本土作者的空間正在被壓縮。但讀者還在，市場的結構正在重新洗牌。
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              現在有 AI 幫你加速，有講師帶你六週精修，有 30 年資歷的總編親自回饋你的企劃書。<br />
              <strong className="text-foreground">這個組合，市面上找不到第二個。</strong>
            </p>
          </div>

          {/* Key info */}
          <div className="flex justify-center mb-12 font-body text-base">
            <span className="bg-accent text-accent-foreground px-6 py-3 rounded font-bold text-lg">早鳥 3/28 截止</span>
          </div>

          {/* CTA buttons */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div>
              <p className="font-body text-muted-foreground text-base mb-3">👉 台中場 4/11</p>
              <div className="flex flex-col gap-3">
                <a href="https://cart.cashier.ecpay.com.tw/qp/z6cE" target="_blank" rel="noopener noreferrer"
                  className="block bg-accent-gold text-foreground hover:opacity-90 font-bold text-base px-6 py-4 rounded transition-colors text-center">
                  工作坊＋陪跑 NT$16,800 <span className="line-through opacity-60 ml-1">NT$20,000</span>
                </a>
                <a href="https://cart.cashier.ecpay.com.tw/qp/z5Z9" target="_blank" rel="noopener noreferrer"
                  className="block border border-border text-foreground hover:border-accent-gold hover:text-accent-gold font-body text-base px-6 py-4 rounded transition-colors text-center">
                  一日工作坊 NT$7,500 <span className="line-through opacity-60 ml-1">NT$8,800</span>
                </a>
              </div>
            </div>
            <div>
              <p className="font-body text-muted-foreground text-base mb-3">👉 高雄場 4/12</p>
              <div className="flex flex-col gap-3">
                <a href="https://cart.cashier.ecpay.com.tw/qp/z6dF" target="_blank" rel="noopener noreferrer"
                  className="block bg-accent-gold text-foreground hover:opacity-90 font-bold text-base px-6 py-4 rounded transition-colors text-center">
                  工作坊＋陪跑 NT$16,800 <span className="line-through opacity-60 ml-1">NT$20,000</span>
                </a>
                <a href="https://cart.cashier.ecpay.com.tw/qp/z6a5" target="_blank" rel="noopener noreferrer"
                  className="block border border-border text-foreground hover:border-accent-gold hover:text-accent-gold font-body text-base px-6 py-4 rounded transition-colors text-center">
                  一日工作坊 NT$7,500 <span className="line-through opacity-60 ml-1">NT$8,800</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Course info + Maps */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">課程資訊</h3>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div className="font-body text-base text-muted-foreground">
              <p className="mb-2"><span className="text-foreground font-medium">課程：</span>AI 出書實戰班</p>
              <p className="mb-2"><span className="text-foreground font-medium">日期：</span>4/11（五）台中｜4/12（六）高雄</p>
              <p className="mb-2"><span className="text-foreground font-medium">時間：</span>10:00 - 17:00（含午休）</p>
              <p className="mb-2"><span className="text-foreground font-medium">主辦：</span>閱讀塗鴉實驗室</p>
              <p className="mb-2"><span className="text-foreground font-medium">講師：</span>陳沛孺 Penny</p>
            </div>
            <div className="font-body text-base text-muted-foreground">
              <p className="mb-2"><span className="text-foreground font-medium">台中場地：</span>Monospace（台灣大道二段 2 號 16F-2）<span className="text-accent-gold text-sm">（暫定）</span></p>
              <p className="mb-2"><span className="text-foreground font-medium">高雄場地：</span>WEE 威易聯合辦公室（中正三路 55 號 27F）<span className="text-accent-gold text-sm">（暫定）</span></p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="font-body text-foreground text-sm font-medium mb-2">📍 台中場：Monospace（暫定）</p>
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5!2d120.6843!3d24.1516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d640a6e0cc1%3A0x73a8a8e1d4d0d3c6!2sMonospace!5e0!3m2!1szh-TW!2stw!4v1700000000000"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d120.3010!3d22.6273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04f1db8c3c3d%3A0x1234567890abcdef!2z6auY6ZuE5biC5Lit5q2j5LiJ6Lev55S1NTXomZ8!5e0!3m2!1szh-TW!2stw!4v1700000000000"
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

          <div className="flex gap-4">
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
      </div>
    </section>
  );
};

export default CTASection;
