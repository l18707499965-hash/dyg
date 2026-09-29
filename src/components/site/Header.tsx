'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { DownloadButton } from './DownloadButton';

const nav = [
  { href: '/', label: '首页' },
  { href: '/features', label: '功能特性' },
  { href: '/download', label: '下载' },
  { href: '/faq', label: '常见问题' },
  { href: '/changelog', label: '更新日志' },
  { href: '/about', label: '关于我们' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b10]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <DownloadButton label="安卓下载" size="sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-[#0b0b10] px-4 py-3 md:hidden"
          aria-label="移动导航"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <DownloadButton label="安卓 APK 免费下载" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}