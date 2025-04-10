import {
    FaCanadianMapleLeaf,
    FaDesktop,
    FaHandSpock,
    FaMedal,
    FaTrophy,
} from "react-icons/fa";
  
  const MeetYourFavorite = () => {
    return (
      <div className="text-center py-12 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Meet Your Favorite Cloud Instructor <br />
          <span className="text-orange-500">Andrew Brown</span>
        </h1>
  
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          {/* Profile Image */}
          <img
            className="rounded-full object-cover border-4 border-orange-400"
            src="https://www.exampro.co/assets/home/legacy/andrew-brown-cloud-instructor.jpg"
            alt="Andrew Brown"
          />
  
          {/* Details List */}
          <ul className="text-left space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <FaMedal className="text-yellow-500 text-xl" />
              <span>AWS Community Hero</span>
            </li>
            <li className="flex items-center gap-3">
              <FaTrophy className="text-orange-500 text-xl" />
              <span>GCP Champion Innovator</span>
            </li>
            <li className="flex items-center gap-3">
              <FaDesktop className="text-blue-500 text-xl" />
              <span>Previously the CTO of multiple startups</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCanadianMapleLeaf className="text-red-600 text-xl" />
              <span>Canadian (eh)</span>
            </li>
            <li className="flex items-center gap-3">
              <FaHandSpock className="text-purple-600 text-xl" />
              <span>Star Trek fan</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default MeetYourFavorite;
  