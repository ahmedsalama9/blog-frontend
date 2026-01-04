import React from "react";
import One from "../../public/one.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function SideBar() {
  const recentPosts = [
    {
      id: 1,
      title: "Real Madrid Wins Against Barcelona",
      excerpt:
        "Carlo Ancelotti highlighted the importance of young players in Real Madrid’s future project.",
      date: "20/10/2025",
      image: One,
    },
    {
      id: 2,
      title: "Ancelotti Praises Young Talents",
      excerpt:
        "Carlo Ancelotti highlighted the importance of young players in Real Madrid’s future project.",
      date: "19/10/2025",
      image: One,
    },
    {
      id: 3,
      title: "Champions League Roundup",
      excerpt:
        "Carlo Ancelotti highlighted the importance of young players in Real Madrid’s future project.",
      date: "18/10/2025",
      image: One,
    },
  ];

  const instagramImages = [One, One, One, One, One, One];
  return (
    <div>
      <aside className="w-full min-h-100 sticky top-0 p-4 space-y-8">
        {/* Follow Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 bg-[var(--bg-sec)] text-white py-2 px-3">
            Follow Us
          </h3>
          <div className="flex gap-3 mt-10 w-[200px] md:w-[350px] lg:w-fit xl:w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition"
            >
              <YouTubeIcon />
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
        <hr className="text-[var(--bg-sec)]" />
        {/* Instagram Images */}
        <div>
          <h3 className="text-lg font-semibold mb-4 bg-[var(--bg-sec)] text-white py-2 px-3 mt-15">
            Instagram
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Instagram ${index}`}
                className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
        <hr className="text-[var(--bg-sec)]" />

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4 bg-[var(--bg-sec)] text-white py-2 px-3 mt-15">
            Recent Posts
          </h3>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex gap-3 items-start">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="truncate w-[280px]">
                  <h4 className="text-sm font-semibold line-clamp-2">
                    {post.title}
                
                  </h4>
                  <span className="text-sm mt-5 mb-5 ">{post.excerpt}</span>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="text-[var(--bg-sec)]" />
      </aside>
    </div>
  );
}

export default SideBar;
