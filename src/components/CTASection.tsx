import bookProposalImg from "@/assets/book-proposal.jpg";

const CTASection = () => {
  return (
    <section className="relative bg-surface-dark text-surface-dark-foreground py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bookProposalImg} alt="書籍企劃書" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
          你心裡那本書，<br />
          <span className="text-accent-red">打算再等幾年</span>
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="font-body text-surface-dark-foreground/70 leading-relaxed mb-4">
            出版社越來越保守，本土作者的空間正在被壓縮。但讀者還在，市場的結構正在重新洗牌。
          </p>
          <p className="font-body text-surface-dark-foreground/70 leading-relaxed">
            現在有 AI 幫你加速，有講師帶你六週精修，有 30 年資歷的總編親自回饋你的企劃書。<br />
            <strong className="text-surface-dark-foreground">這個組合，市面上找不到第二個。</strong>
          </p>
        </div>

        {/* Key info */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 font-body text-sm">
          <span className="border border-accent-red text-accent-red px-4 py-2">4/11（五）台中</span>
          <span className="border border-accent-red text-accent-red px-4 py-2">4/12（六）高雄</span>
          <span className="bg-accent text-accent-foreground px-4 py-2 font-bold">早鳥 3/28 截止</span>
        </div>

        {/* CTA buttons */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          <div>
            <p className="font-body text-surface-dark-foreground/50 text-sm mb-3">👉 台中場 4/11</p>
            <div className="flex flex-col gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6cE" target="_blank" rel="noopener noreferrer"
                className="block bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm px-6 py-4 rounded transition-colors text-center">
                工作坊＋陪跑 NT$16,800
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z5Z9" target="_blank" rel="noopener noreferrer"
                className="block border border-surface-dark-foreground/30 text-surface-dark-foreground hover:border-accent hover:text-accent font-body text-sm px-6 py-4 rounded transition-colors text-center">
                一日工作坊 NT$7,500
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-surface-dark-foreground/50 text-sm mb-3">👉 高雄場 4/12</p>
            <div className="flex flex-col gap-3">
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6dF" target="_blank" rel="noopener noreferrer"
                className="block bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm px-6 py-4 rounded transition-colors text-center">
                工作坊＋陪跑 NT$16,800
              </a>
              <a href="https://cart.cashier.ecpay.com.tw/qp/z6a5" target="_blank" rel="noopener noreferrer"
                className="block border border-surface-dark-foreground/30 text-surface-dark-foreground hover:border-accent hover:text-accent font-body text-sm px-6 py-4 rounded transition-colors text-center">
                一日工作坊 NT$7,500
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-surface-dark-foreground/40 font-body text-xs tracking-widest">
          <span>工作坊限額 12-15 人</span>
          <span className="text-accent-red">陪跑限額 5 人</span>
        </div>

        {/* Course info */}
        <div className="mt-20 border-t border-surface-dark-foreground/10 pt-12 text-left max-w-2xl mx-auto">
          <h3 className="font-display text-lg font-bold mb-6">課程資訊</h3>
          <div className="grid sm:grid-cols-2 gap-4 font-body text-sm text-surface-dark-foreground/60">
            <div>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">課程：</span>AI 出書實戰班</p>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">日期：</span>4/11（五）台中｜4/12（六）高雄</p>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">時間：</span>10:00 - 17:00（含午休）</p>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">主辦：</span>閱讀塗鴉實驗室</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">台中場地：</span>Monospace（台灣大道二段 2 號 16F-2）</p>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">高雄場地：</span>WEE 威易聯合辦公室（中正三路 55 號 27F）</p>
              <p className="mb-2"><span className="text-surface-dark-foreground/40">講師：</span>陳沛孺 Penny</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/peiru1985" target="_blank" rel="noopener noreferrer"
              className="font-body text-surface-dark-foreground/50 text-sm underline hover:text-accent-red transition-colors">
              追蹤陳沛孺
            </a>
            <a href="https://lin.ee/l2TLUYQT" target="_blank" rel="noopener noreferrer"
              className="font-body text-surface-dark-foreground/50 text-sm underline hover:text-accent-red transition-colors">
              加入 LINE 好友
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
