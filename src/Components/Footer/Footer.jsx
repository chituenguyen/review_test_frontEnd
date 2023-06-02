import React from "react";
import "./styles.scss";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__hidden">
        This website is created as part of HLsolution program. The materials
        contained on this website are provided for general
      </p>
      <p className="footer__hidden">
        Information only and do not constitude any form of advice. HLS asssumes
        nos responsibility for the accurary of any particulars statement and
      </p>
      <p className="footer__hidden">
        {" "}
        accepts no liability for any loss or damage which may arise from
        rellance on the information contained to this website
      </p>
      <p className="footer__copy">Copy right 2021 HLS</p>
    </div>
  );
};

export default Footer;
