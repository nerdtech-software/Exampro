import { useState } from "react";

const Cloud = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div>
      {/* Cloud Certification Training Section */}
      <section className=" flex-col md:flex-row  bg-white p-6 w-[1200px] m-auto flex items-center justify-between ">
        <div className="md:w-1/2 text-center md:text-left ">
        <h2 className="mb-0 text-[52px] leading-[1.2em] text-[#212121] mt-4 text-left font-bold">
            Cloud <span className="underline">Obsessed</span> <br /> Certification Training
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            The <span className="font-bold">fast</span> and <span className="font-bold">easy</span> way to study
          </p>
          <div className="mt-6">
            <a href="/choose-an-exam" className="bg-orange-500 text-white px-7 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">
              Choose Your Path
            </a>
          </div>
          <p className="mt-2 text-xl  py-2  text-gray-500 underline cursor-pointer">
          Which Cloud Certification is right for you?

          </p>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img src="https://www.exampro.co/assets/home/nextgen/screenshot-video.webp" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="bg-orange-500 p-4 rounded-full cursor-pointer hover:bg-orange-600"
              onClick={() => setIsVideoOpen(true)}
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg w-[80%] max-w-3xl">
            <button className="absolute top-2 right-2 text-gray-700" onClick={() => setIsVideoOpen(false)}>
              &times;
            </button>
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/CLR8Mbh7kaQ"
              title="ExamPro Demo"
            
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;