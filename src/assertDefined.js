// null 또는 undefined일 경우 예외를 던집니다 (필수값 검증용)
export function assertDefined(value, message = '값이 null 또는 undefined입니다') {
  if (value === undefined || value === null) {
    throw new Error(message);
  }
  return value;
}