import React from "react";

const Nav = () => {
  return (
    <div className=" w-full bg-[#363636] text-white p-5 flex justify-between items-center ">
      {/* nav item */}
      <div>
        <ul className="flex justify-between items-center gap-24">
          <li>Home</li>
          <li>Event</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>

      {/* search box */}

      <div className="">
        <input
          className=" rounded-full w-96 px-4 py-2"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

export default Nav;
