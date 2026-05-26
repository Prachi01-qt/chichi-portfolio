"use client";

import { motion } from "framer-motion";
import useSound from "use-sound";

type WindowProps = {
  darkMode?: boolean;

  title: string;
  children: React.ReactNode;
  onClose?: () => void;

  x?: string;
  y?: string;

  zIndex?: number;
  onFocus?: () => void;
};

export default function Window({
  darkMode = false,

  title,
  children,
  onClose,

  x = "30%",
  y = "20%",

  zIndex = 20,
  onFocus,
}: WindowProps) {
  const [playClose] = useSound(
    "/sounds/close.wav",
    {
      volume: 0.4,
    }
  );
  return (
    <motion.div
      drag
      dragMomentum={false}

      onMouseDown={onFocus}

      initial={{
        opacity: 0,
        scale: 0.2,
        y: 80,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        scale: 0.5,
        y: 40,
      }}

      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}

      whileTap={{
        scale: 0.98,
      }}

      style={{
        left: x,
        top: y,
        zIndex,
      }}

      className={`absolute w-[px500] rounded-[7px] border-2 shadow-2xl transition-colors duration-500 ${
        darkMode
          ? "border-white bg-[#102347]"
          : "border-gray-400 bg-[#f8f8f8]"
      }`}
    >

      {/* Title Bar */}
      <div
        className={`flex cursor-move items-center justify-between rounded-t-[7px] px-5 py-3 text-lg text-white transition-colors duration-500 ${
          darkMode
            ? "bg-black"
            : "bg-[#3e3e3e]"
        }`}
      >

        <span>{title}</span>

        <button
          onClick={() => {

            playClose();

            if (onClose) {
              onClose();
            }

          }}
          className="rounded bg-red-500 px-2 text-sm transition hover:bg-red-600"
        >
          ✕
        </button>

      </div>

      {/* Content */}
      <div
        className={`p-8 transition-colors duration-500 ${
          darkMode
            ? "text-white"
            : "text-gray-700"
        }`}
      >
        {children}
      </div>

    </motion.div>
  );
}