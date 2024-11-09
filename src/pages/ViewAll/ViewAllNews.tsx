import ViewAllPage from "../../components/ViewAllPage/ViewAllPage";
import { ViewAllNewsProps, useViewAllNews } from "./useViewAllNews";
import "./ViewAllNews.css";

const ViewAllNews: React.FC<ViewAllNewsProps> = (props) => {
  const { data } = useViewAllNews(props);
  return (
    <section className="  newPageSection ViewAllNews">
      <ViewAllPage data={data} />
    </section>
  );
};

export default ViewAllNews;
