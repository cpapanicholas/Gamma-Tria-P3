import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import dotenv from 'dotenv'
import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import MyProfilePage from './pages/MyProfilePage.jsx';
import Login from './pages/login.jsx'
import Signup from './pages/Sign-up.jsx'
import MyPrograms from './pages/MyProgramsPage.jsx';
import WorkoutPage from './pages/WorkoutPage.jsx';
import Library  from './pages/LibraryPage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Calendar from './pages/Calendar.jsx';
// import DirectMessagePage  from './pages/DirectMessagePage.jsx';
import FriendsList  from './pages/friendsPage';
import ViewFriend  from './pages/FriendProfilePage.jsx';
// import Chatroom from './pages/Chatbox.jsx'
import ExercisePage from './pages/ExercisePage';
import SettingsPage from './pages/SettingsPage.jsx';
import SearchPage from './pages/SearchPage.jsx'


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
      },
      {
        path: '/Calendar',
        element: <Calendar />
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
      {
        path: '/settingsPage',
        element: < SettingsPage/>
      },
      {
        path: '/searchPage',
        element: < SearchPage/>
      }

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)