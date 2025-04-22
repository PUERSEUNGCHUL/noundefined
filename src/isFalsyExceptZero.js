// 0은 제외하고 falsy한 값을 판별합니다
export function isFalsyExceptZero(value) {
  return !value && value !== 0;
}