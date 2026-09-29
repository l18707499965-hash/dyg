import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { DownloadButton } from '@/components/site/DownloadButton';

export const metadata: Metadata = {
  title: '更新日志',
  description:
    '电影狗历次版本更新日志，了解每个版本的新功能与优化改进，第一时间体验最新观影体验。',
  alternates: { canonical: '/changelog' },
};

const versions = [
  {
    version: '2.8.0',
    date: '最近更新',
    tag: '最新',
    notes: [
      '新增多线路智能切换，在线播放更稳定',
      '优化缓存机制，节省存储空间',
      '修复部分机型播放偶发卡顿问题',
      '更新热门影视资源，片库更丰富',
    ],
  },
  {
    version: '2.7.2',
    date: '上期版本',
    tag: '',
    notes: [
      '提升起播速度，点开即看',
      '优化“继续观看”同步体验',
      '修复若干界面显示问题',
    ],
  },
  {
    version: '2.7.0',
    date: '此前版本',
    tag: '',
    notes: [
      '全新首页推荐，内容更精准',
      '新增高清清晰度选项',
      '改进搜索联想功能',
    ],
  },
  {
    version: '2.6.0',
    date: '早期版本',
    tag: '',
    notes: [
      '支持离线缓存下载',
      '优化弱网环境播放体验',
      '整体性能与稳定性提升',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="更新日志"
        description="每一次更新，都为了让热剧离你更近一点。"
      />
      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            {versions.map((v) => (
              <li key={v.version} className="relative">
                <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-[#0b0b10] bg-brand" />
                <div className="rounded-3xl border border-white/10 bg-[#15151b] p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold">v{v.version}</h2>
                    {v.tag && (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold">
                        {v.tag}
                      </span>
                    )}
                    <span className="text-sm text-zinc-500">{v.date}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {v.notes.map((n) => (
                      <li key={n} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-[2rem] bg-gradient-to-b from-brand/15 to-transparent p-10 text-center">
            <h2 className="text-xl font-bold">体验最新版本</h2>
            <p className="text-sm text-zinc-400">升级到最新版，享受更好的观影体验。</p>
            <DownloadButton label="安卓 APK 下载" size="sm" />
          </div>
        </div>
      </section>
    </>
  );
}