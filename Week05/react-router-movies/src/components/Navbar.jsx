import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-neutral text-neutral-content">
      <Link to="/">
        <button class="btn btn-ghost text-xl">Movies</button>
      </Link>
    </div>
  );
};

export default Navbar;
