/**
 * 电影狗 - 官方站点配置
 * 集中管理品牌信息、链接与 SEO 相关常量，供各页面复用。
 */

// 运行时域名（对外访问），禁止硬编码
export const SITE_URL = (
  process.env.COZE_PROJECT_DOMAIN_DEFAULT ||
  'https://movie-dog.example.com'
).replace(/\/$/, '');

export const siteConfig = {
  name: '电影狗',
  shortName: '电影狗',
  description:
    '电影狗是一款专为安卓用户打造的高清影视追剧应用。海量电影、电视剧、综艺、动漫一网打尽，支持在线播放与离线缓存，让好剧不等待，观影更尽兴。',
  url: SITE_URL,
  icon: `${SITE_URL}/icon-app.png`,
  appleIcon: `${SITE_URL}/apple-icon.png`,
  // 安卓 APK 下载地址
  downloadUrl:
    'https://bos.liao-hai.chat/yxq/%e7%94%b5%e5%bd%b1%e7%8b%97.apk',
  // 百度统计
  baiduStatsId: '23a0259852427a0c040f669ffca6b00d',
  keywords: [
    '电影狗',
    '电影狗app',
    '电影狗安卓版',
    '电影狗官方下载',
    '电影狗最新版',
    '免费看电影',
    '高清影视app',
    '追剧软件',
    '在线看剧',
    '离线缓存',
    '安卓视频软件',
    '影视大全',
    '看剧不用等',
  ],
};