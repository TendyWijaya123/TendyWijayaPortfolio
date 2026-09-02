import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useTranslation from "../../hooks/useTranslation";
import EducationSlide from "../ui/EducationSlide";
const Education = () => {
  const { t } = useTranslation();
  const educationHistories = t("educationHistory");
  const [selected, setSelected] = useState(0);
  return (
    <section
      id="education"
      className="w-full border-t border-t-(--primary-color) px-6 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      {/* TITLE */}
      <h1 className="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl lg:text-5xl">
        {t("education")}
      </h1>
      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-20 mx-auto w-full bg-(--bg-color) py-4">
        <div className="mx-auto w-full max-w-5xl overflow-x-auto">
          <div className="flex flex-col justify-center gap-5 border-b border-gray-700 px-4 sm:flex-row sm:gap-8">
            {" "}
            {educationHistories.map((education, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className="relative shrink-0 whitespace-nowrap px-2 pb-3 text-m font-medium transition-colors sm:px-4 sm:pb-4 sm:text-base "
              >
                {education.degree}
                {selected === index && (
                  <motion.div
                    layoutId="education-underline"
                    className=" absolute left-0 right-0 -bottom-px h-0.75 rounded-full bg-(--primary-color) "
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* SLIDE */}
      <div className="mx-auto w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <EducationSlide
            key={selected}
            education={educationHistories[selected]}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Education;
