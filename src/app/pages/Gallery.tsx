import { motion } from "motion/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "/gallery/tethered-sketch.jpg",
      title: "Set Sketch",
      category: "Performance"
    },
    {
      url: "/gallery/tethered-set.jpg",
      title: "Metal",
      category: "Performance"
    },
    {
      url: "/gallery/tethered-felix.jpg",
      title: "Felix, Set Designer",
      category: "Performance"
    },
    {
      url: "/gallery/rose-costume.jpg",
      title: "Rose's Costume",
      category: "Performance"
    },
    {
      url: "/gallery/marianna-washingline.jpg",
      title: "Her Machine",
      category: "Performance"
    },
    {
      url: "/gallery/93-blueroom.jpg",
      title: "Tethered- 93 Feet Live",
      category: "Performance"
    },
    {
      url: "/gallery/93-bts.jpg",
      title: "BTS",
      category: "Performance"
    },
    {
      url: "blue-rose",
      title: "Rose",
      category: "Performance"
    },
    {
      url: "/gallery/dance1.jpg",
      title: "Move",
      category: "Dance"
    },
    {
      url: "/gallery/bts-tethered1.jpg",
      title: "Rose and Taylor",
      category: "Performance"
    },
    {
      url: "/gallery/burnt-rope.jpg",
      title: "Rope",
      category: "Dance"
    },
    {
      url: "/gallery/essay-installation1.jpg",
      title: "Writing on the wall",
      category: "Dance"
    },
    {
      url: "/gallery/ma-performance.jpg",
      title: "I-Harbourer",
      category: "Performance"
    },
    {
      url: "/gallery/rock-projection.jpg",
      title: "Rocks",
      category: "Installation"
    },
    {
      url: "/gallery/rose-and-taylor.jpg",
      title: "Edinburgh Fringe",
      category: "Performance"
    },
    {
      url: "/gallery/technorave.jpg",
      title: "Techno Tunnel Rave",
      category: "Experience"
    },
    {
      url: "/gallery/water-dance.jpg",
      title: "Splash",
      category: "Installation"
    },
    {
      url: "/gallery/clayhand.jpg",
      title: "Holding Hands",
      category: "Installation"
    }
  ];

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
            Visual moments from our immersive journeys
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 sticky top-16 bg-black/90 backdrop-blur-md z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white/20 text-white hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="1.5rem">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-400">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-400">{filteredImages[selectedImage].category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
