import Link from "next/link";
import footerStyles from "../styles/layouts/footer.module.scss";

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footer}>
      <div className="footer-wrap">
        <p className="footer-copyrights">
          Powered by Agility CMS. This website and materials found on it are for
          demo purposes. You can use this to preview the content you created on
          your Agility CMS account.
        </p>
        <ul className="social_icons">
          <li>
            <Link href="/"><BsTwitter/></Link>
          </li>
          <li>
            <Link href="/"><BsFacebook/></Link>
          </li>
          <li>
            <Link href="/"><BsInstagram/></Link>
          </li>
          <li>
            <Link href="/"><BsLinkedin/></Link>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
