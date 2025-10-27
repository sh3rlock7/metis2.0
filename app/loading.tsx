"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const bars = [1, 2, 3, 4, 5];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0, scaleX: 0.8 }}
        transition={{ duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <div className="flex space-x-2">
          {bars.map((bar) => (
            <motion.div
              key={bar}
              className="w-3 animate-bounce h-10 bg-green-500 rounded"
              animate={{ y: ["0%", "-100%", "0%"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: bar * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
