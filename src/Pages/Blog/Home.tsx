import Features from "../../Component/Features";
import Hero from "../../Component/Hero";
import Posts from "../../Component/Posts";
import SideBar from "../../Component/SideBar";
import Subscribe from "../../Component/Subscribe";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[70%] mx-auto">
        <Subscribe />
        <Features firstTitle="Fresh" secondTitle="News" />
        <hr className="text-[#a0a0a0] mb-15" />

        <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col items-center justify-center gap-10 min-h-100">
          <div className="xl:w-[70%] lg:w-[70%] md:w-[95%] w-[95%]">
            <Posts />
          </div>
          <div className="xl:w-[30%] lg:w-[30%] md:w-[95%] w-[95%]">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
