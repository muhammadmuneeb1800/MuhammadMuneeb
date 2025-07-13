import styles from "../style";
import { motion } from "framer-motion";
import { profilePic } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex flex-col justify-between items-center">
        {/* Top Logo */}
        <div className="flex items-center gap-1 select-none">
          <p className="text-cyan-300 text-4xl font-bold">{"{"}</p>
          <p className="text-white mt-2 font-semibold">{"M MUNEEB"}</p>
          <p className="text-cyan-300 text-4xl font-bold">{"}"}</p>
        </div>

        {/* Bottom Profile Picture */}
        <div>
          <img
            src={profilePic}
            alt="Umair Azmat"
            className="w-[80px] h-[80px] border-2 border-teal-200 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
