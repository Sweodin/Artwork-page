// src/components/UserDropdown/UserDropdown.tsx
import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./_UserDropdown.module.scss";

interface UserDropdownProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onClose: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  onLoginClick,
  onRegisterClick,
  onClose,
}) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.closeButton} onClick={onClose}>
        <FaTimes /> {/* Example close icon - Font Awesome */}
      </button>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <button onClick={onLoginClick}>Login</button>
        </li>
        <li className={styles.menuItem}>
          <button onClick={onRegisterClick}>Register</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
