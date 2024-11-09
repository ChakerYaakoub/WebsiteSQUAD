import WorkspaceDescriptionPage from "./pages/DescriptionPage/WorkspaceDescriptionPage";
import Home from "./pages/Home/Home";
import NotFound404 from "./pages/NotFound404/NotFound404";
import ViewAllNews from "./pages/ViewAll/ViewAllNews";

const appRoutes = [
  { path: "/WebsiteSQUAD", element: <Home /> },
  { path: "/WebsiteSQUAD/view-all/overview", element: <ViewAllNews /> },
  {
    path: "/WebsiteSQUAD/overview/:id/:title",
    element: <WorkspaceDescriptionPage />,
  },

  { path: "*", element: <NotFound404 /> },
];

export default appRoutes;
