import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Smartphone, ShieldCheck, Package, AlertTriangle, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { DownloadButton } from '@/components/site/DownloadButton';

export const metadata: Metadata = {
  title: '安卓下载 - 电影狗最新版 APK 免费安装',
  description:
    '电影狗安卓最新版下载，支持 Android 手机与平板，免费安装，海量高清影视资源即刻畅享。快速下载、安全安装、边下边看。',
  alternates: { canonical: '/download' },
};

const installSteps = [
  {
    title: '下载 APK 安装包',
    desc: '点击下方“安卓 APK 下载”，将安装包保存至手机本地。',
  },
  {
    title: '允许未知来源',
    desc: '首次安装需在系统设置中允许“安装未知来源应用”，并按提示授权。',
  },
  {
    title: '点击安装',
    desc: '找到已下载的安装包点击安装，稍等片刻即可完成。',
  },
  {
    title: '打开观影',
    desc: '安装完成后打开电影狗，搜索你想看的内容，开始流畅观影。',
  },
];

export default function DownloadPage() {
  return (
    <>
      <section className="cinema-glow overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-in-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-sm font-medium text-brand-green">
              <Download className="h-4 w-4" /> Android 官方下载
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              下载 <span className="text-brand">电影狗</span> 安卓版
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              当前位置：最新稳定版，适配安卓手机与平板。免费安装、无需注册，
              下载后即可畅享高清海量影视。
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <DownloadButton
                label={`安卓 APK 下载（${siteConfig.name}）`}
                sub="当前最新版 · 免费"
              />
            </div>

            <ul className="mt-8 space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
                官方安全通道，无捆绑、无广告、纯净安装
              </li>
              <li className="flex items-center gap-2">
                <Package className="h-4 w-4 text-brand" />
                支持 Android 6.0 及以上系统
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-brand-green" />
                手机 / 平板通用，一次安装放心使用
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up mx-auto w-full max-w-xs">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1b1b22] to-[#0c0c10] p-8 text-center shadow-2xl">
              <div className="mx-auto mb-6 flex flex-col items-center">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-lg">
                  <Image
                    src="/icon-app.png"
                    alt={`${siteConfig.name} 应用图标`}
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-4 text-xl font-extrabold">{siteConfig.name}</h2>
                <p className="text-sm text-zinc-400">高清影视追剧应用</p>
                <span className="mt-3 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                  For Android
                </span>
              </div>
              <div className="space-y-2 bg-white/[0.04] p-4 text-left text-xs text-zinc-400">
                <p className="flex justify-between">
                  <span>更新版本</span>
                  <span className="font-semibold text-white">v最新版</span>
                </p>
                <p className="flex justify-between">
                  <span>更新内容</span>
                  <span className="font-semibold text-white">稳定性优化</span>
                </p>
                <p className="flex justify-between">
                  <span>系统要求</span>
                  <span className="font-semibold text-white">Android 6.0+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 安装步骤 */}
      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">安装指引</h2>
            <p className="mt-4 text-lg text-zinc-400">
              4 个简单步骤，轻松完成安装。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {installSteps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-3xl border border-white/10 bg-[#15151b] p-7"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm text-amber-200/90">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <p>
              小提示：APK 通常不会出现在应用商店内，属正常现象。请在浏览器下载列表
              中找到安装包进行安装；如已开启“纯净模式”，可暂时关闭后再安装。
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-[2rem] bg-gradient-to-b from-brand/15 to-transparent p-10 text-center">
            <h2 className="text-2xl font-extrabold">准备好开启观影之旅了吗？</h2>
            <p className="text-zinc-400">点击按钮开始下载，好剧不等待。</p>
            <DownloadButton label="安卓 APK 免费下载" />
            <Link
              href="/faq"
              className="mt-2 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
            >
              安装失败或异常？查看常见问题 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}