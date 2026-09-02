import { motion } from "motion/react";
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <motion.img
        src="/Logo.svg"
        alt="Loading"
        className="h-20 w-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />{" "}
    </div>
  );
};
export default Loading;
