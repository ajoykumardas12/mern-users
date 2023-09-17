import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UsersList />} />
      <Route path="users/:userId" element={<UserDetails />} />
      <Route path="new" element={<AddUser />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
