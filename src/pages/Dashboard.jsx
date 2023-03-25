import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import eventsData from "../dummyData/eventsData.json";

const Dashboard = () => {
  return (
    <>
      <LeftSidebar />
      <Header />
      <RightSidebar />
      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] pt-[80px] sm:pt-[110px] bg-[#1c1c1c] ">
        <div className="block sm:hidden">
          <h2 className="text-white/80 mb-4 text-end">Event Selection</h2>
          <div className="flex gap-3 items-center justify-end mt-[-12px]">
            <img
              alt="user"
              src="/images/keep.png"
              className="w-4 h-4 cursor-pointer"
            />
            <img
              alt="user"
              src="/images/Star.png"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
        {/* Heading */}
        <div className="flex gap-2 items-center text-white/80 text-[1rem] mb-6">
          <h2>All Events</h2>
          <img alt="arrow" src="/images/ArrowDown.png" className="w-4 h-4" />
        </div>

        {/* Event container */}
        <div className="w-full lg:max-w-[85%] lg:min-w-[400px] grid grid-flow-row gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 grid-auto-rows-auto">
          {eventsData &&
            eventsData.map((item, index) => {
              return <EventCard item={item} key={index} />;
            })}

          <div className="min-w-[200px] max-w-full min-h-[290px] flex justify-center items-center bg-[#282929] pl-6 pr-4 py-4 rounded-lg cursor-pointer">
            <button className="text-[.85rem] px-3 py-1 mr-2 rounded-full bg-[#94a4fd] hover:bg-[#94a4fd]/60 text-[#1c1c1c] transition-all duration-300">
              Add Event
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
