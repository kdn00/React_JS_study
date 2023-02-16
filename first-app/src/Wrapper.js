import React from 'react';
// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회하면 됩니다.
// Wrapper에서 children을 렌더링하지 않으면 Wrapper로 감싸도 안에 내용이 보이지 않는다.
// 내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링해주어야 합니다.
function Wrapper({children}) {
  const style = {
    border: '2px solid blue',
    padding: '16px'
  };
  return (
    <div style={style}>
        {children}
    </div>
  )
}
export default Wrapper;