import React from "react";
import styles from "./_HomePage.module.scss"; /*----- Import CSS module -----*/
import Headline from "./Headline";
import FilterBar from "./FilterBar";
import ArtworkGrid from "./ArtworkGrid";

const HomePage: React.FC = () => {
  const handleFilterChange = (filter: string) => {
    console.log(`Filter changed to: ${filter}`);
  };

  return (
    <div className={styles.homePage}>
      <Headline />
      <FilterBar onFilterChange={handleFilterChange} />
      {/* pass the Filter change handler */}
      <ArtworkGrid />
    </div>
  );
};

export default HomePage;
