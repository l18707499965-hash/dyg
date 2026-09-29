import { siteConfig } from '@/lib/site';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  label?: string;
  sub?: string;
  size?: 'sm' | 'lg';
  className?: string;
}

/**
 * 安卓 APK 下载按钮（未留下邮箱，仅安卓下载地址）
 */
export function DownloadButton({
  label = '安卓 APK 免费下载',
  sub,
  size = 'lg',
  className = '',
}: DownloadButtonProps) {
  const lg = size === 'lg';
  return (
    <a
      href={siteConfig.downloadUrl}
      className={`group inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(229,9,20,0.7)] ${
        lg ? 'px-7 py-4 text-lg' : 'px-5 py-2.5 text-sm'
      } bg-brand ${className}`}
    >
      <span className="inline-flex items-center gap-2">
        <Download className={lg ? 'h-5 w-5' : 'h-4 w-4'} aria-hidden />
        {label}
      </span>
      {sub && (
        <span className={`opacity-90 ${lg ? 'text-xs' : 'text-[11px]'}`}>
          {sub}
        </span>
      )}
    </a>
  );
}