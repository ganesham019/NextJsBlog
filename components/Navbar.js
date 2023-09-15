import Link from "next/link";
import Image from "next/image";
import navbarLayoutStyle from "../styles/layouts/navbar.module.scss"

const Navbar = () => {
  return (
    <header>
      <nav className={navbarLayoutStyle.nav}>
        <div className="nav-log-section">
          <Link href="/" className="nav-logo">
            <Image
              src="/travel-blog-logo.webp"
              width={80}
              height={65}
              alt="Logo of the project"
            />
          </Link>
          <Link href="/" className="nav-heading">
            My starter Site
          </Link>
        </div>
        <ul className="nav-wrap">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
