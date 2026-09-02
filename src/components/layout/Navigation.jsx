import { ChevronDown, Eclipse, Languages, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import useTranslation from "../../hooks/useTranslation";
import "./Navigation.css";

const Navigation = () => {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const { language, t, changeLanguage } = useTranslation();
  const { scrollY } = useScroll();

  // =========================
  // THEME
  // =========================

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const onThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  // =========================
  // NAVBAR HIDE ON SCROLL
  // =========================

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // =========================
  // MOBILE MENU
  // =========================

  const onMenuChange = () => {
    setIsOpen((prev) => !prev);
  };

  // =========================
  // LANGUAGE
  // =========================

  const onLanguageChange = (language) => {
    changeLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        border-b
        border-gray-500/50
        bg-(--bg-color)
        p-6
        sm:p-8
        lg:p-10
      "
    >
      {/* =========================
          LOGO
      ========================= */}

      <h1 className="text-xl font-semibold">
        Tendy <span className="text-(--accent-color)">Wijaya</span>
      </h1>

      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="flex items-center gap-3">
        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <a
              href="#home"
              className="transition hover:text-(--primary-color) hover:underline"
            >
              {t("home")}
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="transition hover:text-(--primary-color) hover:underline"
            >
              {t("education")}
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="transition hover:text-(--primary-color) hover:underline"
            >
              {t("experience")}
            </a>
          </li>

          <li>
            <a
              href="#certification"
              className="transition hover:text-(--primary-color) hover:underline"
            >
              {t("certification")}
            </a>
          </li>
        </ul>

        {/* =========================
            THEME BUTTON
        ========================= */}

        <button
          onClick={onThemeChange}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-(--secondary-color)
          "
          aria-label="Toggle theme"
        >
          <Eclipse size={20} />
        </button>

        {/* =========================
            LANGUAGE MENU
        ========================= */}

        <div className="relative">
          <button
            aria-label="toggle Language Menu"
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
            className="
              flex
              items-center
              gap-1
              rounded-lg
              px-2
              py-2
              text-sm
              font-medium
              transition
              hover:bg-(--secondary-color)
            "
          >
            <Languages size={18} />

            <span>{language.toUpperCase()}</span>

            <motion.div
              animate={{
                rotate: isLanguageMenuOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <ChevronDown size={14} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isLanguageMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="
                  absolute
                  right-0
                  top-11
                  z-50
                  w-24
                  overflow-hidden
                  rounded-xl
                  border
                  border-(--secondary-color)
                  bg-(--bg-color)
                  p-1
                  shadow-lg
                "
              >
                <button
                  aria-label="toggle english menu"
                  onClick={() => onLanguageChange("en")}
                  className="
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    text-left
                    text-sm
                    transition
                    hover:bg-(--secondary-color)
                  "
                >
                  🇬🇧 EN
                </button>

                <button
                  aria-label="toggle indonesia menu"
                  onClick={() => onLanguageChange("id")}
                  className="
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    text-left
                    text-sm
                    transition
                    hover:bg-(--secondary-color)
                  "
                >
                  🇮🇩 ID
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        <div className="relative md:hidden">
          <button
            onClick={onMenuChange}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-(--secondary-color)
            "
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Menu size={22} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  absolute
                  right-0
                  top-12
                  z-50
                  w-52
                  overflow-hidden
                  rounded-xl
                  border
                  border-(--secondary-color)
                  bg-(--bg-color)
                  shadow-xl
                "
              >
                <ul className="flex flex-col p-1">
                  <li>
                    <a
                      href="#home"
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-lg
                        p-3
                        transition
                        hover:bg-(--secondary-color)
                      "
                    >
                      {t("home")}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-lg
                        p-3
                        transition
                        hover:bg-(--secondary-color)
                      "
                    >
                      {t("about")}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#education"
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-lg
                        p-3
                        transition
                        hover:bg-(--secondary-color)
                      "
                    >
                      {t("education")}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#certification"
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-lg
                        p-3
                        transition
                        hover:bg-(--secondary-color)
                      "
                    >
                      {t("certification")}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#experience"
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-lg
                        p-3
                        transition
                        hover:bg-(--secondary-color)
                      "
                    >
                      {t("experience")}
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
