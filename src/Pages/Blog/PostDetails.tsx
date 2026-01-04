import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../context/PostContext";

function PostDetails() {
  const { title } = useParams();
  const { state } = useContext(PostContext);
  const { posts, loading, error } = state;
  const singlePost = posts.find((post) => post.title === title);

  if (loading) {
    return <p>post is loading..</p>;
  }

  if (!singlePost) {
    return <p>post is not found</p>;
  }

  if (error) {
    return <p>error: {error}</p>;
  }
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Blog cover"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
            <span className="text-sm uppercase tracking-wider text-gray-300">
              Technology
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              {singlePost.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 text-sm text-gray-200">
              <img
                src="https://i.pravatar.cc/100"
                className="w-10 h-10 rounded-full"
                alt="author"
              />
              <div>
                <p className="font-medium">Ahmed Salama</p>
                <p className="text-gray-300">
                  Jan 4, 2026 · {singlePost.views} views
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <article className="prose prose-lg max-w-none prose-gray">
          <p>{singlePost.body}</p>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-10">
          {singlePost.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-12" />

        {/* Author Box */}
        <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm">
          <img
            src="https://i.pravatar.cc/150"
            className="w-20 h-20 rounded-full"
            alt="author"
          />
          <div>
            <h4 className="text-lg font-semibold">Ahmed Salama</h4>
            <p className="text-gray-600 mt-2">
              Frontend developer passionate about React, performance, and clean
              UI design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PostDetails;
