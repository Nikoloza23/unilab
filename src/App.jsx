import Landing from "./pages/landing/Landing";
import SignIn from "./pages/sign/SignIn";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
