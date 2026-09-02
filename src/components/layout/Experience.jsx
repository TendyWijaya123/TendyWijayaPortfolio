import useTranslation from "../../hooks/useTranslation";

const Experience = () => {
  const { t } = useTranslation();

  const experienceHistories = t("experienceHistory");

  return (
    <section
      id="experience"
      className="w-full border-t border-(--primary-color) px-6 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <h1 className="mb-12 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        {t("experience")}
      </h1>

      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-(--secondary-color) sm:left-1/2 sm:-translate-x-1/2" />

          {experienceHistories.map((experience, index) => (
            <div key={index} className="relative mb-12 min-h-40 sm:mb-16">
              <div className="absolute left-0 top-0 z-10 h-7 w-7 rounded-full border-4 border-(--bg-color) bg-(--primary-color) sm:left-1/2 sm:-translate-x-1/2" />

              <div
                className={`ml-12 w-[calc(100%-3rem)] sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:text-right"
                    : "sm:ml-auto sm:text-left"
                }`}
              >
                <div
                  className={`mb-4 flex items-center gap-4 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  <img
                    src={`${experience.icon}`}
                    alt={experience.companyName}
                    className="h-20 w-20 rounded-xl object-contain"
                  />

                  <div>
                    <p className="text-sm font-medium text-(--accent-color)">
                      {experience.duration}
                    </p>

                    <h2 className="text-2xl font-bold text-(--text-color)">
                      {experience.role}
                    </h2>

                    <h3 className="text-lg font-semibold text-(--primary-color)">
                      {experience.companyName}
                    </h3>
                  </div>
                </div>

                <p className="leading-relaxed text-(--text-color)/70">
                  {experience.description}
                </p>

                <div
                  className={`mt-5 flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  {experience.skill.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-(--secondary-color) px-3 py-1 text-xs font-medium text-(--primary-color)"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
