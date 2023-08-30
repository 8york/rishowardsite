import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  lineDeco,
  headingContainer,
  header,
  headerImg,
  heading,
  subHeading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle }) => {
  return (
    <div className={container}>
      <div className={lineDeco}></div>
      <header className={header}>
        <StaticImage
          alt="Marisa headshot"
          src="../../assets/images/marisa.jpg"
          className={headerImg}
        />
        <div className={headingContainer}>
          <h1 className={heading}>{pageTitle}</h1>
          <h2 className={subHeading}>
            Counselling and Psychotherapy in Naarm/Melbourne
          </h2>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/myblogs" className={navLinkText}>
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={lineDeco}></div>
    </div>
  );
};

export default Layout;
