// src/components/Navbar/Navbar.tsx
import React from "react";
import styles from "./_Navbar.module.scss";
import LogoSrc from "../../assets/TLT-Logo.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import UserDropdown from "../UserDropdown/UserDropdown";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import useNavbarState from "../../hooks/useNavbarstate";

const Navbar: React.FC = () => {
  const {
    isDropdownOpen,
    showRegistrationForm,
    toggleDropdown,
    handleRegisterClick,
    handleLoginClick,
    closeDropdown,
    closeRegistrationForm,
  } = useNavbarState(); /*----- Use the custom hooks -----*/

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={LogoSrc} alt="Twin logic tech logo" />
        </div>
        <div className={styles.searchBar}>
          {" "}
          {/* Search bar is here */}
          <input type="text" placeholder="Search artwork..." />
          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>
        {/* ... Navbar content ... */}
        <ul className={styles.navLinks}>
          {/* ... other nav links ... */}
          <li className={styles.userIcon}>
            <button onClick={toggleDropdown}>
              <FaUserCircle size="1.5em" />
            </button>
            {isDropdownOpen && !showRegistrationForm && (
              <UserDropdown
                onLoginClick={handleLoginClick}
                onRegisterClick={handleRegisterClick}
                onClose={closeDropdown}
              />
            )}
            {showRegistrationForm && (
              <RegistrationForm
                onClose={closeRegistrationForm}
              /> /*----- Pass onClose prop -----*/
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
