import Image from "next/image";
import Header from "./components/Header";
import ScrollObserver from "./components/ScrollObserver";

const LINE_URL = "#"; // 受領後に差し替え
const IG_URL = "#";   // 受領後に差し替え

export default function Home() {
  return (
    <>
      <Header />
      <ScrollObserver />
      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="relative min-h-[100svh] flex items-end overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="上田 陣義"
            fill
            className="object-cover object-[center_20%] sm:object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent hidden lg:block" />

          <div className="relative z-10 w-full pb-10 sm:pb-14 pt-32">
            <div className="container text-left">
              {/* ラベル */}
              <p className="t-label mb-5">JM Group Representative</p>

              {/* 名前 */}
              <h1 className="text-white text-[44px] sm:text-[60px] md:text-[80px] font-bold leading-[1.05] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                上田 陣義
              </h1>
              <p className="text-white/40 text-[15px] sm:text-[17px] tracking-[0.15em] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Jingi Ueda
              </p>

              {/* 肩書き */}
              <p className="text-[var(--color-gold)] text-[13px] sm:text-[14px] font-medium tracking-wide mb-8">
                パーソナルトレーナー / フィジーク競技者 / スーツテーラー
              </p>

              {/* リード文 */}
              <p className="text-white/35 text-[13px] sm:text-[14px] leading-relaxed max-w-lg mb-10">
                愛媛から上京し、某大手フィットネスクラブ内パーソナル全店No.1の実績を築いた成り上がりトレーナー。
                運動・健康・外見・マインドを通じて「人生のパフォーマンスを最大化する」をミッションに4事業を展開。
              </p>

              {/* 数値 */}
              <div className="flex items-end gap-10 sm:gap-14 mb-10">
                {[
                  { val: "No.1", label: "全店トップセールス" },
                  { val: "8", unit: "年", label: "業界キャリア" },
                  { val: "4", unit: "事業", label: "展開中" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="t-stat">
                      {s.val}
                      {s.unit && <span className="text-[0.4em] text-white/25 ml-0.5">{s.unit}</span>}
                    </p>
                    <p className="text-white/25 text-[10px] tracking-[0.12em] uppercase mt-2">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#about" className="btn-gold">View Portfolio</a>
                <a href="#contact" className="btn-outline">Contact</a>
              </div>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section id="about" className="sec-cream">
          <div className="container">
            {/* 見出し */}
            <div className="fade-up mb-16 text-center">
              <p className="t-label mb-4">Our Story</p>
              <h2 className="t-jp-heading">
                愛媛から東京へ。<br />
                <span className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>ゼロから全てを掴み取る</span>
              </h2>
            </div>

            {/* メインコンテンツ: PC横並び、SP縦 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">
              {/* 写真 */}
              <div className="fade-up order-1 lg:order-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                  <Image src="/images/competition.jpg" alt="フィジーク大会での上田陣義" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>
              </div>

              {/* テキスト */}
              <div className="fade-up order-2 lg:order-1 text-left">
                <p className="t-body mb-6">
                  愛媛県出身。地方から単身上京し、中四国大手フィットネスクラブでキャリアをスタートし、都内某大手フィットネスクラブに上京し転職。転職後は物販売上全社No.1、全店No.1セールス、最年少リーダーと次々に結果を出し続けた。
                </p>
                <p className="t-body mb-10">
                  2026年、満を持して独立。パーソナルジム、オーダースーツ、ウェルネスコミュニティ、そして同じ愛媛出身の挑戦者を支援するコミュニティと、4つの事業を同時展開。
                </p>

                {/* 資格バッジ */}
                <div className="flex flex-wrap gap-2">
                  {["NESTA-PFT認定", "全店No.1セールス", "最年少リーダー", "フィジーク大会3位"].map((t) => (
                    <span key={t} className="text-[11px] tracking-wide text-[var(--color-text-light)] border border-black/10 rounded-full px-4 py-1.5">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3つのストーリーブロック */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { num: "01", title: "愛媛から、\nゼロからのスタート", body: "愛媛県で中四国大手のフィットネスクラブに入社。トレーナーとしての基礎を叩き込み、2020年に単身上京。都内某大手フィットネスクラブへ転職した。" },
                { num: "02", title: "圧倒的な結果で、\n全てを証明する", body: "都内大手フィットネスクラブパーソナルトレーナーへ転身後、物販売上全社No.1を達成。さらに全店No.1セールス、社内最年少リーダーへ。周囲の期待を超える実績で、自分の価値を証明し続けた。" },
                { num: "03", title: "独立。4つの事業で\n人生を変える", body: "2026年、JM GROUPとして独立。かつての自分のように地方から挑戦する人を全力で支えるために、4事業を同時展開。" },
              ].map((s) => (
                <div key={s.num} className="fade-up">
                  <p className="text-[var(--color-gold)] text-[11px] tracking-[0.2em] font-semibold mb-4">{s.num}</p>
                  <h3 className="text-[17px] font-semibold mb-3 leading-snug whitespace-pre-line" style={{ fontFamily: "var(--font-jp)" }}>{s.title}</h3>
                  <p className="t-body text-[14px]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CAREER TIMELINE ══════════ */}
        <section id="career" className="sec-dark">
          <div className="container">
            <div className="fade-up text-center mb-16">
              <p className="t-label mb-4">Track Record</p>
              <h2 className="t-section text-white">Career</h2>
            </div>

            <div className="max-w-[860px] mx-auto">
              {[
                { year: "2026", title: "JM GROUP として独立", desc: "パーソナルジム、オーダースーツ、ウェルネスコミュニティ、挑戦者コミュニティの4事業を同時展開。", highlight: true },
                { year: "2024", title: "最年少リーダー就任 / フィジーク3位入賞", desc: "社内最年少でリーダー職に就任。フィジーク東京大会では最多出場人数の中3位入賞を果たし、自身の身体で結果を証明。", highlight: false },
                { year: "2023", title: "全店No.1セールス達成", desc: "全店舗でトップセールスを達成。圧倒的な結果で自分の価値を証明し続けた。", highlight: false },
                { year: "2021", title: "物販売上 全社No.1", desc: "物販部門で全社トップの売上を記録。営業力とトレーナーとしての信頼の両立を実現。", highlight: false },
                { year: "2020", title: "上京・都内大手フィットネスクラブへ転職", desc: "上京し、都内某大手フィットネスクラブのパーソナルトレーナーへ転身。科学的アプローチで指導力を磨く。", highlight: false },
                { year: "2018", title: "中四国大手フィットネスクラブ入社", desc: "愛媛で就職し中四国大手のフィットネスクラブにてキャリアをスタート。トレーナーとしての基礎を築く。", highlight: false },
              ].map((item, i) => (
                <div key={i} className="fade-up flex gap-6 sm:gap-10 mb-8 last:mb-0">
                  {/* 年 */}
                  <div className="shrink-0 w-[72px] sm:w-[88px] text-right pt-1">
                    <p className={`text-[20px] sm:text-[24px] font-light tracking-wider ${item.highlight ? "text-[var(--color-gold)]" : "text-white/20"}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {item.year}
                    </p>
                  </div>
                  {/* ドット + ライン */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-[10px] h-[10px] rounded-full mt-2 ${item.highlight ? "bg-[var(--color-gold)] shadow-[0_0_0_3px_rgba(196,162,101,0.2)]" : "bg-white/15 border border-white/10"}`} />
                    {i < 5 && <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-1" />}
                  </div>
                  {/* カード */}
                  <div className={`flex-1 pb-8 ${item.highlight ? "" : ""}`}>
                    <h3 className="text-white text-[15px] sm:text-[16px] font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-white/35 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BUSINESS ══════════ */}
        <section id="business" className="sec-cream">
          <div className="container">
            <div className="fade-up text-center mb-16">
              <p className="t-label mb-4">Pillars of Excellence</p>
              <h2 className="t-section text-[var(--color-text)]">Business</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: "APEX PERSONAL GYM", sub: "パーソナルジム", desc: "完全個室・全店No.1トレーナーが導くオーダーメイドボディメイク。ダイエット、筋肥大、姿勢改善、大会サポートまで。", img: "/images/gym.jpg", tags: ["完全個室", "恵比寿"], href: "https://apex-gym-lp.vercel.app/", live: true },
                { title: "ORDER SUIT", sub: "オーダースーツ", desc: "営業マンたちの戦闘服を仕立てる。トレーナー視点の採寸×生地選定×スタイリング提案。鍛え上げた身体が最も美しく見えるスーツを設計。", img: "/images/suit.jpg", tags: ["生地選定", "スタイリング", "採寸"], href: "https://jm-tailor.vercel.app/", live: true },
                { title: "WELLNESS COMMUNITY", sub: "ウェルネスコミュニティ", desc: "皇居ランなどの運動イベント企画・ウェルネス交流会運営。健康を軸にした繋がりの場を創る。", img: "/images/community.jpg", tags: ["皇居ラン", "交流イベント", "運動習慣"], href: "#", live: false },
                { title: "JM REVOLT", sub: "挑戦者コミュニティ", desc: "愛媛をはじめ地方から上京する挑戦者を支援。自身の経験を活かし、住居・仕事・人脈づくりをサポート。", img: "/images/challenger.jpg", tags: ["上京支援", "愛媛出身", "人脈づくり"], href: "#", live: false },
              ].map((b, i) => {
                const content = (
                  <div className={`card-dark ${b.live ? "group cursor-pointer" : ""} relative h-[300px] sm:h-[360px] flex flex-col justify-end`}>
                    <Image src={b.img} alt={b.title} fill className={`object-cover ${b.live ? "opacity-20 group-hover:opacity-30" : "opacity-15"} transition-opacity duration-500`} sizes="(max-width:768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />

                    {/* Coming Soon バッジ */}
                    {!b.live && <div className="absolute top-5 right-5 z-10 text-[9px] text-white/20 border border-white/8 rounded-full px-3 py-1 tracking-wider">Coming Soon</div>}

                    <div className="relative z-10 p-7 sm:p-9 text-left">
                      <p className="text-[var(--color-gold)] text-[10px] tracking-[0.2em] uppercase mb-2">{b.sub}</p>
                      <h3 className={`text-white text-[20px] sm:text-[24px] font-semibold mb-2 ${b.live ? "group-hover:text-[var(--color-gold-light)]" : ""} transition-colors`} style={{ fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                      <p className="text-white/35 text-[13px] leading-relaxed mb-4 max-w-sm">{b.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {b.tags.map((t) => <span key={t} className="text-[9px] text-white/30 border border-white/8 rounded-full px-3 py-1">{t}</span>)}
                      </div>
                      {b.live && (
                        <span className="inline-flex items-center gap-2 text-[var(--color-gold)] text-[10px] tracking-[0.15em] uppercase mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Site
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" /></svg>
                        </span>
                      )}
                    </div>
                  </div>
                );
                return b.live ? (
                  <a key={i} href={b.href} target="_blank" rel="noopener noreferrer" className="fade-up block">{content}</a>
                ) : (
                  <div key={i} className="fade-up">{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section className="sec-dark">
          <div className="container">
            <div className="fade-up text-center mb-16">
              <p className="t-label mb-4">What I Offer</p>
              <h2 className="t-section text-white mb-4">Services</h2>
              <p className="t-body-d max-w-xl mx-auto">個人のお客様に直接ご提供できるメニューです。</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { title: "パーソナルトレーニング", desc: "ダイエット・筋肥大・姿勢改善", img: "/images/svc-training.jpg" },
                { title: "フィジーク大会サポート", desc: "減量設計・ポージング指導", img: "/images/svc-physique.jpg" },
                { title: "ゴルフコンディショニング", desc: "飛距離アップ・スイング安定化", img: "/images/svc-golf.jpg" },
                { title: "野球パフォーマンス", desc: "投球・打撃の動作改善", img: "/images/svc-baseball.jpg" },
                { title: "オーダースーツ", desc: "身体が映える一着を設計", img: "/images/suit.jpg" },
                { title: "ウェルネスイベント", desc: "皇居ラン・交流会の企画運営", img: "/images/svc-wellness.jpg" },
              ].map((s, i) => (
                <div key={i} className="fade-up relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-xl group">
                  <Image src={s.img} alt={s.title} fill className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-600" sizes="(max-width:768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-left">
                    <h3 className="text-white text-[13px] sm:text-[15px] font-semibold mb-0.5">{s.title}</h3>
                    <p className="text-white/40 text-[11px] sm:text-[12px]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ GALLERY ══════════ */}
        <section id="gallery" className="sec-dark" style={{ paddingTop: 0 }}>
          <div className="container-wide">
            <div className="fade-up text-center mb-12">
              <p className="t-label mb-4">Visual Journal</p>
              <h2 className="t-jp-heading text-white">
                活動の瞬間に宿る、<span className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>確信と情熱</span>
              </h2>
            </div>

            <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { src: "/images/gal-1.jpg", alt: "トレーニング風景" },
                { src: "/images/gal-2.jpg", alt: "ダンベルカール" },
                { src: "/images/gal-3.jpg", alt: "ジム内装" },
                { src: "/images/gal-4.jpg", alt: "フィットネス" },
                { src: "/images/gal-5.jpg", alt: "ストレッチ" },
                { src: "/images/gal-6.jpg", alt: "トレーニング指導" },
                { src: "/images/gal-7.jpg", alt: "ワークアウト" },
                { src: "/images/gal-8.jpg", alt: "ウェルネス" },
              ].map((img, n) => (
                <div key={n} className="gallery-item">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:767px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="sec-cream">
          <div className="container text-center">
            <div className="fade-up mb-12">
              <p className="t-label mb-4">Get in Touch</p>
              <h2 className="t-jp-heading text-[var(--color-text)]">お問い合わせ</h2>
            </div>

            <p className="fade-up t-body max-w-lg mx-auto mb-8">
              トレーニング、大会サポート、オーダースーツなど、<br className="hidden sm:inline" />
              お気軽にご相談ください。
            </p>

            <div className="fade-up flex flex-wrap justify-center gap-2 mb-10">
              {["東京（板橋・恵比寿）", "都内レンタルジム", "愛媛県", "オンライン対応"].map((a) => (
                <span key={a} className="text-[11px] text-[var(--color-text-light)] border border-black/8 rounded-full px-4 py-2">{a}</span>
              ))}
            </div>

            <div className="fade-up flex flex-col sm:flex-row justify-center gap-3">
              <a href={LINE_URL} className="btn-gold">LINE で相談する</a>
              <a href={IG_URL} className="btn-outline-dark">Instagram</a>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer className="sec-dark border-t border-white/5" style={{ padding: "48px 0" }}>
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white text-[16px] tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-[var(--color-gold)]">J</span>ingi Ueda
            </p>
            <nav className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {["About", "Career", "Business", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-white/20 text-[10px] tracking-[0.12em] uppercase hover:text-[var(--color-gold)] transition-colors">{l}</a>
              ))}
            </nav>
            <p className="text-white/12 text-[10px]">&copy; 2026 JM GROUP</p>
          </div>
        </footer>
      </main>
    </>
  );
}
