import { motion } from "motion/react";

export function Gallery() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Coming soon - visual moments from our immersive journeys
          </p>
        </motion.div>
      </section>
    </div>
  );
}
