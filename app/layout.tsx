import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sharky-space-hgj.takazzzz.chatgpt.site'),
  title: 'HAI SHARKY｜海管家 AI 智能伙伴',
  description: 'HAI SHARKY 是海管家的 AI 智能伙伴，让智能物流支撑多彩世界的转动。',
  openGraph: {
    title: 'HAI SHARKY｜海管家 AI 智能伙伴',
    description: '持续进化，Make it happen。让智能物流支撑多彩世界的转动。',
    type: 'website',
    images: [{ url: '/og.png', width: 1738, height: 905, alt: '新版 HAI SHARKY · 海管家 AI 智能伙伴' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAI SHARKY｜海管家 AI 智能伙伴',
    description: '持续进化，Make it happen。让智能物流支撑多彩世界的转动。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
