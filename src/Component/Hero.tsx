
import One from "../../public/one.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero = () => {
  const itemData = [
    {
      id: 1,
      image: One,
      title: "Post Tiile one",
      category: "Category One",
      date: "20/10/2025",
    },
    {
      id: 2,
      image: One,
      title: "Post Tiile two",
      category: "Category three",
      date: "20/10/2025",
    },
    {
      id: 3,
      image: One,
      title: "Post Tiile four",
      category: "Category four",
      date: "20/10/2025",
    },
    {
      id: 4,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      date: "20/10/2025",
    },
    {
      id: 5,
      image: One,
      title: "Post Tiile three",
      category: "Category three",
      date: "20/10/2025",
    },
  ];

  return (
    <>
      <div className="w-full h-[750px] relative mx-auto flex flex-row items-center justify-center gap-5 -mt-6">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
        {itemData.map((item, index) => (
          <div key={index} className="w-[95%] h-[750px]">
            <SwiperSlide>
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover hover:scale-105 hover:rounded-lg transition-all duration-500 cursor-pointer"
              />
            </div>
            <div className="absolute bottom-40 w-80 ">
              <div className="bg-[var(--bg-sec)]/70 py-3 px-3">
                <span className="text-white font-medium text-sm">
                  {item.category}
                </span>
                <h2 className="text-[25px]  text-white font-bold">
                  {item.title}
                </h2>
                <span className="text-white font-medium text-sm">
                  {item.date}
                </span>
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
