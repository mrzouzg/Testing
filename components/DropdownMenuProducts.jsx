import React from "react";
import Link from "next/link";
const DropdownMenuProducts = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li> <Link  href="/products1">Products 1</Link></li>
        <li> <Link  href="/products2">Products 2</Link></li>
        <li> <Link  href="/products3">Products 3</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenuProducts;