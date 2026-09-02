const Footer = () => {
  return (
    <footer className="w-full border-t border-(--primary-color) px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-24 lg:py-20">
      <div className="flex w-full flex-row justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-20">
        <div className="flex flex-col items-start">
          <img
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"
            src="Logo.svg"
            alt="Tendy Wijaya Logo"
          />
        </div>

        <div className="flex flex-col items-start">
          <h3 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg md:mb-5 md:text-2xl">
            Navigation
          </h3>

          <div className="flex flex-col gap-2 text-xs sm:gap-3 sm:text-sm md:text-lg">
            <a
              href="#home"
              className="transition duration-300 hover:translate-x-1 hover:text-blue-500"
            >
              Home
            </a>

            <a
              href="#education"
              className="transition duration-300 hover:translate-x-1 hover:text-blue-500"
            >
              Education
            </a>

            <a
              href="#certification"
              className="transition duration-300 hover:translate-x-1 hover:text-blue-500"
            >
              Certification
            </a>

            <a
              href="#experience"
              className="transition duration-300 hover:translate-x-1 hover:text-blue-500"
            >
              Experience
            </a>
          </div>
        </div>

        <div id="connect" className="flex flex-col items-start">
          <h3 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg md:mb-5 md:text-2xl">
            Connect With Me
          </h3>

          <div className="flex gap-2 sm:gap-3 md:gap-5">
            <a
              href="https://github.com/TendyWijaya123"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <img
                className="h-7 w-7 object-contain sm:h-9 sm:w-9 md:h-12 md:w-12"
                src="github-logo.svg"
                alt="GitHub"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/tendy-wijaya-1a979327a/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <img
                className="h-7 w-7 object-contain sm:h-9 sm:w-9 md:h-12 md:w-12"
                src="linkedin-logo.svg"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <img
                className="h-7 w-7 object-contain sm:h-9 sm:w-9 md:h-12 md:w-12"
                src="instagram-logo.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-(--primary-color) pt-6 text-center text-xs text-gray-500 sm:mt-12 sm:pt-8 sm:text-sm md:text-lg">
        © {new Date().getFullYear()} Tendy Wijaya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
