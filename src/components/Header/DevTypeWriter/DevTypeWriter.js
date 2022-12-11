import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const DevTypeWriter = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer", "Web Developer", "Web Designer"],
    loop: 10000000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div>
      <h4> A 
       <span style={{ color: 'var(--color-primary)',marginLeft:"3px", fontWeight: 'bolder' }}>{text}</span>
      <Cursor cursorColor="var(--color-primary)" />
      </h4>
    </div>
  );
};

export default DevTypeWriter;
