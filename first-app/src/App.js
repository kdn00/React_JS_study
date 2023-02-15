// React 컴포넌트를 만들 때는 아래의 import문을 통해 React를 불러와야 한다.
import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

// React에는 클래스형과 함수형 컴포넌트가 있다.
// 최근에 나온 함수형이 좀 더 사용하기 수월하다.
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정

  }

  return (
    // React의 Fragment : 단순히 감싸기를 위해 불필요한 div로 감싸는게 별로 좋지 않을 때 쓰는 것이다.
    // 사용법 : 태그를 작성 할 때 이름 없이 <>만 작성하게 되면 Fragment가 만들어진다.
    <>
    <Wrapper>
    <Hello name="props 전달" color="indigo" />
    {/* JSX 내부의 주석 방법 */}
    {/* JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줍니다. */}
    <div style={style}>{name}</div>

    {/* CSS class 를 설정 할 때에는 class= 가 아닌 className= 으로 설정을 해주어야 합니다. */}
    <div className="gray-box"></div>
    <Hello color="pink"/>
    </Wrapper>
    </>
  );
}
// App라는 컴포넌트를 내보내겠다는 의미다. 이렇게 해준다면, 다른 컴포넌트에서 불러와서 사용할 수 있다.
export default App;
