export const headers = {
  authority: 'live.azavt.com',
  accept: 'application/json, text/plain, */*',
  'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'cache-control': 'no-cache',
  'content-type': 'application/json',
  origin: 'https://px.azavt.com',
  pragma: 'no-cache',
  referer: 'https://px.azavt.com/',
  'user-agent':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1',
};

export function getHeaders() {
  return {
    ...headers,
    'x-forwarded-for': new Array(4)
      .fill(0)
      .map(() => parseInt(String(Math.random() * 255), 10))
      .join('.'), // 构造ip
  };
}
