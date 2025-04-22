// 객체에 기본값을 채워 넣습니다 (누락된 키만)
export function withDefaults(obj, defaults) {
  return { ...defaults, ...obj };
}