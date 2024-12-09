import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
const HomeTemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const arrRoutes = [
  {
    path: "/",
    element: (
      <Suspense>
        <HomeTemplate />
      </Suspense>
    ),
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.signUp,
    element: <SignUp />,
  },
  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
  },
];
function App() {
  const routes = useRoutes(arrRoutes);
  return <>{routes}</>;
}

export default App;
