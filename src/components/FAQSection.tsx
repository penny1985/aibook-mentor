import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "這門課適合誰？",
    a: "講師、顧問、教練（有十年以上實戰經驗，想把方法論系統化成一本書）；專業工作者（在某個領域深耕多年，想用一本書打開新的職涯可能性）；自媒體經營者（有內容產出習慣，想把碎片化的知識整合成完整作品）；創業者（想用一本書建立品牌信任，打進更高層級的商業合作機會）。"
  },
  {
    q: "這門課可能不適合你？",
    a: "期待 AI 幫你「代寫」整本書（核心觀點和專業洞察必須來自你）；還沒有任何想寫的主題方向（你至少要帶著一個模糊的念頭進來）；想學文學創作或小說寫作（這門課聚焦在商業類非虛構書籍）。"
  },
  {
    q: "我完全沒有寫作經驗，適合來嗎？",
    a: "適合。前提是你有某個領域的專業知識，想把它整理成書。寫作技巧可以透過 AI 輔助和課程教學補足，但你的專業洞察 AI 幫不了你。只要你有想寫的方向，就可以來。"
  },
  {
    q: "我需要先準備什麼嗎？",
    a: "帶一台筆電，確認有 Claude 和 Gemini 的帳號（免費版即可）。如果你已經有書的初步構想、目錄草稿、甚至部分稿件，歡迎帶來。完全沒有也可以，課程從選題定位開始帶。"
  },
  {
    q: "一天真的能完成企劃書嗎？",
    a: "可以。有 AI 雙引擎加速，加上 Penny 的企劃書架構模板，省去自己摸索結構的時間。過去學員在三個小時內就能從零架好網站首頁，一整天完成企劃書完全可行。"
  },
  {
    q: "課程用的 AI 工具需要付費嗎？",
    a: "Claude 和 Gemini 都有免費版可以使用。課程會示範免費版的操作方式。有付費版效率更高，但並非必要。"
  },
  {
    q: "陪跑班一定要搭配工作坊嗎？",
    a: "對，陪跑班必須搭配工作坊一起報名。工作坊那天完成企劃書初版，陪跑六週從這個基礎上精修。沒有初版就無法進入陪跑流程。"
  },
  {
    q: "我可以只報工作坊嗎？",
    a: "可以。工作坊結束時你會帶走企劃書初版、選題定位表、一個章節開頭和投稿信範本。單報工作坊完全沒問題。"
  },
  {
    q: "總編會客室是什麼形式？",
    a: "賈俊國總編會在陪跑期間安排一次線上統一 QA 時間，針對每位陪跑學員的企劃書給予文字版專業回饋。一對一的書面回饋，由 30 年資歷的出版社總編親自撰寫。"
  },
  {
    q: "我想出的是電子書或自出版，也適合嗎？",
    a: "課程核心是企劃書撰寫和選題定位，無論走傳統出版或自出版都用得上。投稿策略以傳統出版為主，但選題分析、讀者輪廓、AI 寫作流程都是通用的。"
  },
];

const FAQSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-16 text-center">
          常見<span className="text-accent-green">問題</span>
        </h2>

        <Accordion type="single" collapsible className="mb-16">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-display text-left text-lg font-bold text-foreground hover:no-underline hover:text-accent py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Refund policy */}
        <div className="bg-background rounded-lg p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">安心報名保障</h3>
          <ul className="space-y-2 font-body text-muted-foreground text-base">
            <li>→ 開課前十天（含）：可申請全額退費</li>
            <li>→ 開課前十天內：可將名額轉讓給他人</li>
            <li>→ 課程當天臨時無法出席：可加價轉至下一梯次（預計十月），但無法退費</li>
          </ul>
          <p className="font-body text-muted-foreground/60 text-sm mt-4">
            有任何問題歡迎透過 LINE 官方帳號詢問，工作日 24 小時內回覆。
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
