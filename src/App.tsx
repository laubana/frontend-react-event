import { Route, Routes } from "react-router-dom";
import Home from "./page/Common/Home";
import Layout from "./layout/Layout";
import Signin from "./page/Auth/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/">
        <Route path="auth">
          <Route path="signin" element={<Signin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
