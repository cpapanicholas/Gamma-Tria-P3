import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import dotenv from 'dotenv'
import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import MyProfilePage from './pages/MyProfilePage.jsx';
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import MyPrograms from './pages/MyProgramsPage.jsx';
import WorkoutPage from './pages/WorkoutPage.jsx';
import Library  from './pages/LibraryPage.jsx';
import CreatePost from './pages/createPost.jsx';
// import DirectMessagePage  from './pages/DirectMessagePage.jsx';

// dotenv.config();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }, {
        path: '/home',
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profile/me',
        element: <MyProfilePage />
      }, {
        path: '/myPrograms',
        element: <MyPrograms />
      }, {
        path: '/program/:programId/:workoutId',
        element: <WorkoutPage />
      }, {
        path: '/library',
        element: <Library />
      }, {
        path: '/create',
        element: <CreatePost />
      }, {
        path: '/workout/:workoutId',
        element: <WorkoutPage />
      },
      // {
      //   path: '/DirectMessagePage',
      //   element: <DirectMessagePage />
      // },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
