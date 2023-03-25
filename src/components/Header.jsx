import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { toggleNotifsBoard, toggleDropBoard, openSearch, toggleSearch } =
    useAppContext();

  return (
    <>
      {/* desktop ui */}
      {/* desktop ui */}
      {/* desktop ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[232px] lg:pl-[282px] pr-[32px] lg:pr-[332px] bg-[#1c1c1c] fixed left-0 top-0 border-b-2 border-[#282929] hidden md:flex items-center z-10">
        <div className="flex lg:gap-4 md:gap-3 items-center mr-auto">
          <img
            alt="user"
            src="/images/Sidebar.png"
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
          />
          <img
            alt="user"
            src="/images/Star.png"
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
          />
          <h1>Event Selection</h1>
        </div>

        <div className="h-[30px] flex mr-4">
          <div className="h-full w-fit p-1 bg-[#333333] rounded-l-lg">
            <img
              alt="user"
              src="/images/Search.png"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="md:w-[130px] lg:w-[160px] text-[.9em] bg-[#333333] rounded-r-lg outline-none pr-2 py-1"
          />
        </div>

        <div className="flex gap-4 items-center">
          <img
            alt="user"
            src="/images/Sun.png"
            className="lg:w-6 lg:h-6 md:w-5 md:h-5 cursor-pointer"
          />
          <div
            onClick={toggleNotifsBoard}
            className="flex gap-4 items-center md:border lg:border-0 border-[#94a4fd]/60 px-2 py-1 rounded-full md:bg-[#94a4fd]/20 lg:bg-transparent cursor-pointer"
          >
            <img
              alt="user"
              src="/images/ClockCounterClockwise.png"
              className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
            />
            <img
              alt="user"
              src="/images/Bell.png"
              className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
            />
            <img
              alt="user"
              src="/images/Sidebar.png"
              className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* small screens ui */}
      {/* small screens ui */}
      {/* small screens ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[225px] lg:pl-[282px] pr-[25px] lg:pr-[332px] bg-[#1c1c1c] fixed left-0 top-0 border-b-2 border-[#282929] hidden sm:flex md:hidden items-center z-10">
        <div className="flex gap-2 items-center mr-auto">
          <img
            alt="user"
            src="/images/Sidebar.png"
            className="w-4 h-4 cursor-pointer"
          />
          <img
            alt="user"
            src="/images/Star.png"
            className="w-4 h-4 cursor-pointer"
          />
          <h1 className="text-[.8rem]">Event Selection</h1>
        </div>

        <div className="h-[30px] flex mr-4">
          <div className="h-full w-fit p-1 bg-[#333333] rounded-l-lg">
            <img
              alt="user"
              src="/images/Search.png"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-[130px] text-[.9em] bg-[#333333] rounded-r-lg outline-none pr-2 py-1"
          />
        </div>

        <div className="flex gap-3 items-center">
          <img
            alt="user"
            src="/images/Sun.png"
            className="w-4 h-4 cursor-pointer"
          />

          <div
            onClick={toggleNotifsBoard}
            className="w-7 h-7 flex justify-center items-center border border-[#94a4fd]/60 rounded-full bg-[#94a4fd]/10 cursor-pointer"
          >
            <img
              alt="user"
              src="/images/Bell.png"
              className="w-4 h-4 md:w-4 md:h-4"
            />
          </div>
        </div>
      </header>

      {/* Mobile UI */}
      {/* Mobile UI */}
      {/* Mobile UI */}

      <header className="w-full text-white/80 py-4 px-5 bg-[#1c1c1c] fixed left-0 top-0 border-b-2 border-[#282929] flex sm:hidden items-center z-10 transition-all duration-300">
        <img
          onClick={toggleDropBoard}
          alt="menu"
          src="/images/Sidebar.png"
          className={`w-7 h-8 cursor-pointer ${
            !openSearch ? "mr-6" : "mr-auto"
          }`}
        />
        {!openSearch && (
          <img
            alt="logo"
            src="/images/Logo.png"
            className="w-auto h-6 mx-auto"
          />
        )}

        {openSearch && (
          <div className="h-[30px] flex mr-2 slideD">
            <div className="h-full w-fit p-1 bg-[#333333] rounded-l-lg">
              <img
                alt="user"
                src="/images/Search.png"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-[130px] text-[.9em] bg-[#333333] rounded-r-lg outline-none pr-2 py-1"
            />
          </div>
        )}

        <div className="flex gap-3 items-center">
          <img
            onClick={toggleSearch}
            alt="user"
            src={
              openSearch
                ? "/images/icons8-close-white-50.png"
                : "/images/icons8-search-64.png"
            }
            className={`${openSearch ? "w-4 h-4" : "w-6 h-6"} cursor-pointer`}
          />

          <div
            onClick={toggleNotifsBoard}
            className="w-7 h-7 flex justify-center items-center border border-[#94a4fd]/60 rounded-full cursor-pointer"
          >
            <img
              alt="user"
              src="/images/Bell.png"
              className="w-4 h-4 md:w-4 md:h-4"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
