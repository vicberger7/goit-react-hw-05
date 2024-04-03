import { ImageCard } from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((item) => (
        <li key={item.id}>
          <div>
            <ImageCard item={item} onClick={() => onImageClick(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
