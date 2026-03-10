import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { OurPhilosophy } from "./pages/OurPhilosophy";
import { Glossary } from "./pages/Glossary";
import { PreviousWork } from "./pages/PreviousWork";
import { Gallery } from "./pages/Gallery";
import { FormatGenerator } from "./pages/FormatGenerator";
import { Offerings } from "./pages/Offerings";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        children: [
          { index: true, Component: About },
          { path: "team", Component: Team },
          { path: "philosophy", Component: OurPhilosophy },
          { path: "glossary", Component: Glossary },
        ],
      },
      { path: "work", Component: PreviousWork },
      { path: "gallery", Component: Gallery },
      {
        path: "offerings",
        children: [
          { index: true, Component: Offerings },
          { path: "format-generator", Component: FormatGenerator },
        ],
      },
      { path: "contact", Component: Contact },
    ],
  },
]);