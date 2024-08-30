import { Route, Routes } from "react-router-dom";
import Auth from "./layout/Auth";
import Protect from "./layout/Protect";
import Layout from "./layout/Layout";
import Create from "./page/Event/Create";
import EventDetail from "./page/Event/Detail";
import Home from "./page/Common/Home";
import SignIn from "./page/Auth/SignIn";
import SignUp from "./page/Auth/SignUp";
import Success from "./page/Common/Success";
import UserDetail from "./page/User/Detail";

function App() {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="event">
            <Route element={<Protect allowedRoles={[]} />}>
              <Route path="create" element={<Create />} />
            </Route>
            <Route path=":eventId" element={<EventDetail />} />
          </Route>
          <Route element={<Protect allowedRoles={[]} />}>
            <Route path="user">
              <Route path="detail">
                <Route path=":userId" element={<UserDetail />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/">
          <Route path="auth">
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
