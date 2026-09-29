import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '隐私政策',
  description: '电影狗隐私政策，介绍我们如何收集、使用与保护你的信息，尊重并守护用户隐私。',
  alternates: { canonical: '/privacy' },
};

const sections = [
  {
    title: '一、信息收集',
    body: '为提供稳定的观影与下载服务，我们会在你使用过程中收集必要的基础信息（如设备类型、系统版本、网络状态、崩溃日志等）。这些信息仅用于优化服务与排查问题，不涉及个人敏感信息。',
  },
  {
    title: '二、信息使用',
    body: '我们仅在向你提供服务、改进产品体验、保障账号与数据安全的必要范围内使用上述信息，不会将其用于与观影服务无关的用途。',
  },
  {
    title: '三、信息存储与保护',
    body: '我们会采取合理的技术与管理措施保护你的数据安全，防止未经授权的访问、使用或泄露。非法定情形外，我们不会向任何第三方提供你的信息。',
  },
  {
    title: '四、离线缓存数据',
    body: '你通过离线缓存功能保存的内容仅存储在你的设备本地，用于你个人的离线观看，我们不会读取或上传你的本地缓存内容。',
  },
  {
    title: '五、第三方统计',
    body: '为改进官网访问体验，本站集成了第三方统计工具（如百度统计），其可能使用 Cookie 收集匿名访问数据。详细信息以其官方政策为准。',
  },
  {
    title: '六、政策更新',
    body: '我们可能会适时更新本政策。政策变更后，更新内容将在此页面公布，请定期查阅。持续使用即表示你接受更新后的政策。',
  },
  {
    title: '七、联系我们',
    body: '如你对隐私政策有任何疑问或建议，可通过官网反馈渠道联系我们。',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="隐私政策" description="更新日期：最近更新" />
      <section className="bg-[#0b0b10] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 leading-relaxed text-zinc-300">
            欢迎使用 {siteConfig.name}（以下简称“本应用”）。我们高度重视你的隐私，
            本政策旨在说明我们如何收集、使用与保护你的信息。请你仔细阅读并了解我们的
            相关做法。
          </p>
          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title} className="rounded-2xl border border-white/10 bg-[#15151b] p-6">
                <h2 className="text-lg font-bold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}