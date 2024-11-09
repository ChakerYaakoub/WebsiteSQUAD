import React, { useEffect } from "react";
import "./WorkspaceDescriptionPage.css";
import {
  useWorkspaceDescriptionPage,
  WorkspaceDescriptionPageProps,
} from "./useWorkspaceDescriptionPage";
import DescriptionPage from "../../components/DescriptionPage/DescriptionPage";
import NotFound404 from "../NotFound404/NotFound404";
import { createUrlFriendlyString } from "../../utils/utilsFc";
const WorkspaceDescriptionPage: React.FC<WorkspaceDescriptionPageProps> = (
  props
) => {
  const { myData } = useWorkspaceDescriptionPage(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!myData) {
    return <NotFound404 />;
  }

  return (
    <section
      className="section newPageSection WorkspaceDescriptionPage"
      id={createUrlFriendlyString(myData.fullName)}
    >
      <DescriptionPage data={myData} />
    </section>
  );
};

export default WorkspaceDescriptionPage;
