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
      url: "tethered-felix",
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
      url: "https://images.unsplash.com/photo-1763373569776-1d5cb36dcdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHR1bm5lbCUyMGxpZ2h0fGVufDF8fHx8MTc3MTQ1Nzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Liminal Transitions",
      category: "Experience"
    },
    {
      url: "https://images.unsplash.com/photo-1759502418494-bee52af25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG1vc3BoZXJpYyUyMHN0YWdlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcxNDU4MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Atmospheric Design",
      category: "Installation"
    },
    {
      url: "https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHRlY2hub2xvZ3klMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNDU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Interactive Technology",
      category: "Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1759955074535-2cc73232e056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0aW9uJTIwbWFwcGluZyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTQ1ODIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Projection Mapping",
      category: "Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXRlJTIwc3BlY2lmaWMlMjBhcnQlMjBvdXRkb29yc3xlbnwxfHx8fDE3NzE0NTgyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Outdoor Interventions",
      category: "Site-Specific"
    },
    {
      url: "https://images.unsplash.com/photo-1613310766323-d6dd5bce268d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjB0aGVhdHJlJTIwZGFya3xlbnwxfHx8fDE3NzE0NTgyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Experimental Forms",
      category: "Performance"
    },
    {
      url: "https://images.unsplash.com/photo-1542031630-99647f0f3e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJib3IlMjB3YXRlcmZyb250JTIwdHdpbGlnaHR8ZW58MXx8fHwxNzcxNDU3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Harbor Horizons",
      category: "Site-Specific"
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
