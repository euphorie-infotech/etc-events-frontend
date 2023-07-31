import { routes } from "./Routes/paths";
import MicroFooter from "./components/MicroFooter";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.name} />
        ))}
      </Routes>
      <MicroFooter />
    </>
  );
}

export default App;
