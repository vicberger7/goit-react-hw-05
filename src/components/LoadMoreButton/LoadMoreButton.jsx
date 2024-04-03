import style from "./LoadMoreButton.module.css";

export const LoadMoreButton = ({ children, onClick, disabled }) => {
  return (
    <button className={style.loadMoreButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
