import One from "../../public/one.jpg";

// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";
function Features({ firstTitle, secondTitle }) {
  const { state } = useContext(PostContext);
  const { posts, loading, error } = state;
  const img = One;
  if (loading) {
    return <p>posts are loading...</p>;
  }
  if (error) {
    return <p>an error occurs: {error}</p>;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[25px] font-semibold">
          {firstTitle}{" "}
          <span className="text-[var(--color-sec)]"> {secondTitle}</span>
        </h3>
        <span className="w-10 h-1 block bg-[var(--color-sec)] rounded-full mt-5"></span>
      </div>
      <div className="w-full h-[750px] relative mx-auto flex flex-row items-center justify-center gap-5 -mt-20 cursor-grab">
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
            1280: { slidesPerView: 5 }, // desktops
          }}
        >
          {posts.map((item) => (
            <div className="p-10">
              <SwiperSlide key={item.id}>
                <div>
                  <img
                    src={img}
                    alt={item.title}
                    className="w-200 h-80 object-cover"
                  />
                </div>
                <div className="mt-5 ">
                  <h2 className="font-bold text-[20px] text-center text-[var(--color-sec)]/80 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-grey-100 font-noraml text-[15px]">
                    by: <span className="font-bold">Ahmed Salama</span> -{" "}
                    <span className="text-[#a0a0a0]">Technology</span>
                  </p>
                  <div className="mt-3 text-center">
                    <Link
                      to={`/post/${item.title}`}
                      className="bg-blue-500 text-white font-medium px-2 py-1 rounded-sm "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Features;
