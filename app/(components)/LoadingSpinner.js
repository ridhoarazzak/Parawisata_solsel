'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-teal-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 1
        }}
      />
    </div>
  );
          }
