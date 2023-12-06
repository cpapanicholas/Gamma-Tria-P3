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
import FriendsList  from './pages/friendsPage';
import ViewFriend  from './pages/FriendProfilePage.jsx';
// import Chatroom from './pages/Chatbox.jsx'
import ExercisePage from './pages/ExercisePage';
import CreatePost from './pages/CreatePost.jsx';

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
      //   path: '/chatroom',
      //   element: <Chatroom />
      // }, 
      {
        path: '/exercisePage',
        element: <ExercisePage/>
      }, 
      // {
      //   path: '/program/:programId',
      //   element: <ProgramPage />
      // },
      {
        path: '/Friends',
        element: < FriendsList/>
      },
      {
        path: '/Friends/:friendId',
        element: < ViewFriend/>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)