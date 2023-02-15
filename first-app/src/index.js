import React from 'react'; // React 모듈
import ReactDOM from 'react-dom'; // React-Dom 모듈 : React 코드를 실제 HTML로 렌더링하기 위해 사용하는 도구
import App from './App'; // App.js 파일

ReactDOM.render(<App />, document.getElementById('root')); // id가 root인 element를 가져온다.
// render 함수 : 첫번째 인자에 담기는 파일(여기서는 App.js)을 불러와서
//              두 번째 인자로 담기는 HTML element(id='root'인 div)내에 React 코드를 렌더링 시키는 동작을 합니다.
