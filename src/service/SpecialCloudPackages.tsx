

const pricingData = [
  {
    section: "Monthly Subscriptions",
    items: [
      {
        title: "ExamPro Supporter Subscription",
        description:
          "Get unlimited access to our current catalog of learning content at a flat monthly rate.",
        features: [
          "Full Catalog Access (All Courses)",
          "Automatic Monthly Renewal",
        ],
      },
    ],
  },
  {
    section: "Cloud Learning Bundles (One-time Purchase)",
    items: [
      {
        title: "Cross-Cloud Fundamentals",
        description:
          "Round out your knowledge by studying multiple cloud providers at once.",
        features: [
          "AWS Certified Cloud Practitioner",
          "Azure Fundamentals",
          "Oracle Foundations Associate",
        ],
      },
      {
        title: "AWS Multi-Associate",
        description:
          "Round out your AWS knowledge by studying all the associates at once.",
        features: [
          "AWS Solutions Architect Associate",
          "AWS Developer Associate",
          "AWS SysOps Administrator Associate",
        ],
      },
      {
        title: "Azure Multi-Fundamentals",
        description:
          "Get a complete coverage of Azure foundational knowledge",
        features: [
          "Azure Fundamentals",
          "Azure Data Fundamentals",
          "Azure AI Fundamentals",
          "Security, Compliance, and Identity",
        ],
      },
      {
        title: "GitHub Multi-Package",
        description: "Get a complete coverage of all Github certifications",
        features: [
          "GitHub Fundamentals (Full Course)",
          "GitHub Actions (Full Course)",
          "GitHub Administration (Practice Exams)",
          "Advanced Security (Practice Exams)",
        ],
      },
    ],
  },
];

export default function SpecialCloudPackages() {
  return (
    <div className="p-6 space-y-10">
      {pricingData.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold bg-orange-500 text-white px-4 py-2 rounded-md">
            {section.section}
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-orange-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    {item.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full self-start">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
