import { motion } from "motion/react";

const TechRow = ({ technologies, reverse = false }) => {
  const items = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex w-32 shrink-0 items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <img
                src={item.icon}
                alt={item.name}
                className="h-20 w-20 object-contain"
              />

              <span className="whitespace-nowrap text-sm font-medium">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechRow;
