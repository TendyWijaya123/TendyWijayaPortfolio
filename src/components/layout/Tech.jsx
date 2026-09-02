import useTranslation from "../../hooks/useTranslation";
import TechRow from "../ui/TechRow";

const Tech = () => {
  const { t } = useTranslation();
  const frontEndTech = t("frontEndTech");
  const backEndTech = t("backEndTech");

  return (
    <section
      id="#tech"
      className="mt-10 w-full px-5 py-10 border-t-(--primary-color) border-t"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-5">Tech Stack</h1>
        <h2 className="text-3xl font-bold text-start">Frontend</h2>
        <div className="flex justify-center">
          <TechRow technologies={frontEndTech} />
        </div>

        <h2 className="text-3xl font-bold text-start">Backend</h2>
        <div className="flex justify-center">
          <TechRow technologies={backEndTech} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default Tech;
