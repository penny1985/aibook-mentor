import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroIllustration from "@/assets/hero-illustration.png";
import whyPublishNowImg from "@/assets/why-publish-now-v2.png";
import sixWeekOutcomeImg from "@/assets/six-week-outcome.png";
import publisherLossImg from "@/assets/publisher-loss-rate-user.png";
import workshopPhoto from "@/assets/workshop-photo.jpg";
import bookstoreImg from "@/assets/bookstore-display.jpg";

const ProblemSection = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <>
    <section className="bg-background py-20 md:py-28" aria-labelledby="problem-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Problem intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 id="problem-heading" className="font-display text-4xl md:text-5xl font-black text-foreground leading-[1.4] flex-1">
                你心裡那本書<br className="hidden md:inline" />
                <span className="text-accent-gold">卡了多久了？</span>
              </h2>
              <img
                src={heroIllustration}
                alt="拿著筆思考的女孩插畫"
                className="w-24 h-24 rounded-full object-cover shrink-0 md:hidden"
              />
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              你心裡一直有一本書想寫。可能是十年教學經驗的總結，可能是一套獨家方法論，可能是一段值得被記錄的專業歷程。
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              但你遲遲沒有動筆——企劃書怎麼寫？投給哪家出版社？怎麼讓編輯願意打開你的信？光是這三個問題，就足以讓大部分人停在原地。
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src={heroIllustration}
              alt="拿著筆思考的女孩插畫"
              className="w-56 md:w-72 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Why publish now — full-width white */}
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <img
          src={whyPublishNowImg}
          alt="為什麼現在出書，比任何時候都重要？AI 衝擊與轉型卡位"
          className="w-full max-w-2xl mx-auto rounded-lg"
        />
      </div>
    </section>

    {/* 傳統出版的書 */}
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="font-body text-muted-foreground text-lg leading-relaxed mb-16">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">傳統出版的書，依舊是一張社會證明</h3>
            <p className="text-muted-foreground/80 text-xl font-medium mb-8 text-center">證明這個人有料，證明這個議題有市場</p>
            <div className="rounded-lg overflow-hidden mb-6 max-w-2xl mx-auto">
              <img src={bookstoreImg} alt="書店暢銷書展示區，傳統出版書籍作為專業社會證明" className="w-full rounded-lg" />
            </div>
            <div className="space-y-6">
              <p>
                網路上寫文的人成千上萬，但能出書的有幾個？這個門檻，先天就能幫你在市場上站穩腳跟。
              </p>
              <p>
                曾經有個學員問我：「為什麼要出書？出書能幹嘛？」我說：<span className="text-accent-green font-semibold">「我出書，能讓你不會懷疑我的專業，還來上我的課。」</span>
              </p>
              <p>
                出書能協助你轉型、卡位、樹立專業形象。而在這個 AI 內容氾濫的時代，一本經過出版社篩選、編輯把關的實體書，反而成了最稀缺的信任貨幣。
              </p>
            </div>
          </div>

          <p className="text-foreground font-semibold text-xl mt-12">
            但更現實的是：就算你終於決定要寫了，出版社也未必買單。因為出版社也有現實考量。
          </p>
        </div>

        {/* Market reality */}
        <div className="border-l-4 border-accent-gold pl-8 mb-16 mt-20">
          <h3 id="publisher-reality" className="font-display text-4xl font-bold text-foreground mb-6">出版社現在要的是什麼？<span className="sr-only">素人投稿的現實</span></h3>
          {/* Publisher loss rate infographic */}
          <div className="my-8 rounded-lg overflow-hidden">
            <img
              src={publisherLossImg}
              alt="出版社每簽一本新書的虧損機率高達 90%，產值從 367 億腰斬到約 200 億，首刷量從三千本縮到一千兩百本"
              className="w-full"
            />
          </div>
          <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
            <p>
              一般大眾書年銷量中位數只有 500 到 800 本，損益平衡點卻推升到 2,200 本
            </p>
            <p>
              首刷量從三千本縮到一千兩百本，翻譯書持續壓縮本土作者的空間
            </p>
            <p className="text-foreground font-semibold text-xl">
              所以出版社現在看的，除了你的稿子品質，更關鍵的是這件事：<span className="text-accent-green">「你有沒有能力幫賣這本書？」</span>
            </p>
            <p>
              你需要一份讓出版社一看就想約你聊的企劃書。裡面要有市場定位、讀者輪廓、你的推廣能力證明
            </p>
          </div>
        </div>


        {/* Solution */}
        <div className="bg-secondary rounded-lg p-8 md:p-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            一天打底，<span className="text-accent-gold">六週修到符合業界標準</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p><strong className="text-accent-gold">第一步</strong> — 一日工作坊，用 AI 雙引擎從零完成書籍企劃書初版</p>
              <p><strong className="text-accent-gold">第二步</strong> — 六週線上陪跑，Penny 帶你每週精修，從初版改到符合出版社標準</p>
              <p><strong className="text-accent-gold">第三步</strong> — 總編會客室，30 年出版資歷的賈俊國總編親自回饋你的企劃書</p>
              <p className="mt-4">
                你不需要先寫好稿子才來。你只需要帶著「心裡那本書的模糊輪廓」走進教室。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={workshopPhoto} alt="陳沛孺 Penny 在台中 AI 出書實戰班工作坊帶領學員實作企劃書" className="w-full rounded-lg" />
            </div>
          </div>

          {/* Deliverables */}
          <div className="border-t border-border pt-8">
            <img
              src={sixWeekOutcomeImg}
              alt="六週結束時，你會有：完整書籍企劃書、試寫章節、投稿信與出版社清單、神秘小禮物"
              className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setZoomOpen(true)}
            />
            <p className="text-center text-muted-foreground/60 text-sm mt-2">點擊圖片放大檢視</p>
          </div>

          <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
            <DialogContent className="max-w-[95vw] md:max-w-4xl p-2">
              <img
                src={sixWeekOutcomeImg}
                alt="六週結束時，你會有：完整書籍企劃書、試寫章節、投稿信與出版社清單、神秘小禮物"
                className="w-full rounded-lg"
              />
            </DialogContent>
          </Dialog>

          <p className="font-body text-muted-foreground text-lg mt-8">
            全程使用 Claude（結構思考與品質把關）+ Gemini（量產與市場對標）雙引擎，效率是傳統寫法的 3 到 5 倍。
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProblemSection;
