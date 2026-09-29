import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { DownloadButton } from '@/components/site/DownloadButton';
import { JsonLd } from '@/components/site/JsonLd';

export const metadata: Metadata = {
  title: '常见问题 FAQ',
  description:
    '电影狗安装与使用常见问题解答：下载失败、安装被拦截、无法播放、缓存异常等，一站解决你的观影疑问。',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    q: '电影狗是免费的吗？',
    a: '是的，电影狗提供免费的在线观影服务，安装即可使用，无需付费，无需注册账号。',
  },
  {
    q: '如何下载安装电影狗安卓版？',
    a: '在官网下载页点击“安卓 APK 下载”按钮，将安装包保存到手机后点击安装即可。首次安装需在系统设置中允许“安装未知来源应用”。',
  },
  {
    q: '为什么下载/安装时被系统拦截？',
    a: '出于安全考虑，安卓系统默认禁止安装非应用市场来源的应用。请在安装前开启“允许安装未知来源应用”，关闭“纯净模式”后重试即可。安装包来自官网安全通道，请放心使用。',
  },
  {
    q: '支持哪些系统版本？',
    a: '电影狗支持 Android 6.0 及以上版本，适配绝大多数手机与平板设备。',
  },
  {
    q: '播放时卡顿怎么办？',
    a: '可尝试切换清晰度或切换播放线路；同时建议保持网络稳定，必要时清理缓存后重试。',
  },
  {
    q: '可以离线缓存影片吗？',
    a: '支持。点击片源下载/缓存按钮即可将内容保存到本地，在无网环境下也能观看。',
  },
  {
    q: '需要注册账号吗？',
    a: '不需要。安装后即可直接浏览和观影，无需任何注册流程，开箱即用。',
  },
  {
    q: '缓存的内容存在哪里？内存不足怎么办？',
    a: '缓存内容默认保存在应用缓存目录，可在应用设置中清理不需要的缓存以释放空间。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="常见问题"
        description="关于下载、安装与使用的常见疑问，这里都有答案。"
      />
      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
          <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#15151b]">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group px-6 py-5"
                open={false}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:hidden">
                  {f.q}
                  <span className="shrink-0 text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <aside className="h-fit rounded-3xl border border-brand/25 bg-gradient-to-b from-brand/15 to-transparent p-7 text-center">
            <h2 className="text-lg font-bold">还有疑问？</h2>
            <p className="mt-3 mb-6 text-sm text-zinc-400">
              直接下载体验，大多数问题都能在几分钟内解决。
            </p>
            <DownloadButton label="安卓 APK 下载" size="sm" />
          </aside>
        </div>
      </section>
    </>
  );
}