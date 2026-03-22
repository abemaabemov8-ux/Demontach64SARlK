import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

// Используем HashRouter для совместимости с GitHub Pages
export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
    ],
  },
]);