import { assertDefined } from '../src/assertDefined.js';

console.log('[assertDefined 테스트]');
try {
  assertDefined('값');
  console.log('✅ 통과');
} catch (e) {
  console.log('❌ 실패');
}

try {
  assertDefined(undefined);
  console.log('❌ 실패');
} catch (e) {
  console.log('✅ 통과');
}