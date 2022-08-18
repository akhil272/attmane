import React from "react";

const Header = () => {
  return (
    <div className="fixed flex w-full bg-neutral-700 text-white px-4 h-20">
      <div className="flex justify-between w-full items-center">
        <h4 className="text-lg uppercase">Attmane</h4>
        <div>Home</div>
        <div>Case Studies</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
