const certifications = {
    fundamentals: {
      title: "Fundamentals",
      bgColor: "bg-[#007FFF]", // Azure Blue
      cards: [
        {
          title: "Azure Fundamentals (AZ-900)",
          description: "When you're new to Azure or in sales or management.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Azure Data Fundamentals (DP-900)",
          description: "When you're seeking an Azure data-related cloud role.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Azure AI Fundamentals (AI-900)",
          description: "When you're seeking an Azure machine learning related cloud role.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Office 365 Fundamentals (MS-900)",
          description: "When you're new to Office365 or in sales or management.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Security, Compliance, and Identity (SC-900)",
          description: "When you're seeking a security related cloud role.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
        {
          title: "Power Platform Fundamentals (PL-900)",
          description: "When you're seeking an Azure data analytics and automation related cloud role.",
          difficulty: "Easy",
          duration: "1-2 weeks",
        },
      ],
    },
    associates: {
      title: "Associates",
      bgColor: "bg-[#1E90FF]",
      cards: [
        {
          title: "Azure Administrator Associate (AZ-104)",
          description: "When you're looking for most broad and in-demand Azure knowledge",
          difficulty: "Medium",
          duration: "3-4 weeks",
        },
        {
          title: "Azure Developer Associate (AZ-204)",
          description: "When you're looking to developer web-applications ontop of Azure",
          difficulty: "Medium",
          duration: "3-4 weeks",
        },
        {
          title: "Power BI Data Analyst Associate (PL-300)",
          description: "When you need to master industry best practices for Power BI.",
          difficulty: "Medium",
          duration: "3-4 weeks",
        },
        {
          title: "Azure AI Engineer Associate (AI-102)",
          description: "When you want to master Artificial Intelligence on Azure.",
          difficulty: "Medium",
          duration: "3-4 weeks",
        },
      ],
    },
    experts: {
      title: "Experts",
      bgColor: "bg-[#005EB8]",
      cards: [
        {
          title: "Azure Solutions Architect Expert (AZ-305)",
          description: "When you're looking to master deployment of Azure cloud resources",
          difficulty: "Hard",
          duration: "6-8 weeks",
        },
        {
          title: "Azure DevOps Engineer Expert (AZ-400)",
          description: "When you need to master developer pipelines and integrations",
          difficulty: "Hard",
          duration: "6-8 weeks",
        },
      ],
    },
  };

const  Azure = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 justify-center flex">
      Choose a Microsoft Azure Cloud Certification
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <img
          src="https://www.exampro.co/assets/home/azure-logo.svg"
          alt="AWS"
          className="w-52 h-24 bg-white rounded-xl p-2 border-2 border-gray-200"
        />
        <p className="text-center md:text-left max-w-4xl text-gray-700 border border-gray-300 rounded-xl p-6 flex-grow">
        Microsoft Azure is cloud service provider with a strong focus on Windows-based organizations and workloads. Azure is the second market leader for cloud services and popular among established traditional IT organizations.</p>
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
                      value.title === "Foundational" ? "bg-[#2E3E50]" : "bg-[#3477F5]"
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

export default Azure;
