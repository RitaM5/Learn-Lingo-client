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
import MyClasses from "../pages/Dashboard/InstructorHome/MyClasses";
import MySelectedClass from "../pages/Dashboard/UserHome/MySelectedClass";
import Payment from "../pages/Dashboard/UserHome/Payment/Payment";
import MyEnrolledClasses from "../pages/Dashboard/UserHome/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/UserHome/PaymentHistory";
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
            {
                path: 'myselectedclasses',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'payment/:_id',
                element: <Payment></Payment>
            },
            {
                path: 'myenrolledclasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
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
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
        ]
    }
]);