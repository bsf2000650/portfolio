import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";
import herobg from "../assets/herobg.png";
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] -mt-5" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-3xl sm:text-4xl md:text-4xl sm:-mt-10!`}
          >
            Hi, I am <span className="text-[#915eef]"> Asad Ullah</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 text-xl sm:text-2xl mt-2 sm:mt-0 md:mt-0 md:text-xl`}
          >
            I develop dynamic, scalable and user-friendly full stack MERN web
            apps.
          </p>
        </div>
      </div>
      <ComputerCanvas />
    </section>
  );
};

export default Hero;
