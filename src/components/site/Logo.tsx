import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} 首页`}
    >
      <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/15 shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/icon-app.png"
          alt={`${siteConfig.name} 图标`}
          width={40}
          height={40}
          className="object-cover"
          priority
        />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-white">
        电影<span className="text-brand">狗</span>
      </span>
    </Link>
  );
}