import editorImg from "@/assets/editor-jia.jpg";

const ProcessSection = () => {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="process-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 id="process-heading" className="font-display text-4xl md:text-5xl font-black mb-16 text-center leading-[1.4]">
          AI 出書實戰班怎麼上？<span className="sr-only">完整課程流程</span><br />
          <span className="text-accent-gold">完整課程流程</span>
        </h2>

        {/* Workshop */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-accent text-accent-foreground font-body text-sm font-bold tracking-widest uppercase px-4 py-2">
              一日工作坊
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-8">
            {[
              { time: "10:00-11:30", title: "素人出書，到底在走一條什麼路", desc: "Penny 拆解自己從寫書到出版的完整歷程，破除「名人才能出書」的迷思。你會搞懂出版社的遊戲規則，知道他們在怕什麼、在找什麼。" },
              { time: "11:30-12:30", title: "你的書要解決誰的什麼問題", desc: "用 JTBD（用途理論）思維找到你的選題定位，搭配 AI 輔助分析目標讀者輪廓。完成「選題定位表」。" },
              { time: "12:30-13:30", title: "午休", desc: "" },
              { time: "13:30-15:00", title: "讓出版社一看就想約你聊", desc: "完整企劃書結構教學。用 Claude 做結構思考，用 Gemini 做市場對標，產出目錄架構、作者簡介、企劃緣起。整天最核心的實作段。" },
              { time: "15:15-16:30", title: "讓 AI 幫你寫出你的聲音", desc: "AI 協作寫書的正確方式：怎麼讓 AI 放大你的觀點，同時保留你的風格。包含 AI 品質檢視流程和雙引擎工作流。完成一個章節開頭。" },
              { time: "16:30-17:00", title: "QA與回饋", desc: "投稿策略、投稿信範本、一本書的裂變效應。以及陪跑方案說明。" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <span className="font-body text-accent-gold text-base font-medium pt-1">{item.time}</span>
                <div>
                  <h4 className="font-display text-xl font-bold mb-1">{item.title}</h4>
                  {item.desc && <p className="font-body text-muted-foreground text-lg leading-relaxed">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* 6-week coaching */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-accent text-accent-foreground font-body text-sm font-bold tracking-widest uppercase px-4 py-2">
              6 週線上陪跑
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="font-body text-muted-foreground text-lg mb-8">
            每週三線上精修（每次 60-90 分鐘）+ LINE 群組隨時問答（工作日 24 小時內回覆）
          </p>

          <div className="space-y-4">
            {[
              { week: "W1", task: "企劃書架構精修", output: "修改後的目錄 + 企劃緣起定稿" },
              { week: "W2", task: "試寫章節深度回饋", output: "完成 1-2 個試寫章節" },
              { week: "W3", task: "企劃書提交 + 專業回饋", output: "提交完整企劃書，收到賈俊國總編文字版專業回饋" },
              { week: "W4", task: "根據回饋修稿", output: "企劃書第二版" },
              { week: "W5", task: "投稿策略 + 投稿信", output: "完成投稿信 + 出版社清單" },
              { week: "W6", task: "結業 + 行動計畫", output: "一份完整可投遞的書籍企劃書" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-border pb-4">
                <span className="font-body text-accent-gold font-bold text-lg min-w-[40px]">{item.week}</span>
                <div className="flex-1">
                  <span className="font-body text-foreground font-medium text-lg">{item.task}</span>
                  <span className="font-body text-muted-foreground text-lg"> → {item.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editor highlight */}
        <div className="bg-background border-2 border-accent-gold rounded-lg p-8 md:p-12">
          <h3 className="font-display text-3xl font-bold mb-6 leading-[1.4]">
            陪跑班<span className="text-accent-gold">專屬好康：總編會客室</span>
          </h3>
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start mb-6">
            <div>
              <img src={editorImg} alt="布克文化總編輯賈俊國，30 年出版資歷，經手超過 500 本暢銷書" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
                <strong className="text-foreground">賈俊國（阿丹總編）</strong>：布克文化總編輯。出版經歷超過 30 年，經手超過 500 本暢銷書，累積銷售超過 1,000 萬冊。
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
                他是暢銷作家 PETER SU 第 3、4 本書的總編輯，也是《黃阿瑪後宮生活》系列的幕後推手。角落小夥伴、拉拉熊、水豚君等知名圖文出版品的企畫選書人。
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                著有《鬧笑話》《白癡定律》等書，目前持續在臉書「如何出版一本書」粉專分享實用的出書方法。
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <p className="font-body text-foreground text-lg font-medium leading-relaxed mb-3">
              陪跑班的總編參與包含兩件事：
            </p>
            <p className="font-body text-foreground text-lg leading-relaxed mb-2">
              <span className="text-accent-gold font-bold">①</span> 企劃書審閱回饋：總編會審閱你的企劃書並提供專業回饋，幫你看到自己看不到的盲點
            </p>
            <p className="font-body text-foreground text-lg leading-relaxed mb-4">
              <span className="text-accent-gold font-bold">②</span> 總編會客室：線上統一 QA 時間，你可以直接向總編提問關於出版的各種問題
            </p>
            <p className="font-body text-foreground text-lg leading-relaxed">
              你拿到的是業界最資深的眼睛幫你看過一遍。<span className="text-accent-gold font-bold">這份參與的含金量，外面花錢也買不到。</span>
            </p>
          </div>
          <p className="font-body text-accent-green text-lg font-bold mt-6">陪跑限額 5 人，額滿不加開</p>
          <p className="font-body text-muted-foreground text-sm mt-4">※ 講師將依據 AI 最新發展、保有調整課程內容之權利</p>
          <a href="https://facebook.com/daniel.editorinchief" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-4 font-body text-muted-foreground text-lg underline hover:text-accent-gold transition-colors">
            → 如何出版一本書（Facebook）
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
