//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddIncome,
  Stats,
  AllIncomes,
  Profile,
  Admin,
  EditIncome,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addIncomeAction } from "./pages/AddIncome";
import { loader as allIncomesLoader } from "./pages/AllIncomes";
import { loader as editIncomeLoader } from "./pages/EditIncome";
import { action as editIncomeAction } from "./pages/EditIncome";
import { action as deleteIncomeAction } from "./pages/DeleteIncome";
import { loader as adminLoader } from "./pages/Admin";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddIncome />,
            action: addIncomeAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-incomes",
            element: <AllIncomes />,
            loader: allIncomesLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-income/:id",
            element: <EditIncome />,
            loader: editIncomeLoader,
            action: editIncomeAction,
          },
          {
            path: "delete-income/:id",
            action: deleteIncomeAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
