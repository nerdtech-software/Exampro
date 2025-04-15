import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/exp-vim-01.png";
const VimEssentialsCourse = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div>
<section className="flex flex-col md:flex-row bg-white px-4 py-8 max-w-7xl mx-auto items-center justify-between gap-6">
<div className="max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Vim Essentials Course
        </h1>
        <p className="text-gray-700 mb-6">
          Learn the essentials required for working with VIM as your developer
          tool of choice
        </p>
  <div className="mt-6">
  <Link
      to="/"
      className="bg-orange-500 text-white px-6 sm:px-7 py-3 sm:py-4 rounded-xl text-md sm:text-lg font-semibold hover:bg-orange-600"
    >
      Choose Your Path
    </Link>
  </div>
  <p className="text-xl font-bold text-gray-900 my-10">
          USD <span className="text-2xl">$39.00</span> / month
        </p>
</div>

<div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
  <img
    src={logo}
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
export default VimEssentialsCourse;
