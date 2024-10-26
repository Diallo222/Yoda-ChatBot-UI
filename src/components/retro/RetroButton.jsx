import { motion } from "framer-motion";

const RetroButton = ({ label, onpress }) => {
  return (
    <motion.button
      onClick={onpress}
      whileTap={{
        scale: 0.975,
      }}
      className={`group relative overflow-hidden rounded-none focus:border-none  py-2 px-4 bg-stone-300  text-[16px] font-silkscreen  text-black transition-colors hover:border-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000] active:translate-x-[0px] active:translate-y-[0px]`}
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{label}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125  opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default RetroButton;
