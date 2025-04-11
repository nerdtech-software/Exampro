import { useState } from "react";
import { Link } from "react-router-dom";

const Cloud = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div>
      {/* Cloud Certification Training Section */}
      <section className="flex flex-col md:flex-row bg-white px-4 py-8 max-w-7xl mx-auto items-center justify-between gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-tight">
            Cloud <span className="underline">Obsessed</span> <br /> Certification Training
          </h2>
          <p className="text-md sm:text-lg text-gray-600 mt-4">
            The <span className="font-bold">fast</span> and <span className="font-bold">easy</span> way to study
          </p>
          <div className="mt-6">
          <Link
              to="/getStart"
              className="bg-orange-500 text-white px-6 sm:px-7 py-3 sm:py-4 rounded-xl text-md sm:text-lg font-semibold hover:bg-orange-600"
            >
              Choose Your Path
            </Link>
          </div>
          <p className="mt-4 text-lg text-gray-500 underline cursor-pointer">
            Which Cloud Certification is right for you?
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img
            src="https://www.exampro.co/assets/home/nextgen/screenshot-video.webp"
            alt="Video preview"
            className="w-full h-auto max-w-md md:max-w-full"
          />
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-black"
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/CLR8Mbh7kaQ"
                title="ExamPro Demo"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;
