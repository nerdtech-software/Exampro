import React from "react";

interface BootcampCardProps{
  title:string,
  imgSrc:string,
  tier:string
}

const BootcampCard:React.FC<BootcampCardProps>=({ title, imgSrc, tier })=> {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <img src={imgSrc} alt={title} className="w-32 mb-4" />
      <p className="text-gray-600">{title}</p>
      <p className="mt-2 text-sm text-gray-500">{tier}</p>
    </div>
  );
}

export default BootcampCard;
