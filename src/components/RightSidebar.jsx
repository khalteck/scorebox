import NotifsCard from "./NotifsCard";
import notifsData from "../dummyData/notifsData.json";
import activityData from "../dummyData/activityData.json";
import studioOwnersData from "../dummyData/studioOwnersData.json";
import ActivityCard from "./ActivityCard";
import StudioOwnerCard from "./StudioOwnerCard";
import { useAppContext } from "../contexts/AppContext";

const RightSidebar = () => {
  const { openNotifsBoard, toggleNotifsBoard } = useAppContext();
  return (
    <>
      {/* on desktop and larger screens */}
      {/* on desktop and larger screens */}
      {/* on desktop and larger screens */}

      <div className="w-[300px] h-screen px-6 py-7 bg-[#1c1c1c] fixed right-0 top-0 border-l-2 border-[#282929] overflow-y-auto z-20 hidden lg:block">
        {/* notifs*/}
        <div className="w-full mb-6">
          <h1 className="text-white">Notifications</h1>

          {/* notifs container */}
          <div className="w-full mt-4">
            {notifsData &&
              notifsData.map((item, index) => {
                return <NotifsCard item={item} key={index} />;
              })}
          </div>
        </div>

        {/* activities */}
        <div className="w-full mb-6">
          <h1 className="text-white">Activities</h1>

          {/* notifs container */}
          <div className="w-full mt-4">
            {activityData &&
              activityData.map((item) => {
                return <ActivityCard key={item?.id} item={item} />;
              })}
          </div>
        </div>

        {/* studio owners */}
        <div className="w-full">
          <h1 className="text-white">Studio owners</h1>

          {/* notifs container */}
          <div className="w-full mt-4">
            {studioOwnersData &&
              studioOwnersData.map((item) => {
                return <StudioOwnerCard key={item?.id} item={item} />;
              })}
          </div>
        </div>
      </div>

      {/* on mobile, small and medium screens */}
      {/* on mobile, small and medium screens */}
      {/* on mobile, small and medium screens */}

      {openNotifsBoard && (
        <div className="w-[75%] sm:w-[300px] h-screen px-6 py-7 bg-[#1c1c1c] fixed right-0 top-0 border-l-2 border-[#282929] overflow-y-auto z-30 sm:z-20 block lg:hidden slide">
          <div
            onClick={toggleNotifsBoard}
            className="w-7 h-7 flex justify-center items-center bg-white/80 rounded-full absolute top-4 right-4 cursor-pointer"
          >
            <img
              alt="user"
              src="/images/icons8-close-50.png"
              className="w-4 h-4"
            />
          </div>
          {/* notifs*/}
          <div className="w-full mb-6">
            <h1 className="text-white">Notifications</h1>

            {/* notifs container */}
            <div className="w-full mt-4">
              {notifsData &&
                notifsData.map((item, index) => {
                  return <NotifsCard item={item} key={index} />;
                })}
            </div>
          </div>

          {/* activities */}
          <div className="w-full mb-6">
            <h1 className="text-white">Activities</h1>

            {/* notifs container */}
            <div className="w-full mt-4">
              {activityData &&
                activityData.map((item) => {
                  return <ActivityCard key={item?.id} item={item} />;
                })}
            </div>
          </div>

          {/* studio owners */}
          <div className="w-full">
            <h1 className="text-white">Studio owners</h1>

            {/* notifs container */}
            <div className="w-full mt-4">
              {studioOwnersData &&
                studioOwnersData.map((item) => {
                  return <StudioOwnerCard key={item?.id} item={item} />;
                })}
            </div>
          </div>
        </div>
      )}
      {openNotifsBoard && (
        <div
          onClick={toggleNotifsBoard}
          className="w-full h-screen block sm:hidden fixed left-0 top-0 bg-black/60 z-20 appear"
        ></div>
      )}
    </>
  );
};

export default RightSidebar;
