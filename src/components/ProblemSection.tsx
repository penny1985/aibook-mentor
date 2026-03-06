import notebookImg from "@/assets/blank-notebook.jpg";

const ProblemSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Problem intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground leading-[1.4] mb-6">
              你心裡那本書，<br />
              <span className="text-accent-gold">卡了多久了</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              你心裡一直有一本書想寫。可能是十年教學經驗的總結，可能是一套獨家方法論，可能是一段值得被記錄的專業歷程。
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              但你遲遲沒有動筆——企劃書怎麼寫？投給哪家出版社？怎麼讓編輯願意打開你的信？光是這三個問題，就足以讓大部分人停在原地。
            </p>
          </div>
          <div className="relative">
            <img src={notebookImg} alt="空白筆記本" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Market reality */}
        <div className="border-l-4 border-accent-gold pl-8 mb-16">
          <h3 className="font-display text-3xl font-bold text-foreground mb-6">出版社現在在想什麼</h3>
          <div className="space-y-4 font-body text-muted-foreground text-base leading-relaxed">
            <p>
              台灣出版市場十五年來產值從 367 億腰斬到約 200 億。一般大眾書年銷量中位數只有 500 到 800 本，損益平衡點卻推升到 2,200 本。出版社每簽一本新書，有九成機率虧損。
            </p>
            <p>
              首刷量從三千本縮到一千兩百本，翻譯書持續壓縮本土作者的空間。793 家出版社裡，近九成集中在桃園以北。中南部的專業工作者想出書，先天就少了一層被看見的機會。
            </p>
            <p className="text-foreground font-semibold text-lg">
              所以出版社現在看的，除了你的稿子品質，更關鍵的是：<span className="text-accent-green">「你有沒有能力幫這本書賣」</span>
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-secondary rounded-lg p-8 md:p-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
            一天打底，<span className="text-accent-gold">六週修到可以投出去</span>
          </h3>
          <div className="space-y-4 font-body text-muted-foreground text-base leading-relaxed mb-8">
            <p><strong className="text-accent-gold">第一步</strong> — 一日工作坊，用 AI 雙引擎從零完成書籍企劃書初版</p>
            <p><strong className="text-accent-gold">第二步</strong> — 六週線上陪跑，Penny 帶你每週精修，從初版改到可投遞</p>
            <p><strong className="text-accent-gold">第三步</strong> — 總編會客室，30 年出版資歷的賈俊國總編親自回饋你的企劃書</p>
          </div>
          <p className="font-body text-muted-foreground text-base mb-8">
            你不需要先寫好稿子才來。你只需要帶著「心裡那本書的模糊輪廓」走進教室。
          </p>

          {/* Deliverables */}
          <div className="border-t border-border pt-8">
            <h4 className="font-display text-xl font-bold mb-4">六週結束時，你手上會有：</h4>
            <ul className="space-y-2 font-body text-muted-foreground text-base">
              <li className="flex items-start gap-3">
                <span className="text-accent-gold mt-1">●</span>
                一份經過總編親自回饋、修改過兩輪以上的完整書籍企劃書
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-gold mt-1">●</span>
                1-2 個試寫章節
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-gold mt-1">●</span>
                一封投稿信 + 適合你的出版社清單
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-gold mt-1">●</span>
                神秘小禮物
              </li>
            </ul>
          </div>

          <p className="font-body text-muted-foreground text-base mt-8">
            全程使用 Claude（結構思考與品質把關）+ Gemini（量產與市場對標）雙引擎，效率是傳統寫法的 3 到 5 倍。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
