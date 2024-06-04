import React from "react";

export default function Pagination(props) {
  const { prev, next, onPrevious, onNext } = props;
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="m-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item m-2">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item m-2">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
