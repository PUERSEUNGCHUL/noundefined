# noundefined

> 예상치 못한 null/undefined로 인한 오류를 막기 위한 자바스크립트 유틸리티 모음입니다.

## ✨ 주요 기능

### 1. `safeGet(obj, path, fallback)`
- 객체 내부 값을 안전하게 꺼냅니다.
- 예: `safeGet(user, 'profile.name', '이름없음')`

### 2. `assertDefined(value, message?)`
- 값이 null/undefined인 경우 에러를 던집니다.
- 예: `assertDefined(user.name)`

### 3. `withDefaults(obj, defaults)`
- 누락된 값을 기본값으로 채워줍니다.
- 예: `withDefaults({ age: 10 }, { name: '홍길동', age: 0 })`

### 4. `isFalsyExceptZero(value)`
- falsy 값 판별에서 0은 제외합니다.
- 예: `isFalsyExceptZero('') → true`, `isFalsyExceptZero(0) → false`

### 5. `nullGuard(fn, fallback)`
- 콜백 실행 시 null/undefined 예외 방지, 대신 fallback 반환
- 예: `nullGuard(() => user.profile.name, '이름없음')`

---

## 🧪 테스트 실행

```bash
node test/safeGet.test.js
node test/assertDefined.test.js
```

---

## 👀 제작 포인트

- 실무에서 자주 겪는 null/undefined 관련 버그를 해결하기 위해 제작
- 누구나 안전하게 사용할 수 있는 자바스크립트 유틸 제공