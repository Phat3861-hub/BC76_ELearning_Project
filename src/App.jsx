import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
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
import ManageCourse from "./pages/ManageCourse/ManageCourse";
import ManageUser from "./pages/ManageUser/ManageUser";
import BodyTemplate from "./templates/HomeTemplate/components/BodyTemplate/BodyTemplate";

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
        path: "/",
        element: (
          <Suspense>
            <BodyTemplate />
          </Suspense>
        ),
      },
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
    children: [
      // Default route for /admin
      {
        index: true, // This is the default route for /admin
        element: <Navigate to={pathDefault.manageCourse} />,
      },
      {
        path: pathDefault.manageCourse,
        element: (
          <Suspense>
            <ManageCourse />
          </Suspense>
        ),
      },
      {
        path: pathDefault.manageUser,
        element: (
          <Suspense>
            <ManageUser />
          </Suspense>
        ),
      },
    ],
  },
];
function App() {
  const routes = useRoutes(arrRoutes);
  return (
    <>
      {routes}
      <ScrollToTop smooth className="p-1" />
    </>
  );
}

export default App;
