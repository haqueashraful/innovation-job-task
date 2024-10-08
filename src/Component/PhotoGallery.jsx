const PhotoGallery = () => {
  return (
    <div className="container-rn w-full flex justify-between gap-60 items-center">
      {/* photo */}
      <div className=" w-1/2  grid grid-cols-2 grid-rows-2 justify-center items-center gap-4 text-white text-2xl font-bold">
        {/* photo 1 */}
        <div className=" flex justify-center items-center">
          <div className="photo1">Photo 1</div>
        </div>

        {/* photo 2 */}
        <div className=" row-span-2 flex items-center justify-center">
          <div className="photo2">Photo 2</div>
        </div>

        {/* photo 3 */}
        <div className=" flex justify-center items-center">
          <div className="photo3">Photo 3</div>
        </div>
      </div>

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
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
