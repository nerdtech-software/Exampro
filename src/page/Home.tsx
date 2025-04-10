import Cards from "../components/Cards";
import Cloud from "../components/Cloud";
import Flashcard from "../components/Flashcard";
import MeetYourFavorite from "../components/MeetYourFavorite";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Cloud />
      <Cards />
      <Testimonials />
      <MeetYourFavorite />
      <Flashcard />
    </div>
  );
};

export default Home;
