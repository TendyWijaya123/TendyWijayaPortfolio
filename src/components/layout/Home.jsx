import Certification from "./Certification";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Tech from "./Tech";

const Home = () => {
  return (
    <div className="layout bg-(var(--bg-color)) min-h-screen">
      <Navigation />
      <main>
        <Profile />
        <Education />
        <Experience />
        <Certification />
        <Tech />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
