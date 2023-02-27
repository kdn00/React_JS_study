// React 컴포넌트를 만들 때는 아래의 import문을 통해 React를 불러와야 한다.
import React from 'react';
import './App.css';
import Header from './Components/Header';

// React에는 클래스형과 함수형 컴포넌트가 있다.
// 최근에 나온 함수형이 좀 더 사용하기 수월하다.
function App() {
  return (
      <div
        style={{
          position: "relative",
          height: 1080,
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            width: 1920,
            top: 24,
            height: 117,
            backgroundColor: "#ffffff",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              position: "absolute",
              left: 1828,
              width: "max-content",
              top: 0,
              color: "#000000",
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            로그인
          </p>
          <p
            style={{
              position: "absolute",
              left: 1695,
              width: "max-content",
              top: 0,
              color: "#000000",
              fontSize: 20,
              fontWeight: 400,
            }}
          >
            회원가입
          </p>
          <div
            style={{
              position: "absolute",
              left: 0,
              width: 1920,
              top: 42,
              height: 74,
              backgroundColor: "#e4e4ff",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 1450,
              width: 449,
              top: 54,
              height: 51,
              backgroundColor: "#ffffff",
              borderRadius: 10,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 1806,
              width: 102,
              top: 54,
              height: 51,
              backgroundColor: "#5d67c2",
              borderRadius: 10,
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 1826,
              width: 62,
              top: 28,
              height: 51,
              color: "#ffffff",
              fontSize: 25,
              fontWeight: 700,
              lineHeight: "51px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            검색
          </p>
          <p
            style={{
              position: "absolute",
              left: 1462,
              width: "max-content",
              top: 28,
              color: "#8a96be",
              fontSize: 25,
              fontWeight: 700,
              lineHeight: "51px",
            }}
          >
            검색어를 입력하세요.
          </p>
          <p
            style={{
              position: "absolute",
              left: 411,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            메인 페이지
          </p>
          <p
            style={{
              position: "absolute",
              left: 642,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            뉴스
          </p>
          <p
            style={{
              position: "absolute",
              left: 796,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            판례
          </p>
          <p
            style={{
              position: "absolute",
              left: 1109,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            업무방법
          </p>
          <p
            style={{
              position: "absolute",
              left: 1309,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            평가
          </p>
          <p
            style={{
              position: "absolute",
              left: 950,
              width: "max-content",
              top: 17,
              color: "#000000",
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "74px",
            }}
          >
            QnA
          </p>
          <div
            style={{
              position: "absolute",
              left: 22,
              width: 304,
              top: 43,
              height: 73,
              backgroundColor: "#0043a7",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 151,
              width: "max-content",
              top: 20,
              color: "#ffffff",
              fontSize: 25,
              fontWeight: 700,
              lineHeight: "73px",
            }}
          >
            로고
          </p>
        </div>
      </div>
  )
}
export default App;
