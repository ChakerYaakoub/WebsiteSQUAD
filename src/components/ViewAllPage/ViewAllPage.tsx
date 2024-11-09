import { Link } from "react-router-dom";
import { ViewAllPageProps, useViewAllPage } from "./useViewAllPage";
import "./ViewAllPage.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import { createUrlFriendlyString } from "../../utils/utilsFc";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ViewAllPage: React.FC<ViewAllPageProps> = (props) => {
  const {
    title,
    brief,
    data,
    subtitle,
    disabledLink,
    displayedData,
    showAll,
    visibleItems,
    toggleShowAll,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useViewAllPage(props);

  return (
    <div className="container">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="h2 section-title">{title}: </h2>
      <p className="section-brief-view-all">{brief}</p>

      {displayedData.length > 0 && (
        <TransitionGroup className="view-all-page-container" component="div">
          {displayedData.slice(0, visibleItems).map((content, index) => (
            <CSSTransition key={index} timeout={10} classNames="item">
              <li
                className="scrollbar-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <div className="card">
                  <figure className="card-banner img-holder">
                    <img
                      src={content.photo}
                      width="600"
                      height="675"
                      loading="lazy"
                      alt={content.fullName}
                      className="img-cover saturate"
                    />
                  </figure>

                  <div className="card-content">
                    <Link
                      to={`/WebsiteSQUAD/students/${
                        content.id
                      }/${createUrlFriendlyString(content.fullName)}`}
                      className="card-link-to"
                      onClick={(event) =>
                        disabledLink ? event.preventDefault() : null
                      }
                    >
                      <IoArrowForwardOutline className="react-icon" />
                    </Link>

                    <h3 className="h3 card-title">{content.fullName}</h3>

                    <p className="card-text ">
                      {content.brief.slice(0, 60)}...
                      <Link
                        to={`/WebsiteSQUAD/students/${
                          content.id
                        }/${createUrlFriendlyString(content.fullName)}`}
                        className="card-link-to inline-block disableToUppercase"
                        onClick={(event) =>
                          disabledLink ? event.preventDefault() : null
                        }
                        style={{
                          paddingLeft: "5px",
                          color: "var(--theme-color)",
                        }}
                      >
                        see details
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      {data.length > 6 && (
        <button onClick={toggleShowAll} className="see-more-btn-view-all">
          {showAll ? (
            <div className="see-more-see-less">
              <div className="icon-see-more-see-less">
                <MdOutlineArrowDropUp className="icon-md" />
              </div>
              <div className="see-more-see-less-text">see less</div>
            </div>
          ) : (
            <div className="see-more-see-less">
              <div className="icon-see-more-see-less">
                <MdOutlineArrowDropDown className="icon-md" />
              </div>
              <div className="see-more-see-less-text">see more</div>
            </div>
          )}
        </button>
      )}
      {data.length === 0 && (
        <div className="voidDivViewAllPage">
          <>We don't have any students yet. </>
        </div>
      )}
    </div>
  );
};

export default ViewAllPage;
