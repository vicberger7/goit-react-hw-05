import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink className={getNavLinkClassName} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
