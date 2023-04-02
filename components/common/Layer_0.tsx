import React from "react";

// this locks the screen in fixed to 100%
// this forms the main view where views are rendered
const Layer_0 = (props: any) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-red-600">
      {props.children}
    </div>
  );
};

export default Layer_0;
