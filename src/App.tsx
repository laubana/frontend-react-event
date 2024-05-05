import { Route, Routes } from "react-router-dom";
import Home from "./page/Common/Home";
import Layout from "./layout/Layout";
import SignIn from "./page/Auth/SignIn";
import SignUp from "./page/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/">
        <Route path="auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
