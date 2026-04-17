import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "上田 陣義 | JM GROUP - パーソナルトレーナー / オーダースーツテーラー / 実業家",
  description:
    "JM GROUP代表 上田陣義。パーソナルトレーナー、フィジーク競技者、ウェルネスコミュニティ主宰、オーダースーツ事業。人生のパフォーマンスを最大化するサポート。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "上田 陣義",
  alternateName: "Jingi Ueda",
  jobTitle: "パーソナルトレーナー",
  description: "JM GROUP代表。パーソナルトレーニング、フィジーク競技、ウェルネスコミュニティ運営、オーダースーツ事業を展開。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Serif+JP:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
