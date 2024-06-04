import React from "react";

export default function Navbar(props) {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1 className="text-white">{brand}</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/"></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
