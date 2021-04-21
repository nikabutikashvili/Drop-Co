import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  menuItems: [object];
  className?: string;
}

const DropDownMenu: React.FC<Props> = ({ menuItems, className }) => {
  return (
    <ul className={className ? className : ""}>
      {menuItems?.map((item: any) => (
        <li>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
