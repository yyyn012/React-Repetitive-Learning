import React, { useState } from "react";
import DropMenu from "./DropMenu";

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={openMenu}>메뉴 보기{isOpen ? "close" : "open"}</button>

      <DropMenu visibility={isOpen}>
        <ul>
          <li>마이페이지</li>
          <li>마이페이지2</li>
          <li>마이페이지3</li>
        </ul>
      </DropMenu>
    </div>
  );
};

export default DropdownMenu;
