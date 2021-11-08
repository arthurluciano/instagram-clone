import React, { ReactNode, useCallback, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./styles.scss";

interface StoryListProps {
  containerWidth?: number;
  scrollWidth?: number;
  children: ReactNode;
}

export const StoryList = React.forwardRef<HTMLDivElement, StoryListProps>(
  ({ containerWidth = 0, scrollWidth = 0, children }, ref) => {
    const [scrollX, setScrollX] = useState(0);
    const [actualPage, setActualPage] = useState(1);

    const limitPage = Math.ceil(scrollWidth / containerWidth);

    const handleGoNextStories = useCallback(() => {
      setScrollX((prevState) => prevState - containerWidth);
      setActualPage((prevState) => prevState + 1);
    }, [containerWidth]);

    const handleGoBackStories = useCallback(() => {
      setScrollX((prevState) => prevState + containerWidth);
      setActualPage((prevState) => prevState - 1);
    }, [containerWidth]);

    return (
      <section className="stories-container">
        <button
          className={`story-button back ${actualPage === 1 ? "disable" : ""}`}
          onClick={handleGoBackStories}
        >
          <BsChevronLeft />
        </button>
        <button
          className={`story-button next ${
            actualPage === limitPage ? "disable" : ""
          }`}
          onClick={handleGoNextStories}
        >
          <BsChevronRight />
        </button>
        <div className="stories-list-area">
          <div
            className="stories-list"
            ref={ref}
            style={{ marginLeft: `${scrollX}px` }}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }
);
