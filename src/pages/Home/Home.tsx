import "./Home.css";
import { useHome, HomeProps } from "./useHome";
import Overview from "../../components/Overview/Overview";
import { aboutUs, contactUs, data } from "../../data/data";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home: React.FC<HomeProps> = (props) => {
  const { uni2, uni1, theBoss } = useHome(props);

  return (
    <div>
      <section className=" hero">
        <div className="home-container1 ">
          <img src={uni2} alt="The Boss" style={{ width: "100%" }} />
          <img
            src={theBoss}
            alt="The Boss"
            style={{ width: "100%" }}
            className="hiddenInPc"
          />
          <img src={uni1} alt="The Boss" style={{ width: "100%" }} />
          <h1 className="h2"> University of Corsica</h1>
          <h2 className="h2">2024-2025 Master 2 Computer Science</h2>
        </div>
      </section>

      <Overview data={data} subtitle="Overview" title="Overview" />
      <AboutUs aboutUs={aboutUs} />
      <ContactUs contactUs={contactUs} />
    </div>
  );
};

export default Home;
