import { motion } from "motion/react";

export function Offerings() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHRlY2hub2xvZ3klMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNDU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Interactive installation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Our Offerings</h1>
          <p className="text-xl text-gray-300">
            Coming soon - creating transformative experiences through intentional design
          </p>
        </motion.div>
      </section>
    </div>
  );
}
