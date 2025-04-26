import React from "react";


interface CourseCardProps {
  title:string,
  imgSrc:string
}
const CourseCard:React.FC<CourseCardProps>=({ title, imgSrc })=> {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={imgSrc} alt={title} className="w-24 mb-4" />
      <p className="text-center text-gray-700 font-medium">{title}</p>
    </div>
  );
}

export default CourseCard;
