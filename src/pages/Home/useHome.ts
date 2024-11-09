export type HomeProps = object;
import theBoss from "../../assets/theBoss.png";
import uni1 from "../../assets/uni1.jpg";
import uni2 from "../../assets/uni2.jpg";

export const useHome = (props: HomeProps) => {
  return { ...props, theBoss, uni1, uni2 };
};
