import One from "../../public/one.jpg";
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Features({firstTitle, secondTitle}) {
  const itemData = [
    {
      id: 1,
      image: One,
      title: "Post Tiile one",
      category: "Category One",
      author: "Ahmed salama",
    },
    {
      id: 2,
      image: One,
      title: "Post Tiile two",
      category: "Category three",
      author: "Ahmed salama",
    },
    {
      id: 3,
      image: One,
      title: "Post Tiile four",
      category: "Category four",
      author: "Ahmed salama",
    },
    {
      id: 4,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      author: "Ahmed salama",
    },
    {
      id: 5,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      author: "Ahmed salama",
    },
    {
      id: 6,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      author: "Ahmed salama",
    },
    {
      id: 7,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      author: "Ahmed salama",
    },
    {
      id: 8,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      author: "Ahmed salama",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[25px] font-semibold">
          {firstTitle} <span className="text-[var(--color-sec)]"> {secondTitle}</span>
        </h3>
        <span className="w-10 h-1 block bg-[var(--color-sec)] rounded-full mt-5"></span>
      </div>
      <div className="w-full h-[750px] relative mx-auto flex flex-row items-center justify-center gap-5 -mt-20 cursor-grab">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {itemData.map((item, index) => (
            <div key={index} className="p-10">
              <SwiperSlide>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-200 h-80 object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-bold text-[20px] text-center text-[var(--color-sec)]/80 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-grey-100 font-noraml text-[15px]">
                    by: <span className="font-bold">{item.author}</span> -{" "}
                    <span className="text-[#a0a0a0]">{item.category}</span>
                  </p>
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
