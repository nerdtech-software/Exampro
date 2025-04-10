
const testimonials = [
  {
    name: "Chris McClure",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "It's insane this is free. Amazing course! People like you make the world a better place. Never change!!!",
  },
  {
    name: "Md Shadab Siddique",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Thanks for this course! I cleared my AWS Exam today by following this and the practice exam on ExamPro only.",
  },
  {
    name: "snxphy",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Passed my exam 20 mins ago, wouldn't have passed without this!",
  },
  {
    name: "Girish Gururani",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "I passed AZ-900 exam today with a score of 916. Thanks a lot, Andrew, for this awesome video!",
  },
  {
    name: "shorajy spencer Guzha",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "Thanks again, Andrew Brown. Azure Fundamentals passed following your video. Now working towards AWS solutions architect!",
  },
  {
    name: "ravinder reddy",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "Andrew, you are just the best, hitting the right nodes for passing the exam. Thank you for free community learning!",
  },
  {
    name: "Icey A",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    review: "I love the course and your energy while teaching. Great teachings make it engaging!",
  },
  {
    name: "Frank Alvarez",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    review:
      "Thank you Andrew for sharing your knowledge! Easy to follow and very clear expectations. Wish you the best!",
  },
  {
    name: "Donna Farrell",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "I studied for 2 months and passed it! Just got an AWS job offer today. Thanks for all the work you put in!",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            {/* Star Ratings */}
            <div className="text-yellow-400 text-xl">★★★★★</div>
            {/* Review Text */}
            <p className="text-gray-700 mt-2">“ {testimonial.review} ”</p>
            {/* User Profile */}
            <div className="flex flex-col items-center mt-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <p className="font-semibold mt-2">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Read More Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
