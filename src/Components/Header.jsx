import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link href="/">Toy Merchant</Link>

      <Link to="/alltoys">All Toys</Link>
      
    </div>
  );
};

export default Header;
