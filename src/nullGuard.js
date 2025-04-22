// 콜백 실행 시 null/undefined 체크 후 실행, 아니면 fallback 반환
export function nullGuard(fn, fallback) {
  try {
    const result = fn();
    return result === undefined || result === null ? fallback : result;
  } catch (e) {
    return fallback;
  }
}