import pennyImg from "@/assets/penny-chen.jpg";
import studentGroupImg from "@/assets/student-group-v2.jpg";

const cases = [
  { name: "陳顯立", title: "好廣告數據創辦人，《流量新紅利時代》《信任效應》（即將出版）作者", result: "用一本書打進台灣前 500 大企業，公司營收一年暴增一億。他說書是最能建立信任的「高級名片」。" },
  { name: "孫治華", title: "策略思維商學院院長，《百萬職業講師的商業策略》作者", result: "一本原本只是補充教材的書，轉化成行銷利器，帶來 80 位學員、400 萬營收。" },
  { name: "郭繐綺", title: "作文攻頂教練，《我人生的好運都因寫作而發生》作者", result: "一本書讓教學版圖從高雄拓展到全台，還因書結緣獲得親子天下「教育創新 100」金獎。" },
  { name: "林小印", title: "《財富自由的整理煉金術》《讓錢喜歡你的財富整理術》作者", result: "在寫作階段就為書埋下商業伏筆：同步重整網站、設計十多門課程、在章節裡嵌入 QR code。出版後工作型態從到府整理轉為在家遠端，書成了品牌生態系的核心。" },
];

const testimonials = [
  { name: "李Ｏ瑩", quote: "AI 是最懂你的執行者，但前提是，你必須先成為那個最懂如何表達自己的發起者。多虧了沛孺的零程式架站課，當天我就已經做出了個人網站的初稿。" },
  { name: "黃Ｏ鈞", quote: "沒有用艱澀難懂的工程師語言，而是用一個初學者角度來分享。符合你 80% 需求的網站就這樣快速做出來了。" },
  { name: "Inin老師", quote: "2021 就上過沛孺老師的圖文創作訓練營，看著她這幾年快速轉型。只用課程三個小時的時間，就架好當初我磨了將近一個月的網站首頁。" },
  { name: "賴Ｏ宏", quote: "用 AI 減少重複工作，用人心去創造無法複製的價值。" },
  { name: "曾Ｏ巽", quote: "以終為始：再漂亮的網站、再精美的文案，沒有成功讓用戶做出行動都是徒勞。老師持續用非常幽默且正向的方式帶領大家排除錯誤。" },
];

const CasesSection = () => {
  return (
    <section className="bg-background py-20 md:py-28" aria-labelledby="cases-heading">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 id="cases-heading" className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 text-center leading-[1.4]">
          他們出了書<span className="text-accent-green">之後</span>
        </h2>
        <p className="font-body text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-base">
          在《閱讀爆米花》Podcast 中，Penny 深度訪談了六位出過書的創業者與講師。每一位的版稅都只占收入的極小比例，真正的回報來自出書帶來的身份升級和商業轉換。
        </p>

        {/* YouTube embed */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.youtube.com/embed/8IUc5Bi4VtM"
              title="閱讀爆米花 Podcast"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://podcasts.apple.com/tw/podcast/%E9%96%B1%E8%AE%80%E7%88%86%E7%B1%B3%E8%8A%B1/id1831690831"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-accent-green text-base font-medium underline hover:text-accent-gold transition-colors"
            >
              🎧 想聽更多內容請到《閱讀爆米花》
            </a>
          </p>
        </div>

        {/* Case studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {cases.map((c, i) => (
            <div key={i} className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <div className="mb-3">
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <span className="font-body text-muted-foreground text-sm">{c.title}</span>
              </div>
              <p className="font-body text-muted-foreground text-base leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-accent-gold pl-6 mb-20 max-w-3xl mx-auto">
          <p className="font-display text-foreground text-xl font-bold leading-relaxed">
            他們都說同一件事：書帶來的真正回報，是它為你打開的那扇門。
          </p>
          <p className="font-body text-muted-foreground text-base mt-2">
            關鍵是：他們在企劃階段就想好了出書之後要做什麼。只是「寫一本書」，你得到一本書。「設計一本書」，你得到一整個商業生態系。
          </p>
        </blockquote>

        {/* Value reframe */}
        <div className="bg-accent-green rounded-lg py-16 px-8 md:px-12 mb-20 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-black text-white leading-[1.5] mb-6">
            這門課教你的，不只是寫一本書
          </h3>
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'hsl(35, 40%, 90%)' }}>
            市面上的出書課教你「怎麼寫」。這門課教你的是「怎麼用一本書重新定義你的商業模式」。從選題定位、AI 協作寫書、企劃書撰寫、到投稿策略，你帶走的是一套完整的出書商業系統。
          </p>
        </div>

        {/* Penny intro */}
        <div className="max-w-4xl mx-auto mb-20 bg-white border border-border rounded-lg p-8 md:p-10 shadow-sm">
          <h3 className="font-display text-3xl font-bold text-foreground mb-8">
            為什麼 Penny 能帶這門課
          </h3>
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="relative">
              <img src={pennyImg} alt="AI 出書實戰班講師陳沛孺 Penny，《用AI打造素人影響力》作者" className="w-full rounded-lg shadow-lg" loading="lazy" />
              <a
                href="https://www.books.com.tw/products/0011021616"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center font-body text-accent-green text-sm font-medium underline hover:text-accent-gold transition-colors"
              >
                📖《用AI打造素人影響力》→ 博客來
              </a>
            </div>
            <div>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                <strong className="text-foreground">陳沛孺 Penny</strong>，《用AI打造素人影響力》作者，2025 年 5 月出版。
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                她在 AI 浪潮中經歷了最戲劇性的轉型：原本靠知識圖文創作維生，AI 繪圖工具崛起後收入驟降。她選擇用 AI 重建整個事業，從「被 AI 取代的人」變成「教別人用 AI 的人」。
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                出書之後帶來的連鎖效應：企業內訓邀約、高雄師範大學講師資格、課程報名轉換率翻倍。書成了整個事業的轉捩點。
              </p>
              <p className="font-body text-foreground text-base font-medium">
                她懂寫作，也懂出版社的遊戲規則、企劃書怎麼寫才會被看到。
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-3xl font-bold text-foreground mb-8">
            上過 Penny 課的人<span className="text-accent-green">這樣說</span>
          </h3>
          <div className="rounded-lg overflow-hidden mb-10">
            <img src={studentGroupImg} alt="AI 出書實戰班學員課後合照，Penny 與學員在工作坊" className="w-full rounded-lg" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">「{t.quote}」</p>
                <p className="font-body text-foreground text-base font-medium">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
