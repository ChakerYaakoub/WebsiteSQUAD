import { useEffect, useState } from "react";
import { UserData } from "../../models/UserData";

export interface ViewAllPageProps {
  data: UserData[];
}

export const useViewAllPage = (props: ViewAllPageProps) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number>(6);

  const [isActive, setIsActive] = useState(false);
  const [disabledLink, setDisabledLink] = useState(true);
  const { data } = props;
  const title = "All Students ";
  const subtitle = "Spaces of Innovation";
  const brief =
    "Discover the spaces where creativity and innovation come to life.";

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>; // Type for timeout ID

    if (isActive) {
      timeoutId = setTimeout(() => setDisabledLink(false), 500); // set disabled link to false after 500ms
    } else {
      setDisabledLink(true);
    }

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [isActive]);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const displayedData = showAll ? [...data] : [...data].slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (showAll) {
      const timer = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev < displayedData.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 100);
      return () => clearInterval(timer);
    } else {
      setVisibleItems(6);
    }
  }, [showAll, displayedData.length]);
  return {
    ...props,
    title,
    brief,
    data,
    subtitle,
    disabledLink,
    showAll,
    displayedData,
    visibleItems,
    toggleShowAll,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  };
};
