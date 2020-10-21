# Node.js 테스트
## 1. 테스트 목적
Node.js 로 백엔드 API를 개발할 때 필요한 스킬셋(JavaScript, Database Query) 확인

## 2. 테스트 구성
### JavaScript
1. JavaScript Array Methods(map, filter, reduce) 를 사용해서 로직 구현
    - javascript/array_methods.js

2. JavaScript Promise, asnyc, await 개념이해 및 비동기 처리 
    - javascript/async.js

### Database 
1. MySQL2 라이브러리 [공식문서](https://www.npmjs.com/package/mysql2)를 읽고, 로컬 MySQL 서버를 연결하기
    - database/db.js

2. MySQL Raw Query 를 완성해서 users 테이블을 다루는 함수 구현하기 
    - database/query.js

**순서를 지켜서(로컬 MySQL 연결 => 쿼리문 작성) 코드를 작성 해 주세요.**

## 3. 테스트 진행 및 주의사항 
1. package.json 파일안에 스크립트 코드가 작성되어 있습니다. 
2. database, javascript 폴더안에 테스트코드가 작성되어 있습니다. 
3. data 폴더안에 테스트에 사용되는 mock data가 저장되어있습니다. 

**위에서 언급한 폴더와 파일들을 변형하거나 삭제하지 마세요.**

```
npm install
npm run test
```

해당 레포지토리를 클론 한 후, 위의 명령어를 순서대로 실행했을 시 모든 테스트 케이스에 대해 실패한 결과 화면이 나옵니다.  
테스트 코드가 작동하는지 먼저 확인한 후, 아래 네 파일에 대한 코드를 작성해 주세요.

- javascript/array_methods.js
- javascript/async.js
- database/db.js
- database/query.js

자세한 구현 내용은 각각의 함수 위의 주석을 참고해 주세요.