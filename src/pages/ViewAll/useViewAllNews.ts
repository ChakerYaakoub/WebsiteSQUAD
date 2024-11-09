import { useEffect } from "react";
import { data } from "../../data/data";

export type ViewAllNewsProps = object;

export const useViewAllNews = (props: ViewAllNewsProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { ...props, data };
};
