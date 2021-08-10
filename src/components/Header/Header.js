import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/">About</NavLink>
        <NavLink exact to="/">Contact</NavLink>
      </nav>
    </header>
  );
};
