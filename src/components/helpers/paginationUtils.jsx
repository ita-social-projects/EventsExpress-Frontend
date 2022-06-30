import React from "react";

export const renderEdgePage = (
  pageChangeHandler,
  edgePageValue,
  edgePageLabel,
  secondEdgeValue,
  secondEdgePageLabel,
  getPageItemProps,
) => {
  const edgePageButton = (
    <button
      type="button"
      className="btn btn-primary"
      {...getPageItemProps({
        pageValue: edgePageValue,
        onPageChange: pageChangeHandler,
      })}
    >
      {edgePageLabel}
    </button>
  );
  const secondEdgePageButton = (
    <button
      type="button"
      className="btn btn-primary"
      {...getPageItemProps({
        pageValue: secondEdgeValue,
        onPageChange: pageChangeHandler,
      })}
    >
      {secondEdgePageLabel}
    </button>
  );
  return (
    <>
      {edgePageButton}
      {secondEdgePageButton}
    </>
  );
};

export const renderPages = (
  pages,
  currentPage,
  handlePageChange,
  getPageItemProps,
) => {
  const activePageStyles = { backgroundColor: "#ffffff", color: "#00BFFF" };

  return pages.map((page, i) => (
    <button
      type="button"
      //! TODO : ARRAY INDEX USE AS A KEY (temporary solution)
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      className="btn btn-primary"
      {...getPageItemProps({
        pageValue: page,
        key: page,
        style: currentPage === page ? activePageStyles : null,
        onPageChange: handlePageChange,
      })}
    >
      {page}
    </button>
  ));
};
