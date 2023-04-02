import React from "react";

// apply sys base settings
const SysBase = (props: any) => {
  return (
    <div className="w-full relative">
      <div className="bg-black w-full absolute bottom-0 h-[300px]">
        {props.children}
      </div>
    </div>
  );
};

export default SysBase;
