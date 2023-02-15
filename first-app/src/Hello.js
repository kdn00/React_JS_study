import React from 'react';

// function Hello(props)로 쓸 때는 내부의 값을 조회할 때 props.를 추가로 입력해야한다.
// ex) props.color, props.name
function Hello({ color, name }) {
  return <h3 style={{color}}>컴포넌트 사용 Test {name}</h3>
}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;