import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthContext from "./store/auth-context";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TaskPage from "./pages/TaskPage";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import Cookies from 'js-cookie';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(Cookies.get('user'));

  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />, errorElement: <ErrorPage />, },
        { path: 'login', element: <LoginPage />, errorElement: <ErrorPage />, },
        { path: 'signup', element: <SignUpPage />, errorElement: <ErrorPage />, },
        { path: 'user', element: <TaskPage />, errorElement: <ErrorPage />, }
      ]
    }
  ]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser
    }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;