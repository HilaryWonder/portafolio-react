import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Para mas información: </p>
      </div>
      <div className="footec-contact">
        <h3 style={{ marginLeft: "15px" }}>hilarymarchena677</h3>
        
      </div>
      <div className="footer-sns">
        <div className="design-by">Siguenos en nuestras redes sociales </div>
        <div className="sns-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin likedin"></i>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
