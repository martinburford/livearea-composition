import React from "react";

// Styles
import styles from "./card.module.scss";

// Types
import { ICard } from "./card.types";

export const Card: React.FC<ICard> = ({ children }) => {
  return (
    <div className={styles.card} data-selector="card">
      {children}
    </div>
  );
};

export default React.memo(Card);
