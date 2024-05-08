import { Route, Routes } from "react-router-dom";
import Auth from "./layout/Auth";
import Protect from "./layout/Protect";
import Layout from "./layout/Layout";
import Home from "./page/Common/Home";
import Create from "./page/Group/Create";
import Detail from "./page/Group/Detail";
import SignIn from "./page/Auth/SignIn";
import SignUp from "./page/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="group">
            <Route element={<Protect allowedRoles={[]} />}>
              <Route path="create" element={<Create />} />
              <Route path="detail">
                <Route path=":groupId" element={<Detail />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/">
          <Route path="auth">
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
