import React from "react";
import AtomDivider from "../atoms/AtomDivider";
import FooterApp from "../molecules/FooterApp";
import FooterContent from "../molecules/FooterContent";
import FooterInformation from "../molecules/FooterInformation";
import ShortFooter from "../molecules/ShortFooter";

const Footer = () => {
  return (
    <div>
      <FooterInformation />
      <AtomDivider variant="middle" />
      <FooterApp />
      <FooterContent />
      <AtomDivider variant="middle" sx={{ margin: "30px 16px" }} />
      <ShortFooter />
    </div>
  );
};

export default Footer;
