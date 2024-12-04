import React, { useRef } from "react";
import useDetectClose from "../assets/hooks/useDetectClose";

const DropdownMenu = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropDownRef} className="menu">
      <button onClick={openMenu}>메뉴 보기</button>

      <ul className={isOpen ? "active" : ""}>
        <li>마이페이지</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
