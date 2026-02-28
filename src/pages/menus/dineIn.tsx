import React from "react";
// @ts-ignore

const dineIn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 max-w-6xl w-full">
      <img
        className="w-full h-auto mt-4 rounded-lg shadow-md"
        src="../../public/images/DinnerMenu/comboMenu.png"
        alt="Dine In Menu"
      />
      <img
        className="w-full h-auto mt-4  rounded-lg shadow-md"
        src="../../public/images/DimsumMenu/MenuDimsum1.jpg"
        alt="Dine In Menu"
      />
      <img
        className="w-full h-auto mt-4  rounded-lg shadow-md"
        src="../../public/images/DimsumMenu/MenuDimsum2.jpg"
        alt="Dine In Menu"
      />
    </div>
  );
};

export default dineIn;
