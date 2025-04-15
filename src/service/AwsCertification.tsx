import { Link } from "react-router-dom";

const certifications = {
  foundational: {
    title: "Foundational",
    bgColor: "bg-[#2E3E50]",
    cards: [
      {
        title: "Certified Cloud Practitioner",
        description: "When you're new to AWS or in sales or management.",
        difficulty: "Easy",
        duration: "1-2 weeks",
      },
      {
        title: "Certified AI Practitioner",
        description: "When you want to learn the fundamentals of AI on AWS",
        difficulty: "Easy",
        duration: "1-2 weeks",
      },
    ],
  },
  associate: {
    title: "Associate",
    bgColor: "bg-[#3477F5]",
    cards: [
      {
        title: "Developer",
        description: "When you're a full stack developer and need practical knowledge.",
        difficulty: "Intermediate",
        duration: "1-3 months",
      },
      {
        title: "Solutions Architect",
        description: "When you need find the right combination of AWS services to solve a problem.",
        difficulty: "Intermediate",
        duration: "1-3 months",
      },
      {
        title: "SysOps Administrator",
        description: "When need to maintain existing AWS resources. No programming required.",
        difficulty: "Intermediate",
        duration: "1-3 months",
      },
      {
        title: "Data Engineer",
        description: "When you are focused on the core data services on AWS",
        difficulty: "Intermediate",
        duration: "1-3 months",
      },
    ],
  },
  professional: {
    title: "Professional",
    bgColor: "bg-[#FF8C00]", // orange tone for visibility
    cards: [
      {
        title: "Solutions Architect",
        description: "When you want to have confidence you can solve any problem at scale.",
        difficulty: "Very Hard",
        duration: "2-5 months",
      },
      {
        title: "DevOps Engineer",
        description: "When need to deploy and automate applications and infrastructure at scale.",
        difficulty: "Very Hard",
        duration: "2-5 months",
      },
    ],
  },
  speciality: {
    title: "Speciality",
    bgColor: "bg-[#8A2BE2]", // purple tone for variety
    cards: [
      {
        title: "Security",
        description:
          "When you need to know governence, auditing, hardening ids/ips and automating security.",
        difficulty: "Hard",
        duration: "1-4 months",
      },
      {
        title: "Advanced Networking",
        description:
          "When you need to know how to create hybrid networks for enterprises.",
        difficulty: "Hard",
        duration: "1-4 months",
      },
      {
        title: "Machine Learning",
        description:
          "When you're a data-scientist or need to leverage AI/ML services.",
        difficulty: "Hard",
        duration: "1-4 months",
      },
    ],
  },

  
};


const AwsCertification = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 justify-center flex">
        Choose an AWS Certification
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <img
          src="https://www.exampro.co/assets/home/aws-logo.svg"
          alt="AWS"
          className="w-52 h-24 bg-white rounded-xl p-2 border-2 border-gray-200"
        />
        <p className="text-center md:text-left max-w-4xl text-gray-700 border border-gray-300 rounded-xl p-6 flex-grow">
          Amazon Web Services (AWS) is the world leader in cloud services, and the first Cloud
          Provider to offer role-based cloud certifications. AWS is popular for its versatility,
          modularity, stability, and first-class technical support and documentation.
        </p>
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
                  <Link to="course">
                  <button
                    className={`py-2 px-4 text-sm rounded-full text-white font-semibold ${
                      value.title === "Foundational" ? "bg-[#2E3E50]" : "bg-[#3477F5]"
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

export default AwsCertification;
