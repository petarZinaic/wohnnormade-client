import { footerIcon } from "../../util/iconHelper";

function Footer() {
  return (
    <div className="footer">
      <img src={footerIcon} alt="footer-logo" />
      <p className="text">
        Make sure to read our terms of use and privacy policy. <br />
        Register and become a part of out community.
      </p>
      <div className="footer__bottom">
        Copyright {"\u00A9"} 2023 | All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
