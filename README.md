![logo](https://images.velog.io/images/eamon3481/post/e4f212bc-eac2-407e-a128-55224f85c2a6/og-image.png)

# GraphQL

-   Stack - Expess, Typescript, GraphQL, Apollo-Server, Mysql

-   Vercel Serverless 배포

    -   vercel.json 서버리스 환경셋팅
    -   pre-commit Vercel 서버에 컴파일된 js소스를 전송해서 빌드하고 프로젝트 빌드

        <br />

#### Node.js Express에 GraphQL과 API 구축해서 활용하기 위해서 구축

```
GraphQL 런닝커브가 있으며 schema, resolver 개념이 필요하다.
gql 문법을 학습해야한다.
```

## GraphQL 사용하는이유?

```
Restfull API를 사용하면 over-fetching 문제가 생기며 새로운 기능을 만들때마나 새로운 API가 필요하다.
반면에 GraphQL API를 사용하면 원하는 데이터만 반환받아서 데이터를 활용할 수 있고 over-fetching 문제를
해결하며 빠르고 안정적이다.
```

-   GraphQL?
    -   HTTP에 하나의 엔드포인트로 배포됨
    -   API 버저닝이 필요 없음
    -   응답이 JSON으로 출력됨
    -   client-driven 아키텍처를 사용
