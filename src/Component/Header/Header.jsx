import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn, "loggedin ");
  return (
    <nav className={`navbar navbar-expand-lg px-lg-5 px-3 ${styles.nav}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-start ${styles.small_device_offcanvas}`}
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              LOGO
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbarNav}`}
            >
              <li className="nav-item">
                <Link
                  to="/employer-profile"
                  className={`nav-link active ${styles.navLink}`}
                  aria-current="page"
                >
                  Employer profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link ${styles.navLink}`}>
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className={`nav-link disabled ${styles.navLink}`}
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>

            <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.navbarNav}`}>
              <li className="nav-item">
                {!isLoggedIn && (
                  <Link
                    to="/login"
                    className={`nav-link active ${styles.navLink}`}
                    aria-current="page"
                  >
                    Sign In
                  </Link>
                )}
              </li>
              <li className={`nav-item ${styles.left_border}`}>
                <Link
                  to="/login"
                  className={`nav-link ${styles.navLink}`}
                >
                  Post Job / Employers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
