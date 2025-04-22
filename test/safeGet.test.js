import { safeGet } from '../src/safeGet.js';

console.log('[safeGet 테스트]');
const obj = { user: { name: 'Alice', age: 25 } };
console.log(safeGet(obj, 'user.name') === 'Alice' ? '✅ 통과' : '❌ 실패');
console.log(safeGet(obj, 'user.gender', '여') === '여' ? '✅ 통과' : '❌ 실패');