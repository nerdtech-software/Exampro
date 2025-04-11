const certifications = {
        cloudDeveloper: {
          title: "Cloud Developer",
          bgColor: "bg-[#1F2937]", // Tailwind's gray-800
          cards: [
            {
              title: "Cloud Developer Environment",
              description: "Learn how to setup and configure and work in a Cloud Developer Enviroment",
              difficulty: "Easy",
              duration: "1-2 weeks",
            },
            {
              title: "Vim Essentials",
              description: "Learn how you can add VIM to your developer toolbox",
              difficulty: "Easy",
              duration: "1-2 weeks",
            },
            {
              title: "GenAI Essentials",
              description: "Learn the essentials of working with AI in the cloud",
              difficulty: "Easy",
              duration: "1-2 weeks",
            },
            {
              title: "Cloud Portfolio Project",
              description: "Build a portfolio website with multi-cloud static hosting",
              difficulty: "Easy",
              duration: "1-2 weeks",
            },
          ],
        },
        bootcamps: {
          title: "Bootcamps",
          bgColor: "bg-[#4B5563]", // Tailwind's gray-700
          cards: [
            {
              title: "Terraform Cloud Project",
              description: "Get experience working with Terraform on AWS",
              difficulty: "Beginner",
              duration: "2-3 weeks",
            },
            {
              title: "AWS Cloud Project",
              description: "Build a real world project on AWS infrastructure",
              difficulty: "Beginner",
              duration: "10-14 weeks",
            },
          ],
        },
      };
      
      import logo from "../assets/exampro-logo.svg";

const  Cloud = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 justify-center flex">
      Choose a Cloud Certification to Learn More
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <img
          src={logo}
          alt="AWS"
          className="w-52 h-24 bg-white rounded-xl p-2 border-2 border-gray-200"
        />
        <p className="text-center md:text-left max-w-4xl text-gray-700 border border-gray-300 rounded-xl p-6 flex-grow">
        ExamPro has their own cloud certifications specfically designed to be accessible, digestable, affordable, agnostic and provide complete technical coverage scoped for specific cloud roles.</p>
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
                      value.title === "Foundational" ? "bg-orange-400" : "bg-orange-400"
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

export default Cloud;
