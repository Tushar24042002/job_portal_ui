import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContext } from "../../Context/AuthContext";
import { CONSTANTS } from "../../Consts";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  const navigate  = useNavigate();
  const { isLoggedIn, setIsLoggedIn, userRole, setUserRole } =
    useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(CONSTANTS.ROLE.JOB_SEEKER);
    localStorage.removeItem("Authorization");
    localStorage.removeItem("isLoggedIn");
    navigate("/");

  };

  return (
    <nav className={`navbar navbar-expand-lg px-lg-5 px-3 ${styles.nav}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Job Hub
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
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Job Hub
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
                <Link to="/dashboard" className={`nav-link ${styles.navLink}`}>
                  Dashboard
                </Link>
              </li>

              {userRole === CONSTANTS.ROLE.JOB_SEEKER && (
                <li className="nav-item">
                  <Link
                    to="/applied-jobs"
                    className={`nav-link ${styles.navLink}`}
                  >
                    Applied Jobs
                  </Link>
                </li>
              )}

              {userRole === CONSTANTS.ROLE.EMPLOYER && (
                <>
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className={`nav-link ${styles.navLink}`}
                    >
                      Employer profile
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.navbarNav}`}>
              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className={`nav-link dropdown-toggle ${styles.navLink}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </Link>
                  <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
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
                      <div className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </div>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className={`nav-link active ${styles.navLink}`}
                    aria-current="page"
                  >
                    Sign In
                  </Link>{" "}
                </li>
              )}

              <li className={`nav-item ${styles.left_border}`}>
                <Link to="/login" className={`nav-link ${styles.navLink}`}>
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
