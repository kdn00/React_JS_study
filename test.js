// 괄호 안에 이상한 문법이 들어가 버렸습니다...!
const newFunctionWrong = () => { a: '나는객체요소' };

// 소괄호로 감싸게 되면 객체 자체를 리턴할 수가 있게 됩니다.
const newFunction = () => (a, { a: '나는객체요소' });

console.log(newFunction());