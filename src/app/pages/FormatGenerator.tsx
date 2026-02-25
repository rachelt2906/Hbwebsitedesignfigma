import { motion } from "motion/react";
import { useState } from "react";
import { Shuffle, Download, Copy, Check } from "lucide-react";

export function FormatGenerator() {
  const [copied, setCopied] = useState(false);
  
  const [settings, setSettings] = useState({
    location: "indoor",
    audience: "intimate",
    duration: "short",
    technology: "medium",
    narrative: "linear",
    interaction: "guided"
  });

  const [generatedFormat, setGeneratedFormat] = useState<any>(null);

  const options = {
    location: {
      label: "Location Type",
      choices: [
        { value: "indoor", label: "Indoor Space" },
        { value: "outdoor", label: "Outdoor Environment" },
        { value: "water", label: "Water-based" },
        { value: "underground", label: "Underground/Tunnel" },
        { value: "vertical", label: "Vertical/Multi-level" }
      ]
    },
    audience: {
      label: "Audience Size",
      choices: [
        { value: "intimate", label: "Intimate (10-30)" },
        { value: "small", label: "Small Group (30-80)" },
        { value: "medium", label: "Medium (80-150)" },
        { value: "large", label: "Large (150+)" }
      ]
    },
    duration: {
      label: "Experience Duration",
      choices: [
        { value: "short", label: "Short (15-30 min)" },
        { value: "medium", label: "Medium (45-90 min)" },
        { value: "long", label: "Long (2+ hours)" },
        { value: "multi", label: "Multi-session" }
      ]
    },
    technology: {
      label: "Technology Integration",
      choices: [
        { value: "minimal", label: "Minimal Tech" },
        { value: "medium", label: "Medium Tech" },
        { value: "high", label: "High Tech" },
        { value: "cutting", label: "Cutting-edge" }
      ]
    },
    narrative: {
      label: "Narrative Structure",
      choices: [
        { value: "linear", label: "Linear Journey" },
        { value: "branching", label: "Branching Paths" },
        { value: "circular", label: "Circular/Loop" },
        { value: "fragmented", label: "Fragmented/Non-linear" }
      ]
    },
    interaction: {
      label: "Interaction Level",
      choices: [
        { value: "passive", label: "Passive Observation" },
        { value: "guided", label: "Guided Participation" },
        { value: "active", label: "Active Engagement" },
        { value: "co-creative", label: "Co-creative" }
      ]
    }
  };

  const formatTemplates: any = {
    // Define unique combinations
    "water-intimate-medium-medium-linear-guided": {
      title: "Canal Memory Walk",
      tagline: "A guided journey through waterways of remembrance",
      description: "Participants navigate canal locks while experiencing choreographed moments that explore migration and inherited stories. Each lock represents a transition point in personal and collective memory.",
      elements: ["Waterway navigation", "Lock mechanisms as metaphor", "Audio soundscapes", "Choreographed interventions"],
      inspiration: "Birmingham & Welsh harbours"
    },
    "underground-intimate-short-high-linear-guided": {
      title: "Liminal Passage",
      tagline: "A technological journey through transformative spaces",
      description: "Small groups traverse underground tunnels equipped with immersive audio and reactive lighting, experiencing the sensation of moving from one state of being to another.",
      elements: ["Tunnel environments", "Reactive lighting", "Spatial audio", "Progressive revelation"],
      inspiration: "Tunnels as experiential transformation"
    },
    "vertical-small-medium-medium-branching-active": {
      title: "The Ascending Stories",
      tagline: "Multi-level exploration of layered narratives",
      description: "Audiences climb through a vertical space (lighthouse, tower, etc.) where each level reveals different aspects of a story. Participants choose which path to take, creating unique experiences.",
      elements: ["Vertical architecture", "Choice-based navigation", "Layered storytelling", "Physical ascent as metaphor"],
      inspiration: "Body as harbour of memory"
    }
  };

  const generateFormat = () => {
    const key = `${settings.location}-${settings.audience}-${settings.duration}-${settings.technology}-${settings.narrative}-${settings.interaction}`;
    
    // Check if we have a specific template
    if (formatTemplates[key]) {
      setGeneratedFormat(formatTemplates[key]);
    } else {
      // Generate a dynamic format
      const format = {
        title: generateTitle(),
        tagline: generateTagline(),
        description: generateDescription(),
        elements: generateElements(),
        inspiration: "The Harbourers' devised methodology"
      };
      setGeneratedFormat(format);
    }
  };

  const generateTitle = () => {
    const adjectives = ["Liminal", "Harboured", "Transitional", "Immersive", "Navigated", "Embodied"];
    const nouns = ["Journey", "Passage", "Experience", "Memories", "Spaces", "Stories"];
    return `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
  };

  const generateTagline = () => {
    const themes = [
      "Between past and future",
      "Navigating transformation",
      "A journey through memory",
      "Spaces of connection",
      "Embodied narratives"
    ];
    return themes[Math.floor(Math.random() * themes.length)];
  };

  const generateDescription = () => {
    const locationDesc: any = {
      indoor: "within an intimate interior space",
      outdoor: "across an outdoor environment",
      water: "along and through waterways",
      underground: "in subterranean passages",
      vertical: "through multiple vertical levels"
    };

    const audienceDesc: any = {
      intimate: "small groups of 10-30 participants",
      small: "groups of 30-80 people",
      medium: "audiences of 80-150",
      large: "large gatherings of 150+"
    };

    const interactionDesc: any = {
      passive: "observe and absorb",
      guided: "are guided through curated moments",
      active: "actively engage with the environment",
      "co-creative": "co-create the experience in real-time"
    };

    return `An immersive experience ${locationDesc[settings.location]} where ${audienceDesc[settings.audience]} ${interactionDesc[settings.interaction]}. Through spatially designed choreography and immersive technology, the experience brings to the forefront the situatedness of human existence.`;
  };

  const generateElements = () => {
    const elements = [];
    
    if (settings.technology !== "minimal") {
      elements.push("Immersive audio design");
    }
    if (settings.technology === "high" || settings.technology === "cutting") {
      elements.push("Interactive projections", "Responsive technology");
    }
    if (settings.interaction !== "passive") {
      elements.push("Participatory moments");
    }
    if (settings.location === "water") {
      elements.push("Waterway navigation");
    }
    if (settings.narrative === "branching") {
      elements.push("Choice-based pathways");
    }
    elements.push("Spatially designed choreography", "Site-specific interventions");
    
    return elements;
  };

  const randomize = () => {
    const newSettings: any = {};
    Object.keys(options).forEach(key => {
      const choices = options[key as keyof typeof options].choices;
      newSettings[key] = choices[Math.floor(Math.random() * choices.length)].value;
    });
    setSettings(newSettings);
  };

  const copyToClipboard = () => {
    if (generatedFormat) {
      const text = `${generatedFormat.title}\n${generatedFormat.tagline}\n\n${generatedFormat.description}\n\nKey Elements:\n${generatedFormat.elements.map((e: string) => `- ${e}`).join('\n')}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Format Generator</h1>
          <p className="text-xl text-gray-300 mb-4">
            Our devised formula for consistently generating new formats of immersive experiences
          </p>
          <p className="text-gray-400">
            Adjust the parameters below to generate a unique immersive experience format
          </p>
        </motion.div>
      </section>

      {/* Generator Interface */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl">Experience Parameters</h2>
                <button
                  onClick={randomize}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Shuffle size={18} />
                  Randomize
                </button>
              </div>

              <div className="space-y-8">
                {Object.entries(options).map(([key, option]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-sm tracking-wider mb-3 text-gray-400">
                      {option.label}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {option.choices.map((choice) => (
                        <button
                          key={choice.value}
                          onClick={() => setSettings({ ...settings, [key]: choice.value })}
                          className={`p-3 text-sm transition-all ${
                            settings[key as keyof typeof settings] === choice.value
                              ? 'bg-white text-black'
                              : 'bg-white/5 border border-white/10 hover:border-white/30'
                          }`}
                        >
                          {choice.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={generateFormat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-12 py-4 bg-white text-black text-lg tracking-wider hover:bg-gray-200 transition-colors"
              >
                Generate Format
              </motion.button>
            </div>

            {/* Output */}
            <div className="lg:sticky lg:top-24 h-fit">
              {!generatedFormat ? (
                <div className="h-full min-h-[400px] flex items-center justify-center border border-white/10 bg-white/5">
                  <div className="text-center text-gray-500 p-8">
                    <p className="text-lg mb-2">No format generated yet</p>
                    <p className="text-sm">Adjust the parameters and click "Generate Format"</p>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border border-white/20 bg-gradient-to-br from-gray-900 to-black p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl mb-2">{generatedFormat.title}</h2>
                      <p className="text-lg italic text-gray-400">{generatedFormat.tagline}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={copyToClipboard}
                        className="p-2 bg-white/10 hover:bg-white/20 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="h-px bg-white/10 mb-6" />

                  <div className="mb-6">
                    <h3 className="text-sm tracking-wider mb-3 text-gray-400">DESCRIPTION</h3>
                    <p className="text-gray-300 leading-relaxed">{generatedFormat.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm tracking-wider mb-3 text-gray-400">KEY ELEMENTS</h3>
                    <ul className="space-y-2">
                      {generatedFormat.elements.map((element: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                          {element}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-500 italic">
                      Inspired by: {generatedFormat.inspiration}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center italic">
              Our Devised Methodology
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Through a devised formula, we consistently generate new formats of immersive experiences, 
              to help navigate people in their perceptive expansion. Each format is intentionally designed—
              not spectacle for spectacle's sake, but rich, purposeful experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Site-specific location as foundation",
                "Spatial choreography integration",
                "Intentional technology use",
                "Narrative-driven structure",
                "Audience journey design",
                "Community connection focus"
              ].map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-black/50 border border-white/10"
                >
                  <p className="text-sm text-gray-300">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
