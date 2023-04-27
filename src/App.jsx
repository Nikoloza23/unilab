import Landing from "./pages/landing/Landing";
import SignIn from "./pages/sign/SignIn";
import Todo from "./pages/todo/Todo";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
