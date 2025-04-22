// 객체에서 안전하게 값을 꺼냅니다 (경로가 없으면 fallback 반환)
export function safeGet(obj, path, fallback) {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj) ?? fallback;
}