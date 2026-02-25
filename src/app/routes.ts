import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
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
      { path: "about", Component: About },
      { path: "work", Component: PreviousWork },
      { path: "gallery", Component: Gallery },
      { path: "offerings", Component: Offerings },
      { path: "formats", Component: FormatGenerator },
      { path: "contact", Component: Contact },
    ],
  },
]);