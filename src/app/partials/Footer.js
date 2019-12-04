import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer" id="footer">
      <div class="footer-copyright center">
        <div class="container" id="footerTxt">
          Copyright © BIT {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
