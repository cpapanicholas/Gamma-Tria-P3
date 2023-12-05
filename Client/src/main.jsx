import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import MyProfilePage from './pages/MyProfilePage.jsx';
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import MyPrograms from './pages/MyProgramsPage.jsx';
import WorkoutPage from './pages/WorkoutPage.jsx';
import SearchBar from './pages/LibraryPage.jsx';
import FriendsList from './pages/friendsPage.jsx';
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
        element: <SearchBar />
      }, {
        path: '/workout/:workoutId',
        element: <WorkoutPage />
      },
      {
        path: '/Friends',
        element: <FriendsList />
      },
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
