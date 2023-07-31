import { useEffect } from "react";
import { routes } from "./Routes/paths";
import MicroFooter from "./components/MicroFooter";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.name} />
        ))}
      </Routes>
      {/* <MicroFooter /> */}
    </>
  );
}

export default App;
