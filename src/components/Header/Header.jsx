import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
