// src/components/HomePage/Headline.tsx
import React from "react";
import styles from "./_HomePage.module.scss"; // You might need to adjust the path

const Headline: React.FC = () => {
  return (
    <div className={styles.headline}>
      {" "}
      {/* Use HomePage.module.scss for styling consistency, or create Headline.module.scss if needed */}
      <h1>Welcome to My Artwork Gallery</h1>
    </div>
  );
};

export default Headline;
