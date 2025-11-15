"use client";

import styles from "./StyledCard.module.css";

type StyledCardProps = {
  imageUrl: string;
  message: string;
  width?: number | string;
};

// Styled card component matching the Lavazza-style mock
export function StyledCard({
  imageUrl,
  message,
  width = 300,
}: StyledCardProps) {
  const parsedWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <div className={styles.outer} style={{ width: parsedWidth }}>
      <div className={styles.innerFrame}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img className={styles.image} alt="Contact" src={imageUrl} />
          </div>

          <div className={styles.bar}>
            {/* <div className={styles.iconSlot}>
              <svg
                className={styles.icon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.31L12 14.77 6.22 16.7l.91-5.31L3.27 7.62l5.34-.78L12 2z" />
              </svg>
            </div> */}

            <div className={styles.actionArea}>
              <div className={styles.nameLine}>First Lastname</div>
              <div className={styles.actions}>
                <button
                  className={styles.actionButton}
                  type="button"
                  aria-label="Connect"
                >
                  <span className={styles.red}>♥</span>
                  Connect
                </button>
                <button
                  className={styles.actionButton}
                  type="button"
                  aria-label="Pass"
                >
                  <span>♠</span>
                  Pass
                </button>
                <button
                  className={styles.actionButton}
                  type="button"
                  aria-label="Delay"
                >
                  <span className={styles.red}>♦</span>
                  Delay
                </button>
                <button
                  className={styles.actionButton}
                  type="button"
                  aria-label="Edit"
                >
                  <span>♣</span>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
