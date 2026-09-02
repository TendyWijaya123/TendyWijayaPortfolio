import useTranslation from "../../hooks/useTranslation";

const Certification = () => {
  const { t } = useTranslation();

  const certificationHistories = t("certificationHistories");

  return (
    <section
      id="certification"
      className="w-full border-t border-(--primary-color) px-6 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <h1 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl lg:text-5xl">
        {t("certification")}
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificationHistories.map((certification, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-(--secondary-color) bg-(--secondary-color)"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={certification.filePath}
                alt={certification.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold sm:text-xl">
                {certification.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
