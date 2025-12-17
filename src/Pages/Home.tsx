import React from "react";
import Features from "../Component/Features";
import Hero from "../Component/Hero";
import Posts from "../Component/Posts";
import Subscribe from "../Component/Subscribe";
import SideBar from "../Component/SideBar";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[70%] mx-auto">
        <Subscribe />
        <Features firstTitle="Fresh" secondTitle="News" />
        <hr className="text-[#a0a0a0] mb-15" />

        <div className="flex flex-row items-center justify-center gap-10">
          <div className="w-[70%]">
            <Posts />
          </div>
          <div className="w-[30%]">

              <SideBar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
