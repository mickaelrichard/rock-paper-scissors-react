import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img src={"/not-found.svg"} alt="not found" />
      <h3>Ohh! page not found</h3>
      <p style={{ marginBottom: "1rem" }}>
        We can't seem to find the page you're looking for
      </p>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};

export default NotFound;
