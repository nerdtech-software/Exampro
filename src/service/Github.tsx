const certifications = {
    certifications: {
      title: "Certifications",
      bgColor: "bg-[#24292F]", // GitHub dark gray
      cards: [
        {
          title: "Github Foundations",
          description: "Learn the fundamentals about working with Github",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Github Actions",
          description: "When you need to automate workflows and accelerate development",
          difficulty: "Medium",
          duration: "2-3 weeks",
        },
        {
          title: "Github Advanced Security",
          description: "When you want to improve your security posture on Github",
          difficulty: "Medium",
          duration: "2-3 weeks",
        },
        {
          title: "Github Administration",
          description: "When you are responsible for project management on Github",
          difficulty: "Medium",
          duration: "2-3 weeks",
        },
        {
          title: "Github Copilot",
          description: "When you want to master the AI Code Completion tool",
          difficulty: "Medium",
          duration: "2-3 weeks",
        },
      ],
    },
  };
  
import logo from "../assets/github-logo.svg";
const  Github = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 justify-center flex">
      Choose a Github Certification
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <img
          src={logo}
          alt="AWS"
          className="w-52 h-44 bg-white rounded-xl p-2 border-2 border-gray-200 "
        />
        <p className="text-center md:text-left max-w-4xl text-gray-700 border border-gray-300 rounded-xl p-6 flex-grow">
        GitHub is the platform of choice for over 100 million developers worldwide, offering powerful tools for collaboration and version control. Our certification courses are designed to help you master GitHub’s features and pass your exam, from repository management and version control to advanced collaboration techniques like branching and pull requests. Whether you're contributing to open-source projects or working in a professional team environment, these courses will provide you with the skills and certifications to effectively leverage GitHub’s platform for development</p>
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
                  <button
                    className={`py-2 px-4 text-sm rounded-full text-white font-semibold ${
                      value.title === "Foundational" ? "bg-[#24292F]" : "bg-[#24292F]"
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Github;
