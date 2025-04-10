import { FaBolt } from "react-icons/fa";

const Flashcard = () => {
  const data=[{
    title: "Our flashcards help you never forget.",
    description:
      "Powered by spaced repetition learning algorithm.",
    imageUrl:
      "https://www.exampro.co/assets/home/nextgen/screenshot-flashcards.webp",
  },{
      title:
      "Perfect cheat sheets for the day of your exam.",
    description:
      " Our cheatsheets are printer-friendly and only what you need to know..",
    imageUrl:
      "https://www.exampro.co/assets/home/nextgen/screenshot-cheatsheets.webp",

  },
  {
    title:
      "Save time and copy our study notes.",
    description:
      "Under each video we write out detailed study notes",
    imageUrl:
      "https://www.exampro.co/assets/home/nextgen/screenshot-notes.webp",

  }

]
return (
  <div className="p-6 text-center space-y-10">
    {data.map((card, index) => (
      <div key={index}>
        <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
        <p className="text-lg text-gray-600 flex justify-center items-center gap-2">
          <FaBolt className="text-blue-500" />
          <span>
            Powered by{" "}
            <span className="text-red-500 font-semibold">
              spaced repetition learning
            </span>{" "}
            algorithm.
          </span>
        </p>
        <div className="flex justify-center mt-4">
          <img
            className="w-[50%] rounded shadow"
            src={card.imageUrl}
            alt="Flashcard Visual"
          />
        </div>
      </div>
    ))}
  </div>
);
};

export default Flashcard;
