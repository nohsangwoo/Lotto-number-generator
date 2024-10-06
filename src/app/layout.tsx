import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "행운의 로또 번호 생성기 | 무료 온라인 도구",
  description: "무료로 로또 번호를 생성해보세요. 재미있는 애니메이션과 함께 행운의 번호를 받아보세요. 개인정보 보호에 중점을 둔 안전하고 빠른 온라인 도구입니다.",
  keywords: [
    "로또 번호 생성기, 무료 로또 번호, 행운의 번호, 로또 추첨, 온라인 로또, 번호 예측, 로또 당첨 번호, 무료 온라인 도구, 로또 시뮬레이션, 행운의 숫자, 로또 번호 추첨, 번호 추첨, 로또 번호 추첨기,"
  ].join(", "),
  openGraph: {
    title: "행운의 로또 번호 생성기 - 재미있는 애니메이션과 함께",
    description: "무료 온라인 로또 번호 생성 도구. 재미있는 애니메이션과 함께 행운의 번호를 받아보세요. 개인정보 보호에 중점을 둔 안전한 서비스입니다.",
    images: [
      {
        url: "https://lotto.ludgi.ai/logo.webp", // 실제 로고 URL로 변경해주세요
        width: 1200,
        height: 630,
        alt: "행운의 로또 번호 생성기",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    title: "행운의 로또 번호 생성기 - 재미있는 애니메이션과 함께",
    description: "무료 온라인 로또 번호 생성 도구. 재미있는 애니메이션과 함께 행운의 번호를 받아보세요. 개인정보 보호에 중점을 둔 안전한 서비스입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const pubId = "ca-pub-5823741955283998"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content={pubId} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Funding Choices 스크립트 */}
        <Script
          id="google-funding-choices"
          strategy="afterInteractive"
          src={`https://fundingchoicesmessages.google.com/i/${pubId}?ers=1`}
        />
        {/* Google FC Present 스크립트 */}
        <Script
          id="google-fc-present"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
          }}
        />
      </body>
    </html>
  );
}
