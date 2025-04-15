const certifications = {
    fundamentals: {
      title: "Fundamentals",
      bgColor: "bg-[#34A853]", // Google Blue
      cards: [
        {
          title: "Google Cloud Digital Leader",
          description: "When you're new to Google Cloud or in sales or management.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
      ],
    },
    associate: {
      title: "Associate",
      bgColor: "bg-[#34A853]", // Google Green
      cards: [
        {
          title: "Google Cloud Associate Cloud Engineer",
          description: "When you're implementing Google Cloud as an engineer.",
          difficulty: "Medium",
          duration: "2-4 weeks",
        },
      ],
    },
    professional: {
      title: "Professional",
      bgColor: "bg-[#34A853]", // Google Red
      cards: [
        {
          title: "Google Cloud Professional Cloud Architect",
          description: "When you're architecting Google Cloud workloads.",
          difficulty: "Medium",
          duration: "2-4 weeks",
        },
        {
          title: "Google Cloud Professional Security Engineer",
          description: "When you're securing Google Cloud workloads.",
          difficulty: "Medium",
          duration: "2-4 weeks",
        },
      ],
    },
  };
  
import { Link } from "react-router-dom";
import logo from "../assets/gcp-logo.svg";
const  Google = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 justify-center flex">
      Choose a Google Cloud Certification
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <img
          src={logo}
          alt="AWS"
          className="w-52 h-24 bg-white rounded-xl p-2 border-2 border-gray-200"
        />
        <p className="text-center md:text-left max-w-4xl text-gray-700 border border-gray-300 rounded-xl p-6 flex-grow">
        Google Cloud is a first-tier cloud servicer provider with a strong focus on data and cloud-native tooling. Google Cloud is one of the easiest providers to get started with, due to their streamlined offering of core services..</p>
      </div>

      <p className="text-center mb-6 font-bold">
        Check out our new{" "}
        <a href="#" className="text-purple-700 underline font-semibold">
          Course Bundles and Subscriptions
        </a>
      </p>

      {/* Sections */}
      {Object.entries(certifications).map(([key, value]) => (
           <div key={key} className="mb-10">
           <div className="justify-center flex   mb-6">
           <div className={`${value.bgColor} text-white py-2 px-6  w-7xl rounded-md max-w-6xl` }>
             {value.title}
             </div>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {value.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex flex-col items-center text-center border-2 border-gray-200"
              >
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{card.description}</p>

                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500 flex flex-col items-start text-left">
                    <span>{card.difficulty}</span>
                    <span>{card.duration}</span>
                  </div>
                <Link to="/google/course">  <button
                    className={`py-2 px-4 text-sm rounded-full text-white font-semibold ${
                      value.title === "Foundational" ? "bg-[#2E3E50]" : "bg-[#34A853]"
                    }`}
                  >
                    Learn More
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Google;
