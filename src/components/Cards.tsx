
const categories = [
  { name: "ExamPro", logo: "🔶" },
  { name: "AWS", logo: "☁️" },
  { name: "Azure", logo: "🅰️" },
  { name: "GCP", logo: "🌍" },
  { name: "NVIDIA", logo: "🟩" },
  { name: "Terraform", logo: "🔷" },
  { name: "Kubernetes", logo: "⚙️" },
  { name: "Linux", logo: "🐧" },
  { name: "CompTIA", logo: "📜" },
  { name: "Github", logo: "🐙" },
];

const BootcampCard = ({ title, description, buttonText }) => (
  <div className="bg-white shadow-xl p-14   w-[1200px]  flex items-end justify-between h-32 border-2 border-gray-200 rounded-lg ">
    <div>
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 ">
      {buttonText}
    </button>
  </div>
);

const Cards = () => {
  return (
    <div className="p-6 flex flex-col items-center gap-6  ">
     <BootcampCard
  title="Free GenAI Bootcamp Registration"
  description={
    <>
      Registration is now open for the Free GenAI Bootcamp <br />
      starting Feb 1st
    </>
  }
  buttonText="Register"
/>
      <div className="flex flex-wrap justify-center gap-4 max-w-[1800px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-xl p-4 rounded-lg w-32 h-24 flex flex-col items-center justify-center border-2 border-gray-200"
          >
            <span className="text-2xl">{category.logo}</span>
            <p className="text-sm mt-2">{category.name}</p>
          </div>
        ))}
      </div>
      <BootcampCard
  title="Monthly Supporter Subscription"
  description={
    <>
      When you want full access to the entire catalog 
      along with exclusive <br /> courses and benefits.
    </>
  }
  buttonText="Learn More"
/>
      <BootcampCard
  title="Bundles"
  description={
    <>
      When you purchase multiple courses you save with bundles.

Vie
    </>
  }
  buttonText="View Bundles"
/>


    </div>
  );
};

export default Cards;
