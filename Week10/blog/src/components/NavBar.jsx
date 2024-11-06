import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-4 p-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">Add Entry</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
