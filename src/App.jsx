import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
