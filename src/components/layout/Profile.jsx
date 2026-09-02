import { motion, useScroll } from "motion/react";
import useTranslation from "../../hooks/useTranslation";
import profileImage from "../../assets/profileImage.jpg";
const Profile = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      id="home"
      className="m-2  p-5  flex flex-wrap gap-20 md:gap-50 content-center justify-center border-b border-(--secondary-color) min-h-svh"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
    >
      <div>
        <h1 className="font-semibold text-(--primary-color) text-4xl">
          {t("introduction")}
        </h1>
        <h1 className="text-8xl">Tendy Wijaya</h1>
        <h1 className="text-4xl">
          Web <span className="text-(--primary-color)">Developer</span>
        </h1>
        <p className="max-w-90 text-2xl">{t("profileDescription")}</p>
        <br />
        <button className=" text-2xl bg-(--primary-color) p-2 rounded-xl text-(--text-color) font-bold hover:bg-(--accent-color)">
          <a href="#connect">{t("contactMe")}</a>
        </button>
      </div>
      <div>
        <img
          src={profileImage}
          alt=""
          className="w-60 h-60  rounded-full border-5 border-(--primary-color)"
          fetchPriority="high"
        />
      </div>
    </motion.div>
  );
};

export default Profile;
