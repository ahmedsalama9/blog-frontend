import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import One from "../../public/one.jpg";

function Posts() {
  const img = One;
  const { state } = useContext(PostContext);
  const { posts, loading, error } = state;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  const getPostsPerPage = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const pagination = (page: number) => {
    if (page < 1 || page > numberOfPages) return;
    setCurrentPage(page);
  };

  if (loading) return <p>Posts are loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getPostsPerPage.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-200 overflow-hidden cursor-pointer rounded-lg "
          >
            <img src={img} alt={item.title} className="w-full h-48 object-cover" />

            <div className="absolute top-5 left-3 bg-white/90 py-2 px-3 rounded-lg hover:bg-white/70">
              <div className="flex justify-center gap-3 text-sm">
                <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                  <AccountBalanceIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1" />
                  12
                </span>
                <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                  <PeopleIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1" />
                  21
                </span>
                <span className="flex items-center gap-1 hover:scale-110 transition-all duration-500">
                  <ScheduleIcon className="text-[var(--color-primary)] bg-[var(--bg-primary)] rounded-full p-1" />
                  2
                </span>
              </div>
            </div>

            <div className="absolute bg-[var(--bg-sec)]/70 py-2 px-3 w-full mx-0 ">
              <h2 className="font-medium text-[17px] text-center text-white truncate w-full">
                {item.title}
              </h2>
            </div>
            <p className="w-full truncate px-3 mt-12">{item.body}</p>

            <div className="text-center mt-4 mb-2  ">
              <Link
                to={`/post/${item.title}`}
                className="bg-[var(--bg-primary)] text-white px-3 py-1 rounded-sm cursor-pointer"
              >
                View Post
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>

        {Array.from({ length: numberOfPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => pagination(i + 1)}
            className={`px-3 py-1 rounded cursor-pointer ${
              currentPage === i + 1
                ? "bg-[var(--bg-primary)]  text-white "
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => pagination(currentPage + 1)}
          disabled={currentPage === numberOfPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Posts;
