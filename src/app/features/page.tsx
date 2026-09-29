import type { Metadata } from 'next';
import {
  Clapperboard,
  Tv,
  Zap,
  MonitorPlay,
  Cloud,
  Shield,
  Search,
  Star,
  Gift,
  Download,
} from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { DownloadButton } from '@/components/site/DownloadButton';

export const metadata: Metadata = {
  title: '功能特性 - 高清影视、离线缓存、进度续播',
  description:
    '电影狗功能特性详解：海量影视资源、高清流畅播放、离线缓存、继续观看、安全纯净，全面升级你的观影体验。',
  alternates: { canonical: '/features' },
};

const featureGroups = [
  {
    icon: Clapperboard,
    title: '海量高清片库',
    items: [
      '院线大片、经典老片、冷门佳作持续上新',
      '热门电视剧集集更新，追更不再断档',
      '高分综艺、热血动漫一网打尽',
    ],
  },
  {
    icon: Zap,
    title: '高清流畅播放',
    items: [
      '多清晰度智能适配，支持超清画质',
      '强力缓冲算法，弱网也不易卡顿',
      '极速起播，一点即看',
    ],
  },
  {
    icon: MonitorPlay,
    title: '离线缓存',
    items: [
      '一键缓存到本地，随时离线观看',
      '通勤、出差、无网络环境友好',
      '缓存管理清晰，删除方便',
    ],
  },
  {
    icon: Cloud,
    title: '继续观看',
    items: [
      '播放进度自动云端同步',
      '跨设备接着看，无缝衔接',
      '个人追剧历史一目了然',
    ],
  },
  {
    icon: Search,
    title: '智能搜索发现',
    items: [
      '关键词直达，模糊搜索也精准',
      '热门榜单与个性化推荐',
      '分类筛选，快速找到想看的内容',
    ],
  },
  {
    icon: Shield,
    title: '安全纯净体验',
    items: [
      '清爽无广告打扰',
      '播放稳定，闪退率极低',
      '尊重用户隐私，专注观影本身',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="功能特性"
        description="从海量片库到流畅体验，电影狗把每一个观影细节都做到位。"
      />
      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-3xl border border-white/10 bg-[#15151b] p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/12 text-brand">
                  <g.icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-bold">{g.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] bg-gradient-to-b from-brand/15 to-transparent p-10 text-center">
            <Gift className="h-8 w-8 text-brand" />
            <h2 className="text-2xl font-extrabold">体验完整功能</h2>
            <p className="max-w-md text-zinc-400">
              立即下载安卓版，解锁全部特性，开启高清观影之旅。
            </p>
            <DownloadButton label="安卓 APK 免费下载" />
          </div>
        </div>
      </section>
    </>
  );
}