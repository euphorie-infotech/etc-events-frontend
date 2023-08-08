import { useEffect } from "react";
import { routes } from "./routes/paths";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {pathname != "/checkout" && <Navbar />}
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.name} />
        ))}
      </Routes>
      {pathname != "/checkout" && <Footer />}
    </>
  );
}

export default App;
