import React, { useState } from "react";
import DropMenu from "./DropMenu";

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
    console.log("blur");
  };

  return (
    <div className="menu" onBlur={handleBlur}>
      <button onClick={openMenu}>메뉴 보기{isOpen ? "close" : "open"}</button>

      <DropMenu visibility={isOpen}>
        <ul>
          <li>
            <a href="">마이페이지</a>
          </li>
          <li>
            <a href="">마이페이지2</a>
          </li>
          <li>
            <a href="">마이페이지3</a>
          </li>
        </ul>
      </DropMenu>
    </div>
  );
};

export default DropdownMenu;
