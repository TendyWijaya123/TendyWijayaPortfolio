import { motion } from "motion/react";
import { CalendarDays, GraduationCap, Award, CircleCheck } from "lucide-react";

const EducationSlide = ({ education }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 60,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: -60,
        scale: 0.97,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        mt-10
        rounded-3xl
        border border-(--secondary-color)/30
        bg-(--bg-color)
        p-6 sm:p-8 md:p-10
      "
    >
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          items-center
          gap-8
          md:grid
          md:grid-cols-[180px_1fr]
          md:items-center
          md:gap-12
        "
      >
        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          className="
            flex
            size-36
            sm:size-40
            items-center
            justify-center
            rounded-3xl
            border
            border-(--secondary-color)/30
            bg-white/5
            p-5
            backdrop-blur-sm
          "
        >
          <img
            src={education.image}
            alt={education.school}
            className="size-full object-contain"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="w-full">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mb-2 flex items-center gap-2"
          >
            <GraduationCap size={18} className="text-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              {education.degree}
            </span>
          </motion.div>

          {/* School */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.35 }}
            className="
              text-2xl
              font-bold
              sm:text-3xl
              md:text-4xl
            "
          >
            {education.school}
          </motion.h2>

          {/* Major */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.35 }}
            className="
              mt-2
              text-base
              text-gray-500
              dark:text-gray-400
              sm:text-lg
            "
          >
            {education.major}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="
              my-6
              h-px
              bg-(--secondary-color)/20
            "
          />

          {/* Metadata */}
          <div className="flex flex-wrap gap-3">
            {/* Period */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-(--secondary-color)/20
                px-4
                py-2.5
                text-sm
              "
            >
              <CalendarDays size={16} className="text-blue-500" />

              <span>{education.period}</span>
            </motion.div>

            {/* Grade */}
            {education.grade && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-(--secondary-color)/20
                  px-4
                  py-2.5
                  text-sm
                "
              >
                <Award size={16} className="text-yellow-500" />

                <span>{education.grade}</span>
              </motion.div>
            )}

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-(--secondary-color)/20
                px-4
                py-2.5
                text-sm
              "
            >
              <CircleCheck size={16} className="text-green-500" />

              <span>{education.status}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default EducationSlide;
