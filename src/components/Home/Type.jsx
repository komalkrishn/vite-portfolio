import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
         '<span style="color: #27ae60;">MERN Stack Developer</span>',
         '<span style="color:rgb(174, 39, 169);">DataScience loading...</span>'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
