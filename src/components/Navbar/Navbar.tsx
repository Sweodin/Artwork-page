// src/components/Navbar/Navbar.tsx
import React from "react";
import styles from "./_Navbar.module.scss"; // Import CSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Replace with your actual logo component or image */}
          <a href="/">My Artwork</a>
        </div>
        <div className={styles.searchBar}>
          {/* Placeholder for search bar */}
          <input type="text" placeholder="Search artwork..." />
          <button>Search</button>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className={styles.userIcon}>
            {/* Placeholder for user icon */}
            <button>
              <i className="fas fa-user-circle"></i>{" "}
              {/* Example icon - you might need to include Font Awesome or similar */}
              <span>User</span> {/* Placeholder text */}
            </button>
            {/* Placeholder for user dropdown/popup - will implement later */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
