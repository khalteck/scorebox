const EventCard = ({ item }) => {
  return (
    <div className="min-w-[200px] min-h-[260px] max-w-full bg-[#282929] pl-6 pr-4 py-4 flex flex-col rounded-lg text-white">
      <p className="w-full text-end text-[1.1rem] font-bold">{item?.date}</p>
      <div className={`${item?.locked && "mb-auto"} text-[.85rem]`}>
        <p>Versastyle: {item?.city}</p>
        <p>{item?.region}</p>
        <p>{item?.venue}</p>
        <p>{item?.address}</p>
      </div>
      {!item?.locked && (
        <div className="mt-5">
          <div className="text-[.85rem] font-light flex gap-5 items-center mb-3">
            <div className="flex gap-1 items-center">
              <img alt="arrow" src="/images/Dot1.png" className="w-3 h-3" />
              <p>Entries Submitted</p>
            </div>
            <p className="text-white/50">{item?.entries}</p>
          </div>
          <div className="text-[.85rem] font-light flex gap-5 items-center mb-3">
            <div className="flex gap-1 items-center">
              <img alt="arrow" src="/images/Dot3.png" className="w-3 h-3" />
              <p>Music Submitted</p>
            </div>
            <p>{item?.music}</p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-end items-center mt-4">
        {item?.favorite && (
          <img
            alt="arrow"
            src="/images/Star.png"
            className="w-5 h-5 cursor-pointer mr-auto"
          />
        )}
        <button className="text-[.85rem] px-5 py-1 mr-2 rounded-full bg-[#94a4fd] hover:bg-[#94a4fd]/60 text-[#1c1c1c] transition-all duration-300">
          {item?.locked ? "Locked" : "Select Event"}
        </button>
        {item?.locked ? (
          <img
            alt="arrow"
            src="/images/LockSimple.png"
            className="w-5 h-5 cursor-pointer"
          />
        ) : (
          <img
            alt="arrow"
            src="/images/LockSimpleOpen.png"
            className="w-5 h-5 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
