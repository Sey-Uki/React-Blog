import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../features/userSlice";
import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userReducer.userName);
  return (
    <header>
      <nav className="container mainNav">
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/">
            About
          </NavLink>
          <NavLink exact to="/">
            Contact
          </NavLink>
        </div>
        <div className="logOut">
          {username},
          <NavLink
            exact
            to="/login"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Выход
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
