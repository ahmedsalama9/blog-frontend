import React from "react";
import One from "../../public/one.jpg";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link } from "react-router";
function Posts() {
  const itemData = [
    {
      id: 1,
      image: One,
      title: "Real Madrid Secure Crucial Win to Stay Top of La Liga",
      category: "La Liga",
      author: "Ahmed Salama",
      date: "20/10/2025",
      excerpt:
        "Real Madrid continued their impressive run with a vital victory that kept them at the top of La Liga.",
      content:
        "Real Madrid continued their impressive run in La Liga with a crucial victory that kept them at the top of the table. The team showed strong defensive discipline and clinical finishing, underlining their title ambitions this season. Carlo Ancelotti praised the players’ mentality and focus, stressing the importance of consistency.",
    },
    {
      id: 2,
      image: One,
      title: "Ancelotti Praises Young Talents After Standout Performance",
      category: "Team News",
      author: "Ahmed Salama",
      date: "20/10/2025",
      excerpt:
        "Carlo Ancelotti highlighted the importance of young players in Real Madrid’s future project.",
      content:
        "Carlo Ancelotti praised the impact of young talents after a standout performance. He emphasized that combining youth with experienced leaders is giving the squad balance and flexibility during a demanding season.",
    },
    {
      id: 3,
      image: One,
      title: "Real Madrid Secure Crucial Win to Stay Top of La Liga",
      category: "La Liga",
      author: "Ahmed Salama",
      date: "20/10/2025",
      excerpt:
        "Real Madrid continued their impressive run with a vital victory that kept them at the top of La Liga.",
      content:
        "Real Madrid continued their impressive run in La Liga with a crucial victory that kept them at the top of the table. The team showed strong defensive discipline and clinical finishing, underlining their title ambitions this season. Carlo Ancelotti praised the players’ mentality and focus, stressing the importance of consistency.",
    },
    {
      id: 4,
      image: One,
      title: "Ancelotti Praises Young Talents After Standout Performance",
      category: "Team News",
      author: "Ahmed Salama",
      date: "20/10/2025",
      excerpt:
        "Carlo Ancelotti highlighted the importance of young players in Real Madrid’s future project.",
      content:
        "Carlo Ancelotti praised the impact of young talents after a standout performance. He emphasized that combining youth with experienced leaders is giving the squad balance and flexibility during a demanding season.",
    },

  ];

  return (
    <div className="grid grid-cols-2 gap-6  ">
      {itemData.map((item) => (
        <div
          key={item.id}
          className="relative border border-gray-200  overflow-hidden cursor-pointer "
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-150 h-100 object-cover"
          />

          {/* Meta info */}
          <div className="absolute top-5 left-3 bg-white/90 py-3 px-4 rounded-lg hover:bg-white/70">
            <div className="flex  justify-center gap-4 text-sm">
              <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                <AccountBalanceIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1 " />
                {item.category}
              </span>

              <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                <PeopleIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1" />
                {item.author}
              </span>

              <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                <ScheduleIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1" />
                {item.date}
              </span>
            </div>
          </div>

          {/* Title */}

          <div className=" absolute bottom-5 bg-[var(--bg-sec)] py-5 px-4 w-[90%] ">
            <h2 className="font-medium text-[17px] text-center  text-white truncate w-[80%] ">
              {item.title}
            </h2>
          </div>

          {/* <div className="text-center">
            <button className="bg-[var(--bg-primary)] text-white px-3 py-1 mb-4  rounded-sm cursor-pointer ">
              View Post
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Posts;
