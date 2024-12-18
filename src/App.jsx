import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ListCourseByCategory from "./pages/ListCourseByCategory/ListCourseByCategory";
import ScrollToTop from "react-scroll-to-top";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import ListCourseBySearch from "./pages/ListCourseBySearch/ListCourseBySearch";
import CourseDetailTemplate from "./pages/CourseDetail/CourseDetailTemplate";
import UserInfo from "./pages/UserInfo/UserInfo";
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
    children: [
      {
        path: pathDefault.listCourseByCategory,
        element: (
          <Suspense>
            <ListCourseByCategory />
          </Suspense>
        ),
      },
      {
        path: pathDefault.listCourseBySearch,
        element: (
          <Suspense>
            <ListCourseBySearch />
          </Suspense>
        ),
      },
      {
        path: pathDefault.courseDetail,
        element: (
          <Suspense>
            <CourseDetailTemplate />
          </Suspense>
        ),
      },
      {
        path: pathDefault.userInfo,
        element: (
          <Suspense>
            <UserInfo />
          </Suspense>
        ),
      },
    ],
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
  return (
    <>
      {routes}
      <ScrollToTop smooth />
    </>
  );
}

export default App;
