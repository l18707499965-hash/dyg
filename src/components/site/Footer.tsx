import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Logo } from './Logo';
import { DownloadButton } from './DownloadButton';

const columns = [
  {
    title: '产品',
    links: [
      { href: '/features', label: '功能特性' },
      { href: '/download', label: '安卓下载' },
      { href: '/changelog', label: '更新日志' },
    ],
  },
  {
    title: '支持',
    links: [
      { href: '/faq', label: '常见问题' },
      { href: '/about', label: '关于我们' },
      { href: '/privacy', label: '隐私政策' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070b] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed">
              {siteConfig.name}，你的掌上观影伙伴。海量影视资源随心看，高清流畅不卡顿。
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold text-white">立即下载</h3>
            <p className="mt-4 mb-4 text-sm leading-relaxed">
              支持 Android 设备，免费安装。安装时请允许“未知来源”。
            </p>
            <DownloadButton size="sm" label="安卓 APK 下载" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-zinc-600">
            本站为 {siteConfig.name} 影视应用官方介绍页。
          </p>
        </div>
      </div>
    </footer>
  );
}