### map()함수란?
---
- 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용 한다.
- 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다

**문법**
- arr.map(callbackFunction, [thisArg])
- arr.map(callbackFunction(currenValue, index, array), thisArg)
1) callbackFunction : 새로운 배열의 요소를 생성하는 함수로서 다음 세가지 인수를 갖는다.
    - currenVlaue : 현재 배열(arr) 내의 값들을 의미
    - index : 현재 배열 내 값의 인덱스를 의미
    - array : 현재 배열
2) thisArg(선택항목) : callback 함부 내부에서 사용할 this 레퍼런스를 설정한다.
```javascript
// Main.js
import React from 'react';
const Main = (props) => {
    return (
        <div>
			<h3>안녕하세요. {props.name} 입니다.</h3>
        </div>
    );
};
export default Main;
```
```javascript
// App.js
import React from 'react';
import Main from './Main';
const App = () => {
  const names = ["회원1", "회원2", "회원3"]
	const nameList = names.map((name) => (<Main name={name}/>))
	return (
		<div>
			{nameList}
		</div>
	);
}
export default App;
// 결과
// 안녕하세요 회원1 입니다.
// 안녕하세요 회원2 입니다.
// 안녕하세요 회원3 입니다.
```