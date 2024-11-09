import { replaceNewlinesWithBr } from "../../utils/utilsFc";

export interface AboutUsProps {
  aboutUs: {
    about: string;
  };
}

export const useAboutUs = (props: AboutUsProps) => {
  // or replaceNewlinesWithParagraphs
  const aboutUs = props.aboutUs;
  const about = replaceNewlinesWithBr(aboutUs.about);
  return { ...props, about, aboutUs };
};
