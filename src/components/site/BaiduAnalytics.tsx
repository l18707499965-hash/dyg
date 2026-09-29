import { siteConfig } from '@/lib/site';

/**
 * 全站第三方统计脚本：百度统计（官方嵌入代码，随 SSR 输出并在页面加载时执行）
 */
export function BaiduAnalytics() {
  if (!siteConfig.baiduStatsId) return null;
  const code = `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${siteConfig.baiduStatsId}";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}