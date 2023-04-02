import React from "react";

// this locks the screen in fixed to 100%
// this forms the main view where views are rendered
// apply layer 0 effects
const Layer_0 = (props: any) => {
  return (
    <div className="fixed top-0 left-0 bg-t-green flex w-full h-full">
      {props.children}
    </div>
  );
};

export default Layer_0;
