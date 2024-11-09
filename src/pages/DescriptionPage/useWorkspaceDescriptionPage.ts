import { useParams } from "react-router-dom";
import { UserData } from "../../models/UserData";
import { data } from "../../data/data";
export type WorkspaceDescriptionPageProps = object;
export const useWorkspaceDescriptionPage = (
  props: WorkspaceDescriptionPageProps
) => {
  // use param
  const { id } = useParams();

  // use location
  // const location = useLocation();
  // const { state } = location;

  const myData = data.find((item) => item.id === id) as UserData;

  return { ...props, myData };
};
