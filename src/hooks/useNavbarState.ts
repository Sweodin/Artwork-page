// src/hooks/useNavbarState.ts
import { useState } from "react";

const useNavbarState = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShowRegistrationForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
    setIsDropdownOpen(false);
  };

  const handleLoginClick = () => {
    setShowRegistrationForm(false);
    setIsDropdownOpen(false);
    console.log("Login clicked (placeholder)");
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setShowRegistrationForm(false);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  return {
    isDropdownOpen,
    showRegistrationForm,
    toggleDropdown,
    handleRegisterClick,
    handleLoginClick,
    closeDropdown,
    closeRegistrationForm,
  };
};

export default useNavbarState;
