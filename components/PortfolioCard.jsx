import React from "react";
import Link from "next/link";
import styles from "../styles/PortfolioCard.module.css";
const PortfolioCard = ({
  title,
  category,
  CoverPhoto,
  key,
  datePublished,
  slug,
}) => {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className="styles.imgContainer">
          <img src={CoverPhoto.url} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
