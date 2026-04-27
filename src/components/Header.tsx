import { Link } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="">
      <nav className="">
        <div className="">
          <ThemeToggle />
        </div>

        <div className="">
          <Link to="/" className="" activeProps={{ className: "is-active" }}>
            Home
          </Link>
          <Link
            to="/about"
            className=""
            activeProps={{ className: "is-active" }}
          >
            About
          </Link>
          <Link
            to="/tanstack-query"
            className=""
            activeProps={{ className: "is-active" }}
          >
            TanStack Query
          </Link>
        </div>
      </nav>
    </header>
  );
}
