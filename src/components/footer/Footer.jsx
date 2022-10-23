import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center flex-column justify-content-center p-2 fs-6">
      <div>
        <a href="https://www.linkedin.com/in/abdullah-ahlatli">
          <i className="fab fa-linkedin me-3" />
        </a>
        <a href="https://github.com/Sekunev">
          <i className="fa-brands fa-github me-3"></i>
        </a>
      </div>
      <article>© Copyright by Sekunev</article>
    </footer>
  );
};

export default Footer;
