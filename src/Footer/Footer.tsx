import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
