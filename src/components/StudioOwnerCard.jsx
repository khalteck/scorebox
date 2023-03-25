const StudioOwnerCard = ({ item }) => {
  return (
    <div className="w-full flex gap-3 item-center mb-3 px-1 rounded-lg hover:bg-[#282929] cursor-pointer">
      <img alt="user" src={item?.icon} className="w-6 h-6" />
      <div>
        <h3 className="text-white/80 text-[.85em]">{item?.name}</h3>
      </div>
    </div>
  );
};

export default StudioOwnerCard;
