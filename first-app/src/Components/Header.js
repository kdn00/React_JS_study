import React from "react";
import "./Header.css";

// function Hello(props)로 쓸 때는 내부의 값을 조회할 때 props.를 추가로 입력해야한다.
// ex) props.color, props.name
// props 대신 함수의 파라미터에서 비구조화 할당 (혹은 구조 분해라고도 불립니다) 문법을 사용하면 조금 더 코드를 간결하게 작성 할 수 있습니다.
function Header() {
  return (
    <div class="v11_147">
      <span class="v11_148">로그인</span>
      <span class="v11_149">회원가입</span>
      <div class="v11_151"></div>
      <div class="v11_152"></div>
      <div class="v11_153"></div>
      <span class="v11_154">검색</span>
      <span class="v11_155">검색어를 입력하세요.</span>
      <span class="v11_156">메인 페이지</span>
      <span class="v11_157">뉴스</span>
      <span class="v11_158">판례</span>
      <span class="v11_159">업무방법</span>
      <span class="v11_160">평가</span>
      <span class="v11_161">QnA</span>
      <div class="v11_162"></div>
      <span class="v11_163">로고</span>
    </div>
  )
}
export default Header;
