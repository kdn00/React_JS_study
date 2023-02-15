// React 컴포넌트를 만들 때는 아래의 import문을 통해 React를 불러와야 한다.
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        Hello ReactJs!
      </div>
    )
  }
}
// App라는 컴포넌트를 내보내겠다는 의미다. 이렇게 해준다면, 다른 컴포넌트에서 불러와서 사용할 수 있다.
export default App;
