import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { BaiduAnalytics } from '@/components/site/BaiduAnalytics';
import { JsonLd } from '@/components/site/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: '电影狗 - 高清影视追剧应用安卓版下载',
    template: '%s | 电影狗',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: `${siteConfig.name}官方` }],
  generator: 'Next.js',
  category: '娱乐',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: '电影狗 - 高清影视追剧应用安卓版下载',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.icon,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} 图标`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '电影狗 - 高清影视追剧应用安卓版下载',
    description: siteConfig.description,
    images: [siteConfig.icon],
  },
  icons: {
    icon: '/icon-app.png',
    apple: '/apple-icon.png',
    shortcut: '/icon-app.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: '#0b0b10',
  width: 'device-width',
  initialScale: 1,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  alternateName: ['电影狗app', '电影狗影视', '电影狗安卓版'],
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'zh-CN',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased">
        <JsonLd data={websiteJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          跳到主要内容
        </a>
        <div className="flex min-h-screen flex-col bg-[#0b0b10] text-zinc-100">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        {/* 百度统计 */}
        <BaiduAnalytics />
      </body>
    </html>
  );
}