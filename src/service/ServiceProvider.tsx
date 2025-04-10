import { useNavigate } from "react-router-dom";

const ServiceProvider = () => {
    const data = [
      { title: "Amazon Web Services", link: "/amazon" },
      { title: "Google Cloud ", link: "/google" },
      { title: "Microsoft Azure", link: "/azure" },
      { title: "Oracle Cloud", link: "/Oracle" },
      { title: "Kubernetes", link: "/kubernetes" },
      { title: "Hashicorp", link: "/hashicorp" },
      { title: "NVIDIA", link: "/nvidia" },
      { title: "CompTIA+", link: "/comptia" },
      { title: "Linux Professional Institute", link: "/lpi" },
      { title: "Github", link: "/github" },
      { title: "Special Cloud Packages", link: "/special" },
    ];
  const navigate=useNavigate()
    return (
      <div className="text-center py-12 bg-white">
        <h1 className="font-bold text-4xl mb-10">
          Choose A Cloud Service Provider
        </h1>
  
        <div className="flex flex-col items-center gap-4">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={()=>navigate(item.link)}
              className="w-96 py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-semibold shadow-sm hover:bg-orange-100 transition-all duration-200"
            >
              {item.title}
            
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceProvider;
  