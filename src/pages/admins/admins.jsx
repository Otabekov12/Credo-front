import React from "react";
import { Link } from "react-router-dom";

import AddCompany from "../../components/addCompany/addCompany";

import "./admins.scss";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <Link to="/">
          <button className="header__items__button">Home</button>
        </Link>

        <AddCompany />
      </div>
    </>
  );
};

export default Admin;
