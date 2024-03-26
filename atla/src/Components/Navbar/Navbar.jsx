import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">MainContent</Link>
      </li>
      <li>
        <Link to="/cats">Edit Character</Link>
      </li>
      <li>
        <Link to="/sheeps">Footer</Link>
      </li>
      <li>
        <Link to="/goats">Home</Link>
      </li>
    </div>
  );
};
export default navbar;
