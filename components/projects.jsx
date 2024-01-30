export const Projects = () => {
  return (
    <div className="h-full min-w-full flex flex-col text-white bg-[url('https://images.pexels.com/photos/12013543/pexels-photo-12013543.jpeg?w=1920&h=1080')] bg-cover bg-no-repeat bg-opacity-50 overlay py-5 xl:py-20 overflow-y-hidden">
      <div className="max-w-[80%] mx-auto w-full  h-full">
        <div className="text-6xl  text-red-500/80 font-semibold">PROJECTS</div>
        <span className="project-hollow-text text-7xl -mt-16 ml-4 font-bold animate-pulse">
          PROJECTS
        </span>
        <div className="flex pt-14 xl:pt-24 justify-between gap-10 xl:px-14">
          <div className="flex flex-col 2xl:gap-16  items-center text-xl  font-semibold">
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
          </div>
          <div className="flex flex-col  items-center text-xl  font-semibold -mt-20">
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
          </div>
          <div className="flex flex-col 2xl:gap-16   items-center text-xl  font-semibold">
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
            <div className="w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/352012012"
                className="w-[20em] h-[12em] object-cover rounded-lg"
              ></iframe>
              <div className="mt-2">Project Name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
