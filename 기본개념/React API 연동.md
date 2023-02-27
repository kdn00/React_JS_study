### 1. API 연동의 기본
---
- API 연동을 위해 프로젝트를 새로 하나 만들겠습니다.
```javascript
$ npx create-react-app api-integrate
```

- 그리고, API를 호출하기 위해서 axios라는 라이브러리를 설치합니다.
```javascript
$ cd api-integrate
$ npm add axios
```

- axios를 사용해서 GET, PUT, POST, DELETE 등의 메서드로 API 요청을 할 수 있다.
- 메서드들은 다음 의미를 가지고 있다.
```
GET: 데이터 조회
POST: 데이터 등록
PUT: 데이터 수정
DELETE: 데이터 제거
이 외에도 PATCH, HEAD와 같은 메서드들도 있다.
```

- axios의 사용법은 다음과 같다.
```javascript
import axios from 'axios';

axios.get('/users/1');
// get이 위치한 자리에는 메서드 이름을 소문자로 넣는다.
// 예를 들어서 새로운 데이터를 등록하고 싶다면 axios.post()를 사용하면 된다.
// 그리고, 파라미터에는 API의 주소를 넣는다.
```

- axios.post()로 데이터를 등록할 때에는 두번째 파라미터에 등록하고자 하는 정보를 넣을 수 있다.
```javascript
axios.post('/users', {
    username: 'blabla',
    name: 'blabla'
});
```

- API 연동 실습을 할 때 JSONPlaceholder에 있는 연습용 API를 사용
- 사용할 API 주소 : https://jsonplaceholder.typicode.com/users
- 해당 API는 다음과 같은 형식으로 이루어져 있다.
```javascript
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  (...)
]
```

#### useState와 useEffect로 데이터 로딩하기
---
- useState를 사용하여 요청 상태를 관리하고, useEffect를 사용하여 컴포넌트가 렌더링되는 시점에 요청을 시작하는 작업을 한다.
- 요청에 대한 상태를 관리할 때에는 다음과 같이 총 3가지 상태를 관리한다.
```javascript
1. 요청의 결과 users
2. 로딩 상태 loading
3. 에러 error
ex)
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
```
**- src 컴포넌트에 Users.js 를 생성하고 다음 코드를 작성해보세요.(파일과 참고)**
- 참고로, useEffect 에 첫번째 파라미터로 등록하는 함수에는 async 를 사용 할 수 없기 때문에 함수 내부에서 async 를 사용하는 새로운 함수를 선언해주어야 합니다.
- 로딩 상태가 활성화 됐을 땐 로딩중.. 이라는 문구를 보여줬습니다.
- 그리고, users 값이 아직 없을 때에는 null 을 보여주도록 처리했습니다.
- 맨 마지막에서는 users 배열을 렌더링하는 작업을 해주었습니다.
- 이제 이 컴포넌트가 잘 작동하는지 확인해봅시다. App 컴포넌트에서 User 컴포넌트를 렌더링해보세요.
```javascript
// Can't resolve 'axios' in~ 에러 발생함. 이유 : axios 모듈을 설치하지 않아서...
function App() {
  return <Users />;
}
```

### 2. useReducer로 요청 상태 관리하기
---
- 이전에 구현한 User 컴포넌트에서 useState 대신에 useReducer를 사용해서 구현하기
- useReducer를 사용하여 LOADING, SUCCESS, ERROR 액션에 따라 다르게 처리해보자.
```javascript
./api-integrate/src/Users_useReducer.js 파일 참고
```
**useReducer 로 구현했을 때의 장점** : useState 의 setState 함수를 여러번 사용하지 않아도 된다는점과, 리듀서로 로직을 분리했으니 다른곳에서도 쉽게 재사용을 할 수 있다는 점이다.
- 물론, 취향에 따라 useState 로 구현을 해도 무방하다.
- 다음 섹션에서는 이번에 만든 reducer를 기반으로, 커스텀 Hook을 만들어보자.