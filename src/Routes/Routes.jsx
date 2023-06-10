import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Home/Classes/Classes";
import Instructor from "../pages/Home/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "../Routes/PrivateRoute"
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClasses from "../pages/Dashboard/InstructorHome/AddClasses";
import ManageClasses from "../pages/Dashboard/AdminHome/ManageClasses";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructor',
                element: <Instructor></Instructor>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            //admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
               path: 'manageclasses',
               element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            //instructor
            {
                path: 'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },

            {
                path: 'addclasses',
                element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
            },
        ]
    }
]);