import React from "react";

const Explore = () => {
  return (
    <div className="container-rn flex justify-between items-center">
      {/* text */}

      <div className=" w-1/2 items-center">
        <p className=" text-2xl text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>

        <div className="flex justify-center items-center mt-10">
          <button className="px-4  py-2 border-2 rounded-full border-blue-400 bg-white text-blue-400  hover:bg-blue-400 hover:text-white items-center">
            Explore more
          </button>
        </div>
      </div>

      {/* card */}

      <div className="w-1/2">
        <div className="relative left-[20%] right-0">
          <div className="w-[390px] h-[390px] bg-[#1F3B68] rounded-lg absolute z-30"></div>
          <div className="w-[360px] h-[360px] bg-[#980FA7] rounded-lg absolute z-20 left-[60px] top-[15px] "></div>
          <div className="w-[330px] h-[330px] bg-[#31096A] rounded-lg  absolute z-10 left-[120px] top-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
