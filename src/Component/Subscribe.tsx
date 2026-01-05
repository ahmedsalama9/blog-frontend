
function Subscribe() {
  return (
    <div className="bg-gray-100 flex xl:flex-row lg:flex-row md:flex-row flex-col items-center justify-center gap-20  mt-15 mb-20 h-25 rouded-lg">
      <div className="font-semibold text-lg text-black">
        <p>Subscribe to my get fresh news via email</p>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-white px-2 py-1 border-1 border-gray-300 rounded-sm mx-5 focus:ring-1 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="bg-white px-2 py-1 border-1 border-gray-300 rounded-sm mx-5 focus:ring-1 focus:ring-blue-500"
          required
        />
        <button className="bg-[var(--danger)] px-15 py-1 text-[16px] hover:bg-[var(--danger)]/70 text-white cursor-pointer ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
