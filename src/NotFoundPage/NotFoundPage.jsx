import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you requested does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
