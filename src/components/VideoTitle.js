const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-5 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold p-4 px-12 text-xl rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className=" mx-4 bg-gray-200 text-black font-bold p-4 px-12 text-xl rounded-lg bg-opacity-50">
          ⌽ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
