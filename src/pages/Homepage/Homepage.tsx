// src/pages/HomePage/HomePage.tsx
import React from "react";
import styles from "./_HomePage.module.scss"; // Import CSS module

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1 className={styles.headline}>Welcome to the Art Gallery</h1>
      </header>

      <div className={styles.contentContainer}>
        <section className={styles.filterBar}>
          {/* Placeholder for Filter Bar */}
          <p>Filter by:</p>
          {/* Add filter options here later (e.g., buttons, dropdowns) */}
          <span>[Filters will go here]</span>
        </section>

        <main className={styles.artworkGrid}>
          {/* Placeholder for Artwork Grid */}
          <p>Artwork Grid Area</p>
          {/* Artwork cards will be displayed here */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
