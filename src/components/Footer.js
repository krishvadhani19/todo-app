import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-muted py-5"
      style={{ marginBottom: "0px", position: "relative" }}
    >
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">© 2022 todoApp, Inc.</p>
        <p className="mb-0">
          <a href="/">Visit the homepage</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
