const NotifsCard = ({ item }) => {
  return (
    <div className="w-full flex gap-3 item-start mb-3 px-1 rounded-lg hover:bg-[#282929] cursor-pointer">
      <img alt="user" src={item?.icon} className="w-6 h-6" />
      <div>
        <h3 className="text-white/80 text-[.85em]">{item?.message}</h3>
        <p className="text-white/30 text-[.75em] mt-[-3px]">{item?.stamp}</p>
      </div>
    </div>
  );
};

export default NotifsCard;
