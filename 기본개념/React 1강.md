### React란?
---
- 어떻게하면 사용자에게 View를 더 효율적으로 보여줄 수 있을지에서 시작한 라이브러리다.
- 그렇기 때문에 React는 오직 DOM 객체의 생성과 이벤트 응답에만 초점을 둔다.
- React 코드들은 눈에 쉽게 익힌다는 장점이 있기 때문에, Typescript와 함께 React를 사용한다면 더 쉽게 다른 사람의 코드를 읽고 유지보수를 수월하게 할 수 있다.

### 선언적이다.
---
- 대부분 React에서는 자동적으로 필요한 부분만 업데이트 하도록 최적화를 해준다.
- 선언만 하면 나머지 로직은 React에 맡기면 된다.

### 컴포넌트 기반 라이브러리
---
- 웹을 개발할 때 사이드바, 헤더 등을 하나의 컴포넌트로 묶어서 관리할 수 있다.
- 그렇기 때문에 React를 개발하다가 특정 부분에서 오류가 생긴다면 그 컴포넌트만 수정하면 된다.

### 무엇을 할 수 있나요?
---
- 'React' 한 가지 라이브러리로는 멋진 페이지들을 만들 수 없지만, React를 활용하면 훨씬 구조화되고 유지보수하기 쉬운 페이지를 만들 수 있다.
- SPA인 React를 활용할 경우 프론트엔드와 백엔드 영역이 완전히 분리되어 있기 때문에 개발 영역 분리가 가능해진다.(CSR 한정)

### 작업환경 준비
---
- Node.js : Webpack과 Babel같은 도구들은 JS 런타임인 Node.js를 기반으로 만들어져있기 때문에, 도구들을 사용하기 위해서 Node.js를 설치합니다.(안정된 버전을 설치하는걸 추천)
- Yarn : Yarn은 조금 개선된 버전의 npm이라고 생각하면 됩니다.
- 코드 에디터 : 평소에 사용하던 에디터를 사용하면 됩니다. (VSCode, Atom, WebStorm 등)

### React 프로젝트 생성하기
---
- 터미널에 프로젝트를 생성할 폴더 경로를 띄우고 아래의 코드를 입력한다.
```javascript
npx create-react-app 프로젝트명
```
- 위의 코드는 npx 저장소에서 create-react-app 패키지를 이용해 프로젝트를 생성하는 코드이다.
- 생성한 프로젝트를 실행하려면 프로젝트 경로로 이동한 후에 아래의 코드를 입력한다.
```javascript
yarn start
```

### React의 Component
---
- React는 여러 개의 컴포넌트 구조로 이루어져 있습니다.
- 때문에 아래의 코드처럼 각각의 부분을 분리해서 작업을 진행할 수 있습니다.
```javascript
<html>
    <head></head>
    <body>
        <Header/>
        <Main />
        <Footer />
    </body>
</html> 
```

### 부모-자식 컴포넌트, 어떻게 판단하는가?
---
- 부모-자식 컴포넌트를 결정짓는 기준은 **수직적인 구조로 나중에 들어간 컴포넌트가 자식 컴포넌트로 취급됩니다.**

### props & state
---
- props는 받은 데이터거나 생성된 데이터, 즉 데이터의 기원이 자기 자신이 아닌 것이고(Propertise)
- state는 자기 자신의 컴포넌트에서 만들어낸 데이터다.
- 어떤 컴포넌트를 기준으로 이야기하는지에 따라서 같은 데이터를 이야기하고 있을지라도 state가 될 수 있고, props가 될 수 있습니다.

**state**
- 현재 컴포넌트에서 생성, 변경할 수 있는 데이터입니다.
- state는 오직 state가 생성된 컴포넌트 내에서만 변경이 가능합니다. (달리 말하면 props는 읽기 전용으로 쓰입니다.)
- state를 선언, 정의, 출력하는 방법은 아래와 같습니다.
```javascript
class App extends Component{
    // 선언
    state = {
        // 정의
        helloMessage: 'Hello ReactJs!'
    };
    
    render(){
        return(
            <div className="App">
                <div>
                    {/* 출력 */}
                    <span>{this.state.helloMessage}</span>
                </div>
            </div>
        );
    }
}
export default App;
```
- state는 반드시 객체 형태로 생성되거나, null 타입이어야 합니다.
- state를 업데이트 하려면 무조건 **setState**라는 메소드를 사용해야만 합니다.
- 만약 **setState** 메소드를 사용하지 않고 state property에 접근해서 값을 변경하는 경우, 그 값이 실제 HTML상으로는 업데이트 되지 않습니다.
- React에서는 특정한 작업이 이루어졌을 때만 HTML이 업데이트 되도록 만든 규칙 중 하나가 바로 setState 실행입니다.
- setState메소드의 사용방법에는 여러 가지가 있지만, 일반적으로 class 컴포넌트에서는 setState( { 업데이트할 state property: 값 } )과 같은 객체 형태로 업데이트 합니다. (예시는 아래의 코드)
```javascript
this.setState({
    helloMessage: 'Change'
})
```
- 함수형 컴포넌트에서는 아래와 같이 state 선언, 변경 함수를 지정합니다.
```javascript
// useState의 첫 번째 파라미터는 '현재 상태'고, 두 번째 파라미터는 현재 상태를 바꿔주는 함수입니다.
// 따라서 아래의 message에는 "어서오십쇼!"라는 값이 들어있고, setMessage는 현재 상태를 바꿔줄 함수입니다.
const [message, setMessage] = useState("어서오십쇼!");

// 상태 변경 함수는 아래와 같이 사용합니다(화살표형 메소드 사용)
const onClickEnter = () => setMessage("주문 어떻게 해드릴까요?");
const onClickLeave = () => setMessage("안녕히 가세요. 다음에 뵙겠습니다!");
```