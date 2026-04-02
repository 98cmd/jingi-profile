import Image from "next/image";
import Header from "./components/Header";
import ScrollObserver from "./components/ScrollObserver";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollObserver />
      <main>
        {/* ══════════ HERO (dark) ══════════ */}
        {/* Full-screen hero with photo as main visual */}
        <section className="relative min-h-[100svh] flex items-end overflow-hidden">
          {/* Background: メイン写真 */}
          <Image
            src="/images/hero.jpg"
            alt="上田 陣義"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          {/* Content overlay at bottom */}
          <div className="relative z-10 w-full pb-12 sm:pb-16 pt-32 px-4 sm:px-6">
            <div className="container">
              {/* Name & title */}
              <div className="mb-6">
                <p className="label-en mb-3">JM Group Representative</p>
                <h1 className="text-white text-[40px] sm:text-[56px] md:text-[72px] font-bold leading-[1.1] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  上田 陣義
                </h1>
                <p className="text-white/50 text-[16px] sm:text-[18px] tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Jingi Ueda
                </p>
                <p className="text-[var(--color-gold)] text-[13px] sm:text-[15px] font-medium tracking-wide">
                  パーソナルトレーナー / フィジーク競技者 / 実業家
                </p>
              </div>

              {/* Brief intro */}
              <p className="text-white/40 text-[13px] sm:text-[14px] leading-relaxed max-w-xl mb-8">
                ボディメイク・フィジーク競技・ゴルフコンディショニング・ウェルネスを横断し、「人生のパフォーマンスを最大化するサポート」を軸に活動。年間売上 約1,160万円（全社No.1）。
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NESTA-PFT認定", "APFクラシック東京大会3位", "全社No.1セールス", "社内最年少リーダー"].map((t) => (
                  <span key={t} className="text-[10px] sm:text-[11px] tracking-wide text-white/60 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">{t}</span>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-end gap-8 sm:gap-12 mb-10">
                <div>
                  <div className="stat-num text-[var(--color-gold)]">No.1</div>
                  <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase mt-1">Top Sales</p>
                </div>
                <div>
                  <div className="stat-num text-white">1,160<span className="text-[0.4em] text-white/30 ml-1">万円</span></div>
                  <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase mt-1">Annual Revenue</p>
                </div>
                <div>
                  <div className="stat-num text-white">3<span className="text-[0.4em] text-white/30 ml-1">位</span></div>
                  <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase mt-1">APF Tokyo</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#about" className="btn-gold">View Portfolio</a>
                <a href="#contact" className="btn-outline">Connect</a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* Stats bar (dark) - below hero */}
        <section className="section-dark py-6 px-4 sm:px-6 border-y border-white/5">
          <div className="container flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
            <p className="label-en">Strategic Sales Consultant</p>
            <div className="flex items-center gap-8 sm:gap-14">
              {[
                { val: "7", unit: "億円+", label: "TOTAL SALES" },
                { val: "10", unit: "社", label: "ADVISORY" },
                { val: "100", unit: "回+", label: "EVENTS" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-white text-[24px] sm:text-[28px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.val}<span className="text-white/30 text-[0.5em] ml-0.5">{s.unit}</span>
                  </div>
                  <p className="text-white/20 text-[9px] tracking-[0.12em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT / STORY (light) ══════════ */}
        <section id="about" className="section-light px-4 sm:px-6">
          <div className="container">
            <div className="fade-up mb-16">
              <p className="label-en mb-4">Our Story</p>
              <h2 className="heading-display">
                不屈の精神と、<br />
                <span className="text-gold italic">情熱を武器に変える力</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
              <div className="lg:w-[55%] fade-up">
                <p className="body-text mb-8">
                  愛媛県出身。大手パーソナルトレーニングジムにてトップセールスおよび社内最年少リーダー職を務める現役パーソナルトレーナー。ボディメイク・フィジーク競技・ゴルフコンディショニング・野球指導・ウェルネス分野を横断し、「人生のパフォーマンスを最大化するサポート」を軸に活動。
                </p>
                <p className="body-text">
                  現在はパーソナルトレーニング、オンライン食事指導、ウェルネスコミュニティ運営、オーダースーツ事業の4軸で事業を展開。運動・健康・外見・マインド・ビジネスを通して「人生を変えるきっかけをつくる存在」を目指す。
                </p>
              </div>
              <div className="lg:w-[45%] fade-up">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <Image src="/images/competition.jpg" alt="上田陣義 フィジーク大会" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 45vw" />
                </div>
              </div>
            </div>

            {/* 3 Story blocks */}
            <div className="space-y-16">
              {[
                { num: "1", title: "壮絶なトレーニングの日々", body: "幼少期から身体を動かすことに情熱を注ぎ、トレーニングの楽しさと奥深さに目覚める。科学的なアプローチで自身の身体を追い込み、その経験が指導の原点となる。" },
                { num: "2", title: "トップセールスと最年少リーダー", body: "大手パーソナルジムに入社後、年間売上約1,160万円を達成し全社No.1に。新店舗立ち上げでは初月100万円を達成。社内最年少でリーダー職に就任し、組織の成長を牽引。" },
                { num: "3", title: "独立、そして複数事業の展開へ", body: "パーソナルトレーナーという枠を超え、ウェルネスを軸とした複数事業を展開。フィジーク大会での入賞実績を携え、人の人生のパフォーマンスを最大化するという信念で活動中。" },
              ].map((s) => (
                <div key={s.num} className="flex gap-6 sm:gap-10 fade-up">
                  <div className="story-num">{s.num}</div>
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                    <p className="body-text">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BUSINESS (dark) ══════════ */}
        <section id="business" className="section-dark px-4 sm:px-6">
          <div className="container">
            <div className="text-center mb-16 sm:mb-20 fade-up">
              <p className="label-en mb-4">Pillars of Excellence</p>
              <h2 className="heading-section text-white">事業領域</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Top 2: large cards with bg image */}
              {[
                { title: "APEX PERSONAL GYM", sub: "恵比寿のプレミアムパーソナルジム", desc: "完全個室・全国No.1トレーナーが導くオーダーメイドボディメイク。ダイエット、筋肥大、姿勢改善、大会サポートまで。", img: "/images/gym.jpg", tags: ["完全個室", "恵比寿駅徒歩圏内", "手ぶらOK"] },
                { title: "ORDER SUIT", sub: "身体が映えるオーダースーツ", desc: "トレーナー視点の採寸×生地選定×スタイリング提案。鍛え上げた身体が最も美しく見えるスーツを設計。", img: "/images/suit.jpg", tags: ["生地選定", "スタイリング", "採寸"] },
              ].map((b, i) => (
                <div key={i} className="biz-card relative h-[320px] sm:h-[360px] p-8 sm:p-10 flex flex-col justify-end fade-up">
                  <Image src={b.img} alt={b.title} fill className="object-cover opacity-25 rounded-xl" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
                  <div className="relative z-10">
                    <p className="text-[var(--color-gold)] text-[10px] tracking-[0.2em] uppercase mb-2">{b.sub}</p>
                    <h3 className="text-white text-[22px] sm:text-[26px] font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                    <p className="text-white/40 text-[13px] leading-relaxed mb-4">{b.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.tags.map((t) => <span key={t} className="text-[10px] text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>)}
                    </div>
                  </div>
                  <a href="#" className="absolute top-5 right-5 z-10 text-white/30 hover:text-[var(--color-gold)] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 13L13 5M13 5H6M13 5v7" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </a>
                </div>
              ))}

              {/* Bottom 2: image cards (same style as top) */}
              {[
                { title: "ONLINE NUTRITION", sub: "オンライン食事指導", desc: "LINEでの食事チェック、ライフスタイル別食事設計。外食・コンビニ対応の実践的指導。", img: "/images/nutrition.jpg", tags: ["LINE対応", "外食OK", "ライフスタイル別"] },
                { title: "WELLNESS COMMUNITY", sub: "ウェルネスコミュニティ", desc: "皇居ランなどの運動イベント企画・ウェルネス交流会運営。健康を軸にした繋がりの場。", img: "/images/community.jpg", tags: ["皇居ラン", "交流イベント", "運動習慣"] },
              ].map((b, i) => (
                <div key={i} className="biz-card relative h-[320px] sm:h-[360px] p-8 sm:p-10 flex flex-col justify-end fade-up">
                  <Image src={b.img} alt={b.title} fill className="object-cover opacity-25 rounded-xl" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
                  <div className="relative z-10">
                    <p className="text-[var(--color-gold)] text-[10px] tracking-[0.2em] uppercase mb-2">{b.sub}</p>
                    <h3 className="text-white text-[22px] sm:text-[26px] font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                    <p className="text-white/40 text-[13px] leading-relaxed mb-4">{b.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.tags.map((t) => <span key={t} className="text-[10px] text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>)}
                    </div>
                  </div>
                  <a href="#" className="absolute top-5 right-5 z-10 text-white/30 hover:text-[var(--color-gold)] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 13L13 5M13 5H6M13 5v7" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CAREER TIMELINE (dark, center-line alternating cards) ══════════ */}
        <section id="career" className="section-dark px-4 sm:px-6">
          <div className="container">
            <div className="text-center fade-up">
              <p className="label-en mb-4">Track Record</p>
              <h2 className="heading-section text-white">経歴・実績</h2>
            </div>

            <div className="max-w-[800px] mx-auto relative">
              {/* Center line - exactly at 50% */}
              <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] sm:-translate-x-[1px] bg-gradient-to-b from-[var(--color-gold)] via-[#333] to-transparent" />

              {[
                { year: "2024年〜", title: "JM GROUP 独立・事業展開", desc: "パーソナルトレーニング、オンライン食事指導、ウェルネスコミュニティ、オーダースーツ事業の4軸で独立。" },
                { year: "2023年", title: "APFクラシックサーフモデル 東京大会 3位", desc: "出場者最多クラスにて3位入賞。自身の身体で結果を証明。" },
                { year: "2022年〜", title: "社内最年少リーダー就任", desc: "リーダー職として店舗運営を牽引。新店舗立ち上げ初月100万円達成。" },
                { year: "2021年", title: "年間売上 全社No.1", desc: "個人年間売上約1,160万円を達成。全社トップセールスに。" },
                { year: "2020年〜", title: "大手パーソナルジム入社", desc: "トレーナーとしてのキャリアをスタート。科学的アプローチで指導力を磨く。" },
              ].map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative mb-12 last:mb-0 fade-up pl-14 sm:pl-0">
                    {/* Dot - exactly on center line */}
                    <div className="absolute left-[13px] sm:left-1/2 sm:-translate-x-1/2 top-6 w-[14px] h-[14px] rounded-full bg-[var(--color-gold)] border-[3px] border-[#0a0a0a] shadow-[0_0_0_2px_var(--color-gold)] z-10" />

                    {/* Card container - uses grid to place card on correct side */}
                    <div className="hidden sm:grid sm:grid-cols-2 sm:gap-16">
                      {isLeft ? (
                        <>
                          <div className="text-right">
                            <div className="bg-[#141414] border border-white/[0.06] rounded-xl p-7 hover:border-[var(--color-gold)]/20 transition-colors inline-block text-left w-full">
                              <p className="text-[var(--color-gold)] text-[13px] italic mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</p>
                              <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                              <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div>
                            <div className="bg-[#141414] border border-white/[0.06] rounded-xl p-7 hover:border-[var(--color-gold)]/20 transition-colors w-full">
                              <p className="text-[var(--color-gold)] text-[13px] italic mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</p>
                              <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                              <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Mobile: single column */}
                    <div className="sm:hidden">
                      <div className="bg-[#141414] border border-white/[0.06] rounded-xl p-6 hover:border-[var(--color-gold)]/20 transition-colors">
                        <p className="text-[var(--color-gold)] text-[13px] italic mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</p>
                        <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ PROVEN PERFORMANCE (dark) ══════════ */}
        <section className="section-dark px-4 sm:px-6">
          <div className="container text-center">
            <p className="label-en mb-4 fade-up">Proven Performance</p>
            <h2 className="heading-section text-white fade-up">実績・活動</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 fade-up">
              {[
                { val: "1,160", unit: "万円", label: "年間個人売上" },
                { val: "No.1", unit: "", label: "全社トップセールス" },
                { val: "3", unit: "位", label: "APF東京大会" },
                { val: "100", unit: "万円", label: "新店舗初月売上" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="stat-num text-white mb-2">{s.val}<span className="text-[0.4em] text-white/30 ml-1">{s.unit}</span></div>
                  <p className="text-white/30 text-[11px] tracking-[0.12em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES (light) ══════════ */}
        <section className="section-light px-4 sm:px-6">
          <div className="container">
            <div className="text-center fade-up">
              <p className="label-en mb-4">Services</p>
              <h2 className="heading-section">提供可能サービス</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 fade-up">
              {[
                { title: "対面パーソナルトレーニング", desc: "ダイエット/筋肥大/姿勢改善/機能改善。初心者〜大会出場まで対応。", img: "/images/svc-training.jpg" },
                { title: "フィジーク大会サポート", desc: "減量設計・分割設計・ポージング指導・大会スケジュール逆算プラン。", img: "/images/svc-physique.jpg" },
                { title: "ゴルフコンディショニング", desc: "可動域改善・体幹/回旋動作向上・飛距離アップ・スイング安定化。", img: "/images/svc-golf.jpg" },
                { title: "野球パフォーマンス", desc: "体幹強化・投球/打撃の動作改善。ジュニア〜学生アスリート対応。", img: "/images/svc-baseball.jpg" },
                { title: "オンライン食事指導", desc: "LINEでの食事チェック・ライフスタイル別設計・外食/コンビニ対応。", img: "/images/svc-nutrition.jpg" },
                { title: "ウェルネスイベント企画", desc: "皇居ランなど運動イベント企画・ウェルネス交流会運営。", img: "/images/svc-wellness.jpg" },
              ].map((s, i) => (
                <div key={i} className="relative h-[220px] rounded-xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <h3 className="text-white text-[15px] font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-white/50 text-[12px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ GALLERY (dark) ══════════ */}
        <section id="gallery" className="section-dark px-4 sm:px-6">
          <div className="container">
            <div className="mb-12 fade-up">
              <p className="label-en mb-4">Visual Journal</p>
              <h2 className="heading-section text-white !mb-2">活動の瞬間に宿る、</h2>
              <h2 className="heading-section"><span className="text-gold italic">確信と情熱</span></h2>
            </div>
            <div className="gallery-grid fade-up">
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

        {/* ══════════ CONTACT (light) ══════════ */}
        <section id="contact" className="section-light contact px-4 sm:px-6">
          <div className="container">
            <div className="fade-up mb-12">
              <p className="label-en mb-4">Contact</p>
              <h2 className="heading-section !mb-4">お問い合わせ</h2>
              <p className="body-text">トレーニング、食事指導、大会サポート、オーダースーツなど、<br className="hidden sm:inline" />お気軽にご相談ください。</p>
            </div>

            {/* Area */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 fade-up">
              {["東京（板橋・恵比寿）", "都内レンタルジム", "愛媛県", "オンライン対応"].map((a) => (
                <span key={a} className="text-[12px] text-[var(--color-text-light)] border border-black/10 rounded-full px-4 py-2">{a}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 fade-up">
              <a href="#" className="btn-gold">LINE で相談する</a>
              <a href="#" className="btn-outline !text-[var(--color-text)] !border-black/15 hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]">Instagram</a>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER (dark) ══════════ */}
        <footer className="section-dark py-12 px-4 sm:px-6 border-t border-white/5">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white text-[16px] tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-[var(--color-gold)]">J</span>ingi Ueda
            </p>
            <nav className="flex gap-6">
              {["About","Business","Career","Gallery","Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-white/25 text-[10px] tracking-[0.12em] uppercase hover:text-[var(--color-gold)] transition-colors">{l}</a>
              ))}
            </nav>
            <p className="text-white/15 text-[10px]">&copy; 2026 JM GROUP</p>
          </div>
        </footer>
      </main>
    </>
  );
}
