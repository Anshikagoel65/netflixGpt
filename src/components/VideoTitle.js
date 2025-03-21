const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-5 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black font-bold py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-4 bg-gray-200 text-black font-bold p-4 px-12 text-xl rounded-lg bg-opacity-50">
          ⌽ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
