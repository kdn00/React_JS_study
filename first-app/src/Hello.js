import React from 'react';

// function Hello(props)로 쓸 때는 내부의 값을 조회할 때 props.를 추가로 입력해야한다.
// ex) props.color, props.name
// props 대신 함수의 파라미터에서 비구조화 할당 (혹은 구조 분해라고도 불립니다) 문법을 사용하면 조금 더 코드를 간결하게 작성 할 수 있습니다.
function Hello({ color, name }) {
  return <h3 style={{color}}>컴포넌트 사용 Test {name}</h3>
}

// 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정하면 됩니다.
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;