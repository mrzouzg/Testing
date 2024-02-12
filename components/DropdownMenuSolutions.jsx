import React from "react";
import Link from "next/link";
const DropdownMenuSolutions = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li> <Link  href="/solution1">solutions 1</Link></li>
        <li> <Link  href="/solution2">solutions 2</Link></li>
        <li> <Link  href="/solution3">solutions 3</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenuSolutions;