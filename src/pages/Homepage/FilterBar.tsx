// src/components/HomePage/FilterBar.tsx
import React from "react";
import styles from "./_FilterBar.module.scss";

interface FilterBarProps {
  onFilterChange?: (filter: string) => void; // Optional function to handle filter changes
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const filters = ["All", "Abstract", "Nature", "Portraits", "Digital"]; // Example filters
  const [activeFilter, setActiveFilter] = React.useState<string>("All"); // State to track active filter

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter); // Notify parent component of filter change
    }
  };

  return (
    <div className={styles.filterBar}>
      <ul className={styles.filterList}>
        {filters.map((filter) => (
          <li
            key={filter}
            className={`${styles.filterItem} ${
              activeFilter === filter ? styles.active : ""
            }`}
          >
            <button
              className={styles.filterButton}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
