import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PreviousWork } from "./pages/PreviousWork";
import { Gallery } from "./pages/Gallery";
import { FormatGenerator } from "./pages/FormatGenerator";
import { Offerings } from "./pages/Offerings";
import { Contact } from "./pages/Contact";
import { OurPhilosophy } from "./pages/OurPhilosophy"; 
import { Glossary } from "./pages/Glossary"; 
import { Team } from "./pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About, children: [    
        { path: "team", Component: Team },      
        { path: "our-philosophy", Component: OurPhilosophy },
        { path: "glossary", Component: Glossary }            
      ]},
      { path: "work", Component: PreviousWork },
      { path: "gallery", Component: Gallery },
      { path: "offerings", Component: Offerings, children: [ 
        { path: "format-generator", Component: FormatGenerator } 
      ]},
      { path: "contact", Component: Contact },
    ],
  },
]);