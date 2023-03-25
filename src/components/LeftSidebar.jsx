import { useAppContext } from "../contexts/AppContext";

const LeftSidebar = () => {
  const { toggleDropBoard, openDropBoard } = useAppContext();
  return (
    <>
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}

      <div className="sm:w-[200px] lg:w-[250px] h-screen px-6 py-7 bg-[#1c1c1c] fixed left-0 top-0 border-r-2 border-[#282929] z-20 sm:block hidden overflow-y-auto">
        {/* logo */}
        <div className="flex item-center gap-3">
          <img alt="user" src="/images/ByeWind.png" className="w-7 h-7" />
          <h1 className="text-white">Versastyle Inc.</h1>
        </div>

        {/* nav */}
        <nav className="mt-10">
          {/* favorites/recently */}
          <div>
            <div className="flex gap-4 ">
              <p className="text-white/40 cursor-pointer">Favorites</p>
              <p className="text-white/20 cursor-pointer">Recently</p>
            </div>
          </div>

          {/* favorites list */}
          <div className="mt-3">
            <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              <p>Versastyle: Toronto</p>
            </div>
            <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              <p>Versastyle: Regina</p>
            </div>
          </div>
        </nav>

        {/* Dashboards */}
        <nav className="mt-10">
          {/* Dashboards */}
          <div>
            <div className="">
              <p className="text-white/40">Dashboards</p>
            </div>
          </div>

          {/* Dashboards list */}
          <div className="mt-3">
            <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
              <img
                alt="arrow"
                src="/images/ArrowDown.png"
                className="w-4 h-4"
              />
              <div className="flex gap-2 items-center cursor-pointer">
                <img
                  alt="building"
                  src="/images/Buildings.png"
                  className="w-5 h-5"
                />

                <p>Event Selection</p>
              </div>
            </div>
            <div className="text-white/80 text-[.9rem] mb-2 ml-14 cursor-pointer">
              <p>Add Event</p>
            </div>
          </div>
        </nav>

        {/* pages */}
        <nav className="mt-10">
          {/* Pages */}
          <div>
            <div className="">
              <p className="text-white/40">Global Settings</p>
            </div>
          </div>

          {/* Pages list */}
          <div className="mt-3">
            <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
              <img
                alt="arrow"
                src="/images/ArrowDown.png"
                className="w-4 h-4"
              />
              <div className="flex gap-2 items-center cursor-pointer">
                <img
                  alt="building"
                  src="/images/GearSix.png"
                  className="w-5 h-5"
                />

                <p>Settings</p>
              </div>
            </div>
          </div>
        </nav>

        {/* logo */}
        <img
          alt="building"
          src="/images/Logo.png"
          className="w-[130px] h-auto absolute bottom-8"
        />
      </div>

      {/* mobile and small screens UI */}
      {/* mobile and small screens UI */}
      {/* mobile and small screens UI */}
      {openDropBoard && (
        <div className="w-[70%] h-screen px-6 py-7 bg-[#1c1c1c] fixed left-0 top-0 border-r-2 border-[#282929] z-30 block sm:hidden slideR overflow-y-auto">
          {/* logo */}
          <div className="flex item-center gap-3">
            <div
              onClick={toggleDropBoard}
              className="w-7 h-7 mr-5 flex justify-center items-center bg-white/80 rounded-full cursor-pointer"
            >
              <img
                alt="user"
                src="/images/icons8-close-50.png"
                className="w-4 h-4"
              />
            </div>
            <img alt="user" src="/images/ByeWind.png" className="w-7 h-7" />
            <h1 className="text-white">Versastyle Inc.</h1>
          </div>

          {/* nav */}
          <nav className="mt-10">
            {/* favorites/recently */}
            <div>
              <div className="flex gap-4 ">
                <p className="text-white/40 cursor-pointer">Favorites</p>
                <p className="text-white/20 cursor-pointer">Recently</p>
              </div>
            </div>

            {/* favorites list */}
            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <p>Versastyle: Toronto</p>
              </div>
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <p>Versastyle: Regina</p>
              </div>
            </div>
          </nav>

          {/* Dashboards */}
          <nav className="mt-10">
            {/* Dashboards */}
            <div>
              <div className="">
                <p className="text-white/40">Dashboards</p>
              </div>
            </div>

            {/* Dashboards list */}
            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
                <img
                  alt="arrow"
                  src="/images/ArrowDown.png"
                  className="w-4 h-4"
                />
                <div className="flex gap-2 items-center cursor-pointer">
                  <img
                    alt="building"
                    src="/images/Buildings.png"
                    className="w-5 h-5"
                  />

                  <p>Event Selection</p>
                </div>
              </div>
              <div className="text-white/80 text-[.9rem] mb-2 ml-14 cursor-pointer">
                <p>Add Event</p>
              </div>
            </div>
          </nav>

          {/* pages */}
          <nav className="mt-10">
            {/* Pages */}
            <div>
              <div className="">
                <p className="text-white/40">Global Settings</p>
              </div>
            </div>

            {/* Pages list */}
            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
                <img
                  alt="arrow"
                  src="/images/ArrowDown.png"
                  className="w-4 h-4"
                />
                <div className="flex gap-2 items-center cursor-pointer">
                  <img
                    alt="building"
                    src="/images/GearSix.png"
                    className="w-5 h-5"
                  />

                  <p>Settings</p>
                </div>
              </div>
            </div>
          </nav>

          {/* logo */}
          <img
            alt="building"
            src="/images/Logo.png"
            className="w-[130px] h-auto absolute bottom-8"
          />
        </div>
      )}
      {openDropBoard && (
        <div
          onClick={toggleDropBoard}
          className="w-full h-screen block sm:hidden fixed left-0 top-0 bg-black/60 z-20 appear"
        ></div>
      )}
    </>
  );
};

export default LeftSidebar;
