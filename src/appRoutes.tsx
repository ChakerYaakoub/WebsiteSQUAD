import WorkspaceDescriptionPage from "./pages/DescriptionPage/WorkspaceDescriptionPage";
import Home from "./pages/Home/Home";
import NotFound404 from "./pages/NotFound404/NotFound404";
import ViewAllNews from "./pages/ViewAll/ViewAllNews";

const appRoutes = [
  { path: "/", element: <Home /> },

  { path: "*", element: <NotFound404 /> },
  { path: "/view-all/overview", element: <ViewAllNews /> },
  { path: "/overview/:id/:title", element: <WorkspaceDescriptionPage /> },
];

export default appRoutes;
