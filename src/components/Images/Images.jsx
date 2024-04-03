import { getImages } from "../services/api";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";
import Modal from "react-modal";

export const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSearch = (value) => {
    setImages([]);
    setPage(1);
    setTotal(0);
    setQuery(value.trim());
    setError(null);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, total } = await getImages(query, page);
        setImages([...pictures, ...results]);
        setTotal(total);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />

      {error && <ErrorMessage message={`Error: ${error}`} />}
      <ImageGallery images={pictures} onImageClick={handleImageClick} />
      {pictures.length > 0 && total > pictures.length && (
        <LoadMoreButton onClick={onClick}>View more</LoadMoreButton>
      )}
      {pictures.length === 0 && query !== "" && !error && (
        <p>sorry by your queries {query} nothing was found</p>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={selectedImage !== null}
          onClose={handleCloseModal}
          urls={selectedImage.urls}
          alt_description={selectedImage.alt_description}
        />
      )}
      {error && <p>sorry there is an error {error}</p>}
      {isLoading && <Loader />}
    </>
  );
};
