import Image from "next/image";
import Header from "./components/Header";
import ScrollObserver from "./components/ScrollObserver";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollObserver />
      <main>
        {/* ══════════ HERO ══════════ */}
        <section className="relative min-h-[100svh] flex items-end overflow-hidden">
          <Image src="/images/hero.jpg" alt="上田 陣義" fill className="object-cover object-center sm:object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent hidden sm:block" />

          <div className="relative z-10 w-full pb-12 sm:pb-16 pt-32">
            <div className="container" style={{ textAlign: "left" }}>
              <div className="mb-6">
                <p className="label-en mb-3">JM Group Representative</p>
                <h1 className="text-white text-[40px] sm:text-[56px] md:text-[72px] font-bold leading-[1.1] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  上田 陣義
                </h1>
                <p className="text-white/50 text-[16px] sm:text-[18px] tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>Jingi Ueda</p>
                <p className="text-[var(--color-gold)] text-[13px] sm:text-[15px] font-medium tracking-wide">パーソナルトレーナー / フィジーク競技者 / 実業家</p>
              </div>

              <p className="text-white/40 text-[13px] sm:text-[14px] leading-relaxed max-w-xl mb-8">
                愛媛から上京し、フィットネス業界で全店No.1の実績を積み上げた成り上がりトレーナー。「人生のパフォーマンスを最大化するサポート」を軸に複数事業を展開。
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["NESTA-PFT認定", "全店No.1セールス", "最年少リーダー", "フィジーク大会出場"].map((t) => (
                  <span key={t} className="text-[10px] sm:text-[11px] tracking-wide text-white/60 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-end gap-8 sm:gap-12 mb-10">
                {[
                  { val: "No.1", unit: "", label: "全店トップ", gold: true },
                  { val: "8", unit: "年", label: "業界キャリア", gold: false },
                  { val: "4", unit: "事業", label: "展開中", gold: false },
                ].map((s, i) => (
                  <div key={i}>
                    <div className={`stat-num ${s.gold ? "text-[var(--color-gold)]" : "text-white"}`}>
                      {s.val}{s.unit && <span className="text-[0.4em] text-white/30 ml-1">{s.unit}</span>}
                    </div>
                    <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#about" className="btn-gold">View Portfolio</a>
                <a href="#contact" className="btn-outline">Connect</a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* ══════════ ABOUT / STORY ══════════ */}
        <section id="about" className="section-light">
          <div className="container">
            <div className="fade-up mb-12">
              <p className="label-en mb-4">Our Story</p>
              <h2 className="heading-display">
                愛媛から東京へ。<br />
                <span className="text-gold italic">ゼロから全てを掴み取る</span>
              </h2>
            </div>

            {/* モバイル: 写真を先に大きく表示 / PC: 横並び */}
            <div className="mb-20">
              {/* モバイル: 写真を画面幅いっぱいで大きくインパクト */}
              <div className="sm:hidden fade-up mb-10 -mx-[40px]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/competition.jpg" alt="上田陣義" fill className="object-cover object-top" sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/80 via-transparent to-transparent" />
                </div>
              </div>

              <div className="flex-row-equal" style={{ alignItems: "flex-start" }}>
                <div className="fade-up" style={{ textAlign: "left" }}>
                  <p className="body-text mb-8">
                    愛媛県出身。地方から単身上京し、フィットネス業界に飛び込む。大手フィットネスクラブでキャリアをスタートし、パーソナルジムへ転身後は物販売上全社No.1、全店No.1セールス、最年少リーダーと次々に結果を出し続けた。
                  </p>
                  <p className="body-text">
                    2026年、満を持して独立。パーソナルジム、オーダースーツ、ウェルネスコミュニティ、そして同じ愛媛出身の挑戦者を支援するコミュニティと、4つの事業を同時展開。運動・健康・外見・マインド・ビジネスを通して「人生を変えるきっかけをつくる存在」を目指す。
                  </p>
                </div>
                {/* PC: 右側に写真 */}
                <div className="fade-up hidden sm:block">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl" style={{ minHeight: "400px" }}>
                    <Image src="/images/competition.jpg" alt="上田陣義" fill className="object-cover object-top" sizes="50vw" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Story blocks */}
            <div className="space-y-16" style={{ textAlign: "left" }}>
              {[
                { num: "1", title: "地方から上京、ゼロからのスタート", body: "愛媛県から単身上京。何のコネクションもない東京で、大手フィットネスクラブに入社。広島・愛媛で経験を積みながら、トレーナーとしての基礎を叩き込んだ。" },
                { num: "2", title: "圧倒的な結果で、全てを証明する", body: "パーソナルジムへ転身後、物販売上全社No.1を達成。さらに全店No.1セールス、社内最年少リーダーへ。周囲の期待を超える実績で、自分の価値を証明し続けた。" },
                { num: "3", title: "独立。4つの事業で人生を変える", body: "2026年、JM GROUPとして独立。パーソナルジム、オーダースーツ、ウェルネスコミュニティ、挑戦者コミュニティの4事業を展開。かつての自分のように地方から挑戦する人を全力で支える。" },
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

        {/* ══════════ BUSINESS (4枠: grid 2x2) ══════════ */}
        <section id="business" className="section-dark">
          <div className="container">
            <div className="fade-up">
              <p className="label-en mb-4">Pillars of Excellence</p>
              <h2 className="heading-section text-white">事業領域</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "APEX PERSONAL GYM", sub: "パーソナルジム", desc: "完全個室・全国No.1トレーナーが導くオーダーメイドボディメイク。ダイエット、筋肥大、姿勢改善、大会サポートまで。", img: "/images/gym.jpg", tags: ["完全個室", "恵比寿", "手ぶらOK"], href: "https://apex-gym-lp.vercel.app/", link: true },
                { title: "ORDER SUIT", sub: "オーダースーツ", desc: "トレーナー視点の採寸×生地選定×スタイリング提案。鍛え上げた身体が最も美しく見えるスーツを設計。", img: "/images/suit.jpg", tags: ["生地選定", "スタイリング", "採寸"], href: "#", link: true },
                { title: "WELLNESS COMMUNITY", sub: "ウェルネスコミュニティ", desc: "皇居ランなどの運動イベント企画・ウェルネス交流会運営。健康を軸にした繋がりの場を創る。", img: "/images/community.jpg", tags: ["皇居ラン", "交流イベント", "運動習慣"], href: "#", link: false },
                { title: "CHALLENGER'S HUB", sub: "挑戦者コミュニティ", desc: "愛媛をはじめ地方から上京する挑戦者を支援。自身の経験を活かし、住居・仕事・人脈づくりをサポート。", img: "/images/challenger.jpg", tags: ["上京支援", "愛媛出身", "人脈づくり"], href: "#", link: false },
              ].map((b, i) => {
                const inner = (
                  <>
                    <Image src={b.img} alt={b.title} fill className={`object-cover ${b.link ? "opacity-25 group-hover:opacity-35" : "opacity-20"} transition-opacity duration-500 rounded-xl`} sizes="(max-width:768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
                    <div className="relative z-10" style={{ textAlign: "left" }}>
                      <p className="text-[var(--color-gold)] text-[10px] tracking-[0.2em] uppercase mb-2">{b.sub}</p>
                      <h3 className={`text-white text-[22px] sm:text-[26px] font-semibold mb-2 ${b.link ? "group-hover:text-[var(--color-gold-light)]" : ""} transition-colors`} style={{ fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                      <p className="text-white/40 text-[13px] leading-relaxed mb-4">{b.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {b.tags.map((t) => <span key={t} className="text-[10px] text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>)}
                      </div>
                      {b.link && (
                        <span className="inline-flex items-center gap-2 text-[var(--color-gold)] text-[11px] tracking-[0.15em] uppercase mt-4">
                          View Details
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" /></svg>
                        </span>
                      )}
                    </div>
                    {!b.link && <div className="absolute top-5 right-5 z-10 text-[10px] text-white/20 border border-white/10 rounded-full px-3 py-1">Coming Soon</div>}
                  </>
                );
                return b.link ? (
                  <a key={i} href={b.href} className="biz-card group relative h-[320px] sm:h-[380px] p-8 sm:p-10 flex flex-col justify-end fade-up">{inner}</a>
                ) : (
                  <div key={i} className="biz-card relative h-[320px] sm:h-[380px] p-8 sm:p-10 flex flex-col justify-end fade-up">{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ CAREER TIMELINE ══════════ */}
        <section id="career" className="section-dark">
          <div className="container">
            <div className="fade-up">
              <p className="label-en mb-4">Track Record</p>
              <h2 className="heading-section text-white">経歴・実績</h2>
            </div>

            <div className="max-w-[800px] mx-auto relative">
              <div className="absolute hidden sm:block sm:left-1/2 top-0 bottom-0 w-[2px] sm:-translate-x-[1px] bg-gradient-to-b from-[var(--color-gold)] via-[#333] to-transparent" />

              {[
                { year: "2026年", title: "JM GROUP として独立", desc: "パーソナルジム、オーダースーツ、ウェルネスコミュニティ、挑戦者コミュニティの4事業を同時展開。" },
                { year: "2024年", title: "最年少リーダー就任 / 大会出場", desc: "社内最年少でリーダー職に就任。フィジーク大会にも出場し、自身の身体で結果を証明。" },
                { year: "2023年", title: "全店No.1セールス達成", desc: "全店舗でトップセールスを達成。圧倒的な結果で自分の価値を証明し続けた。" },
                { year: "2021年", title: "物販売上 全社No.1", desc: "物販部門で全社トップの売上を記録。営業力とトレーナーとしての信頼の両立を実現。" },
                { year: "2020年", title: "パーソナルジム入社", desc: "より深い指導を求めパーソナルジムへ転身。科学的アプローチで指導力を磨く。" },
                { year: "2018年", title: "大手フィットネスクラブ入社", desc: "愛媛から上京し、広島・愛媛の大手フィットネスクラブでキャリアをスタート。トレーナーとしての基礎を築く。" },
              ].map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative mb-10 last:mb-0 fade-up">
                    <div className="absolute hidden sm:block sm:left-1/2 sm:-translate-x-1/2 top-5 w-[12px] h-[12px] rounded-full bg-[var(--color-gold)] border-[2px] border-[#0a0a0a] shadow-[0_0_0_2px_var(--color-gold)] z-10" />
                    <div className="hidden sm:grid sm:grid-cols-2 sm:gap-16">
                      {isLeft ? (
                        <><div className="text-left"><div className="bg-[#141414] border border-white/[0.06] rounded-xl p-7 hover:border-[var(--color-gold)]/20 transition-colors"><p className="text-[var(--color-gold)] text-[13px] italic mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</p><h3 className="text-[16px] font-bold text-white mb-2">{item.title}</h3><p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p></div></div><div /></>
                      ) : (
                        <><div /><div className="text-left"><div className="bg-[#141414] border border-white/[0.06] rounded-xl p-7 hover:border-[var(--color-gold)]/20 transition-colors"><p className="text-[var(--color-gold)] text-[13px] italic mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</p><h3 className="text-[16px] font-bold text-white mb-2">{item.title}</h3><p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p></div></div></>
                      )}
                    </div>
                    <div className="sm:hidden flex gap-4 text-left">
                      <div className="w-[4px] shrink-0 rounded-full bg-[var(--color-gold)]" />
                      <div className="bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-5 flex-1">
                        <p className="text-[var(--color-gold)] text-[12px] font-semibold tracking-[0.08em] mb-2">{item.year}</p>
                        <h3 className="text-[15px] font-bold text-white mb-1.5">{item.title}</h3>
                        <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES (grid 3x2) ══════════ */}
        <section className="section-dark">
          <div className="container">
            <div className="fade-up">
              <p className="label-en mb-4">Services</p>
              <h2 className="heading-section text-white">提供サービス</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
              {[
                { title: "対面パーソナルトレーニング", desc: "ダイエット/筋肥大/姿勢改善/機能改善。初心者〜大会出場まで対応。", img: "/images/svc-training.jpg" },
                { title: "フィジーク大会サポート", desc: "減量設計・分割設計・ポージング指導・大会スケジュール逆算プラン。", img: "/images/svc-physique.jpg" },
                { title: "ゴルフコンディショニング", desc: "可動域改善・体幹/回旋動作向上・飛距離アップ・スイング安定化。", img: "/images/svc-golf.jpg" },
                { title: "野球パフォーマンス", desc: "体幹強化・投球/打撃の動作改善。ジュニア〜学生アスリート対応。", img: "/images/svc-baseball.jpg" },
                { title: "オーダースーツ", desc: "トレーナー視点の採寸・生地選定・スタイリング提案。身体が映える一着を。", img: "/images/suit.jpg" },
                { title: "ウェルネスイベント企画", desc: "皇居ランなど運動イベント企画・ウェルネス交流会運営。", img: "/images/svc-wellness.jpg" },
              ].map((s, i) => (
                <div key={i} className="relative h-[220px] rounded-xl overflow-hidden group">
                  <Image src={s.img} alt={s.title} fill className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-left">
                    <h3 className="text-white text-[15px] font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-white/50 text-[12px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ GALLERY (grid 4 cols) ══════════ */}
        <section id="gallery" className="section-dark">
          <div className="container">
            <div className="mb-12 fade-up">
              <p className="label-en mb-4">Visual Journal</p>
              <h2 className="heading-section text-white !mb-2">活動の瞬間に宿る、</h2>
              <h2 className="heading-section"><span className="text-gold italic">確信と情熱</span></h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 fade-up">
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
        <section id="contact" className="section-dark contact border-t border-white/5">
          <div className="container">
            <div className="fade-up mb-12">
              <p className="label-en mb-4">Contact</p>
              <h2 className="heading-section text-white !mb-4">お問い合わせ</h2>
              <p className="body-text-dark">トレーニング、大会サポート、オーダースーツなど、<br className="hidden sm:inline" />お気軽にご相談ください。</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-10 fade-up">
              {["東京（板橋・恵比寿）", "都内レンタルジム", "愛媛県", "オンライン対応"].map((a) => (
                <span key={a} className="text-[12px] text-white/30 border border-white/10 rounded-full px-4 py-2">{a}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 fade-up">
              <a href="#" className="btn-gold">LINE で相談する</a>
              <a href="#" className="btn-outline">Instagram</a>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer className="section-dark border-t border-white/5" style={{ padding: "48px 0" }}>
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
