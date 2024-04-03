import styles from "./ImageCard.module.css";

export const ImageCard = ({ item: { alt_description, urls }, onClick }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.thumb} onClick={onClick}>
        <img src={urls.regular} alt={alt_description} />
      </div>
    </div>
  );
};
