const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground/70 py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-display text-surface-dark-foreground text-lg font-bold mb-3">AI 出書實戰班</h4>
            <p className="font-body text-sm leading-relaxed">
              出書作者陪跑 × AI 輔助 × 出版社資深總編審閱
            </p>
          </div>
          <div>
            <h4 className="font-body text-surface-dark-foreground text-base font-bold mb-3">快速連結</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#problem" className="hover:text-accent-gold transition-colors">課程介紹</a></li>
              <li><a href="#process" className="hover:text-accent-gold transition-colors">服務流程</a></li>
              <li><a href="#pricing" className="hover:text-accent-gold transition-colors">方案定價</a></li>
              <li><a href="#faq" className="hover:text-accent-gold transition-colors">常見問題</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-surface-dark-foreground text-base font-bold mb-3">聯繫我們</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="https://www.facebook.com/peiru1985" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
                  Facebook — 陳沛孺
                </a>
              </li>
              <li>
                <a href="https://lin.ee/l2TLUYQT" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
                  LINE 官方帳號
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-dark-foreground/10 pt-6 font-body text-sm text-surface-dark-foreground/40 flex flex-wrap justify-between gap-4">
          <span>© 2025 閱讀塗鴉實驗室. All rights reserved.</span>
          <span>主辦：閱讀塗鴉實驗室｜講師：陳沛孺 Penny</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
