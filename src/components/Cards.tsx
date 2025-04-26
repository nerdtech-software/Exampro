import { Link } from "react-router-dom";

import React, { JSX } from "react";
import aws from "../assets/aws-logo.svg";
import Azure from "../assets/azure-logo.svg";
import exampro from "../assets/exampro-logo.svg";
import google from "../assets/gcp-logo.svg";
import github from "../assets/github-logo.svg";
import hashicorp from "../assets/hashicorp-logo.svg";
import kubernetes from "../assets/kubernetes-logo.svg";
import linux from "../assets/linux-logo.svg";
import nvidia from "../assets/nvidia-logo.svg";

interface category{
  name:string;
  logo:string;
  link:string;
};

interface BootcampCardProps {
  title: string;
  description: string | JSX.Element;
  buttonText: string;
}

const categories:category[] =[
  { name: "ExamPro", logo: exampro, link: "/cloud" },
  { name: "AWS", logo: aws, link: "/amazon" },
  { name: "Azure", logo: Azure, link: "/azure" },
  { name: "GCP", logo: google, link: "/google" },
  { name: "NVIDIA", logo: nvidia, link: "/nvidia" },
  { name: "Terraform", logo: hashicorp, link: "/terraform" },
  { name: "Kubernetes", logo: kubernetes, link: "/kubernetes" },
  { name: "Linux", logo: linux, link: "/lpi" },
  // { name: "CompTIA", logo: comptia, link: "/comptia" },
  { name: "Github", logo: github, link: "/github" },
];

const BootcampCard:React.FC<BootcampCardProps>=({
  title,
  description,
  buttonText,
})=>(
  <div className="bg-white shadow-xl p-6 w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between border-2 border-gray-200 rounded-lg gap-4">
  <div>
    <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
  </div>
  <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-600 text-sm sm:text-base">
    {buttonText}
  </button>
</div>

);

const Cards:React.FC =() => {
  return (
    <div className="p-4 sm:p-6 flex flex-col items-center gap-6 w-full">
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

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl">
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className="bg-white shadow-xl rounded-lg w-28 sm:w-32 h-28 sm:h-32 flex flex-col items-center justify-center border-2 border-gray-200 hover:shadow-2xl transition duration-200"
          >
            <img
              className="w-16 sm:w-20 mt-2"
              src={category.logo}
              alt={category.name}
            />
            <span className="text-xs sm:text-sm text-center mt-1">
              {category.name}
            </span>
          </Link>
        ))}
      </div>

      <BootcampCard
        title="Monthly Supporter Subscription"
        description={
          <>
            When you want full access to the entire catalog along with <br />
            exclusive courses and benefits.
          </>
        }
        buttonText="Learn More"
      />

      <BootcampCard
        title="Bundles"
        description={
          <>
            When you purchase multiple courses you save with bundles.
          </>
        }
        buttonText="View Bundles"
      />
    </div>
  );
};

export default Cards;
