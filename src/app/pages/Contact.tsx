import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "commission",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "commission",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542031630-99647f0f3e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJib3IlMjB3YXRlcmZyb250JTIwdHdpbGlnaHR8ZW58MXx8fHwxNzcxNDU3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Harbor"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Begin your journey with The Harbourers
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8">Let's Create Together</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Whether you're interested in commissioning a new work, collaborating on a community project, 
                or exploring our touring productions, we'd love to hear from you.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a 
                      href="mailto:theharbourerstheatre@gmail.com" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      theharbourerstheatre@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2">Based in</h3>
                    <p className="text-gray-400">
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10">
                <h3 className="text-xl mb-4">What We're Looking For</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Venues interested in commissioning original work
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Communities with stories to tell
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Organisations seeking creative consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Brands wanting authentic immersive experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Partners for touring productions
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider mb-2 text-gray-400">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider mb-2 text-gray-400">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm tracking-wider mb-2 text-gray-400">
                    ORGANISATION
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white"
                    placeholder="Your organisation (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm tracking-wider mb-2 text-gray-400">
                    I'M INTERESTED IN *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white"
                  >
                    <option value="commission">Commissioning a new work</option>
                    <option value="community">Community project</option>
                    <option value="consultation">Creative consultation</option>
                    <option value="brand">Brand experience</option>
                    <option value="touring">Touring production</option>
                    <option value="other">Other collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider mb-2 text-gray-400">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className={`w-full py-4 flex items-center justify-center gap-2 text-lg tracking-wider transition-all ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  We aim to respond to all inquiries within 48 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
