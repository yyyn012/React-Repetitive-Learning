import React, { useState, useEffect } from "react";

const DropMenu = (props) => {
  const [visibilityAni, setVisibilityAni] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAni(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAni(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <article
      className={`components_dropdown ${
        props.visibility ? "slide_fadeIn" : "slide_fadeOut"
      }`}
    >
      {visibilityAni && props.children}
    </article>
  );
};

export default DropMenu;
