import React from "react";
import { Link } from "react-router-dom";
import CredoLogo from "../../assets/credo-logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">
              <img className="credo__logo" src={CredoLogo} alt="Credo Logo" />
            </Link>
          </li>

          <li className="header__item">
            <Link to="/admin">
              <button className="header__items__button">Admin</button>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
