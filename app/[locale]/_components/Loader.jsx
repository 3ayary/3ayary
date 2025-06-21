import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[75vh] ">
      <div className="spinner ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
