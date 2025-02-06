// src/components/Navbar/Navbar.tsx
import React from "react";
import styles from "./_Navbar.module.scss";
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
          {" "}
          {/* Logo is here */}
          <a href="/">My Artwork</a>
        </div>
        <div className={styles.searchBar}>
          {" "}
          {/* Search bar is here */}
          <input type="text" placeholder="Search artwork..." />
          <button>Search</button>
        </div>
        {/* ... Navbar content ... */}
        <ul className={styles.navLinks}>
          {/* ... other nav links ... */}
          <li className={styles.userIcon}>
            <button onClick={toggleDropdown}>
              <i className="fas fa-user-circle"></i>
              <span>User</span>
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
