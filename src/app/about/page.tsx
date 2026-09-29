import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Sparkles, Heart, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { siteConfig } from '@/lib/site';
import { DownloadButton } from '@/components/site/DownloadButton';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解电影狗：一款专注为观影用户打造高清流畅体验的影视追剧应用背后的故事与理念。',
  alternates: { canonical: '/about' },
};

const values = [
  {
    icon: Eye,
    title: '看得更清',
    desc: '坚持高清画质与流畅体验，让每一帧都清晰动人。',
  },
  {
    icon: Sparkles,
    title: '找得更准',
    desc: '持续优化搜索与推荐，帮你快速找到想看的每一部好片。',
  },
  {
    icon: Heart,
    title: '用得安心',
    desc: '简洁纯净、尊重隐私，把注意力还给内容本身。',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`认识${siteConfig.name}`}
        description="像一只忠诚的狗一样，默默陪伴你看完每一部好片。"
      />

      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              让追剧，回归轻松与纯粹
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-400">
              {siteConfig.name}
              诞生于一个朴素的想法：看电影本该是件简单快乐的事。过去，想看一部好片常常要经历
              搜索、下载、找播放器、忍受广告的繁琐。而我们希望，你把时间留给剧情本身。
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              因此我们打造了一款开箱即用、高清流畅、稳定纯净的影视应用——聚合海量电影、电视剧、
              综艺与动漫，支持离线缓存与进度续播，无论通勤路上还是睡前时光，好剧都能如约而至。
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              我们始终相信：少一点打扰，多一点专注，才是对每一位观影伙伴最大的尊重。
            </p>
          </div>
          <div className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#15151b] shadow-2xl">
            <Image
              src="/icon-app.png"
              alt={`${siteConfig.name} 品牌图标`}
              width={256}
              height={256}
              className="object-cover p-6"
            />
          </div>
        </div>
      </section>

      <section className="cinema-glow py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            我们的坚持
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-white/10 bg-[#15151b]/80 p-7 text-center"
              >
                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/12 text-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-zinc-400">也想体验这份轻松观影？</p>
            <DownloadButton label="安卓 APK 下载" size="sm" />
            <Link
              href="/privacy"
              className="mt-2 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-white"
            >
              查看隐私政策 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}