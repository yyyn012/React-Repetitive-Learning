import React, { useEffect } from "react";

function UseEffectApp() {
  console.log("useEffect 전");

  //useEffect도 함수이기 때문에 함수 호출
  useEffect(() => {
    console.log("a");
    const hi = document.getElementById("hi");
    hi.innerText = "b";
  });

  console.log("useEffect 후");

  return (
    <div className="useEffectApp">
      <h1 id="hi">hello</h1>
    </div>
  );
}

export default UseEffectApp;

//useEffect가 실행되는 시점은 컴포넌트가 렌더링된 이후이다.
// 첫번째는 맨 처음 컴포넌트가 렌더링되어 화면(DOM)에 마운트되는 시점
// 두번째는 state나 prop이 변하여 컴포넌트가 재렌더링되는 시점

// useEffect가 렌더링이 일어난 이후에 실행되는 이유는 렌더링이 다 이루어지기 전에 useEffect가 동작해서 컴포넌트 외부에 존재하는 DOM이 접근하지 못하는 상황이 발생할 수 있기 때문이다.

// 따라서 REACT는 useEffect와 같은 side effect가 발생하는 시점이 렌더링이 발생하는 이후여야 적당하다고 판단한 것이다.
