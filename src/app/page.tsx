import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clapperboard,
  Tv,
  Puzzle,
  Download,
  Smartphone,
  Shield,
  Zap,
  MonitorPlay,
  Clock,
  Cloud,
  Star,
  ChevronRight,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { DownloadButton } from '@/components/site/DownloadButton';
import { JsonLd } from '@/components/site/JsonLd';

export const metadata: Metadata = {
  title: '电影狗 - 高清影视追剧应用安卓版免费下载',
  description:
    '电影狗安卓版免费下载，海量电影、电视剧、综艺、动漫在线观看，高清流畅，支持离线缓存，好剧永不等待。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '电影狗 - 高清影视追剧应用安卓版免费下载',
    description:
      '海量电影、电视剧、综艺、动漫一网打尽，高清流畅，离线缓存，好剧永不等待。',
    url: siteConfig.url,
  },
};

const features = [
  {
    icon: Clapperboard,
    title: '海量影视资源',
    desc: '收录海量高清电影与热播剧集，院线大片、经典老片、冷门佳作应有尽有。',
  },
  {
    icon: Tv,
    title: '电视剧综艺动漫',
    desc: '热门电视剧、高分综艺、燃系动漫持续更新，追更不再断档。',
  },
  {
    icon: Zap,
    title: '高清流畅播放',
    desc: '智能适配网速，多清晰度自由切换，缓冲快、播放稳、不卡顿。',
  },
  {
    icon: MonitorPlay,
    title: '离线缓存',
    desc: '一键缓存离线观看，通勤、出差、没网也能随时追剧。',
  },
  {
    icon: Cloud,
    title: '继续观看',
    desc: '观影进度自动保存，上次看到哪，这次接着看，无缝衔接。',
  },
  {
    icon: Shield,
    title: '安全纯净',
    desc: '清爽无广告打扰，播放稳定不闪退，守护你的观影体验。',
  },
];

const categories = [
  { name: '电影', desc: '院线与经典大片', icon: Clapperboard },
  { name: '电视剧', desc: '热播好剧逐步更新', icon: Tv },
  { name: '综艺', desc: '轻松有趣的高分综艺', icon: Puzzle },
  { name: '动漫', desc: '热血与治愈并存的番剧', icon: Star },
];

const steps = [
  {
    icon: Download,
    title: '下载安装',
    desc: '点击“安卓 APK 下载”，下载后点击安装，并允许“未知来源”应用。',
  },
  {
    icon: Smartphone,
    title: '打开应用',
    desc: '安装完成后打开电影狗，无需复杂注册，快速进入观影界面。',
  },
  {
    icon: MonitorPlay,
    title: '开始观影',
    desc: '搜索或浏览你喜欢的内容，一键播放，享受高清流畅体验。',
  },
];

const testimonials = [
  {
    quote: '更新的剧集基本都能第一时间看到，画质也很清晰，真的方便。',
    name: '影迷小张',
    role: '连续使用 300+ 天用户',
  },
  {
    quote: '离线缓存这个功能太实用了，通勤地铁上看剧完全不卡。',
    name: '追剧星人',
    role: '电影狗忠实用户',
  },
];

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteConfig.name,
  operatingSystem: 'Android',
  applicationCategory: 'EntertainmentApplication',
  description: siteConfig.description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
  },
  image: siteConfig.icon,
  url: siteConfig.url,
};

export default function Home() {
  return (
    <>
      <JsonLd data={softwareJsonLd} />

      {/* Hero */}
      <section className="cinema-glow overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="animate-fade-in-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-sm font-medium text-brand-green">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              高清 · 流畅 · 免费观影
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              你的掌上
              <span className="bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent">
                观影伙伴
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              {siteConfig.name} 汇聚海量电影、电视剧、综艺与动漫资源，高清播放、
              离线缓存、进度续播一应俱全。无论何时何地，好剧永不等待。
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <DownloadButton label="安卓 APK 免费下载" sub="Android 手机/平板通用" />
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                了解更多 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
              <Shield className="h-4 w-4 text-brand-green" />
              安全纯净 · 无需注册 · 免费安装
            </p>
          </div>

          <div className="animate-fade-in-up relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-brand/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1b1b22] to-[#0c0c10] p-8 shadow-2xl">
              <div className="mx-auto mb-6 h-2 w-24 rounded-full bg-white/10" />
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-lg">
                <Image
                  src="/icon-app.png"
                  alt={`${siteConfig.name} 应用图标`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                {categories.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{c.name}</p>
                      <p className="truncate text-xs text-zinc-400">{c.desc}</p>
                    </div>
                    <span className="ml-auto rounded-md bg-brand-green/10 px-2 py-0.5 text-[11px] font-semibold text-brand-green">
                      高清
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 信任数据条 */}
      <section className="border-b border-white/10 bg-[#0c0c10] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { num: '10000+', label: '海量影视资源' },
            { num: '24h', label: '热门内容更新' },
            { num: '4K', label: '超清画质流畅播' },
            { num: '0', label: '广告骚扰' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-brand">{s.num}</p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 功能特性 */}
      <section className="bg-[#0b0b10] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              为什么选择 <span className="text-brand">电影狗</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              一站式满足你的全部观影需求，把轻快的追剧体验装进口袋。
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-white/10 bg-[#15151b] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_-16px_rgba(229,9,20,0.5)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用步骤 */}
      <section className="cinema-glow py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              三步，开始你的观影之旅
            </h2>
            <p className="mt-4 text-lg text-zinc-400">简单直接，不到一分钟即可开看。</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-3xl border border-white/10 bg-[#15151b]/80 p-7 text-center"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-bold">
                  步骤 {i + 1}
                </span>
                <div className="mx-auto mb-5 mt-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-brand">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口碑 */}
      <section className="bg-[#0b0b10] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              影迷们都在用
            </h2>
            <p className="mt-4 text-lg text-zinc-400">来自真实用户的使用感受。</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-white/10 bg-[#15151b] p-7"
              >
                <div className="mb-4 flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="ml-2 text-zinc-500">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 预览 + 最终 CTA */}
      <section className="cinema-glow py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-brand/25 bg-gradient-to-b from-brand/15 to-transparent p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              现在下载 <span className="text-brand">电影狗</span>，好剧不等待
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
              安卓手机 / 平板通用，免费安装，即刻畅享高清海量影视。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadButton
                label="安卓 APK 免费下载"
                sub="点击下载安装，允许未知来源"
              />
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white"
              >
                安装遇到问题？查看常见问题 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}