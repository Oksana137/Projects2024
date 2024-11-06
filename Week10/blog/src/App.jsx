import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Blog from "./pages/Blog";
import Entry from "./pages/Entry";
import AddEntry from "./pages/AddEntry";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Blog />} />
        <Route path="/:id" element={<Entry />} />
        <Route path="/new" element={<AddEntry />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
