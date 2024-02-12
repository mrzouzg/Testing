import React from "react";
import Link from "next/link";
const DropdownMenuResources = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li> <Link  href="/resources1">resources 1</Link></li>
        <li> <Link  href="/resources2">resources 2</Link></li>
        <li> <Link  href="/resources3">resources 3</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenuResources;