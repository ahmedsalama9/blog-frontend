import One from "../../public/one.jpg";
// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import {  useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";
import type {JSX} from "react"
const Hero = (): JSX.Element => {
  const img = One;
  const { state } = useContext(PostContext);
  const { posts, loading, error } = state;

  if (loading) {
    return <p>psots are loading</p>;
  }
  if (error) {
    return <p>an error occurs: {error}</p>
  }
  return (
    <>
      <div className="w-full h-[750px] relative mx-auto flex flex-row items-center justify-center gap-5 -mt-6">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // small phones
            480: { slidesPerView: 2 }, // phones
            640: { slidesPerView: 3 }, // tablets
            1024: { slidesPerView: 4 }, // laptops
            1280: { slidesPerView: 4 }, // desktops
          }}
        >
          {posts.slice(0, 4).map((item) => (
            <div className="w-[95%] h-[750px]">
              <SwiperSlide key={item.id}>
                <div>
                  <img
                    src={img}
                    alt={item.title}
                    className="object-cover hover:scale-105 hover:rounded-lg transition-all duration-500 cursor-pointer"
                  />
                </div>
                <div className="absolute bottom-40 w-80 ">
                  <div className="bg-[var(--bg-sec)]/70 py-3 px-3">
                    {/* <span className="text-white font-medium text-sm">
                      {item.category}
                    </span> */}
                    <h2 className="text-[25px]  text-white font-bold w-75 truncate">
                      {item.title}
                    </h2>
                    <p className="w-75 truncate text-white">{item.body}</p>
                    <div className="flex flex-row items-center justify-around gap-5 mt-2">
                      <p className="text-white font-medium text-sm">
                        <span className="bg-white text-gray-400 rounded-xl px-2 ">
                          Likes
                        </span>
                        <span> {item.reactions.likes}</span>
                      </p>
                      <p className="text-white font-medium text-sm">
                        <span className="bg-white text-gray-400 rounded-xl px-2 ">
                          views
                        </span>
                        <span> {item.views}</span>
                      </p>
                    </div>
                    <div className="mt-5 text-center">
                      <Link
                        to={`/post/${item.title}`}
                        className="bg-white text-black px-2 py-1 rounded-sm text-center hover:bg-blue-500 hover:text-white transition-all duration-500 text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
