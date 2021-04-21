import * as React from "react";
import List from "../../../shared/List";

const FooterList: React.FC = () => {
  return (
    <>
      <List
        menuItems={[
          {
            name: "Main Page",
            link: "/",
          },
          {
            name: "About Us",
            link: "/aboutus",
          },
          {
            name: "Contact",
            link: "/Contact",
          },
          {
            name: "Career",
            link: "/",
          },
          {
            name: "Privacy",
            link: "/",
          },
        ]}
        className="footer-list-1"
      />
      <List
        menuItems={[
          {
            name: "Coffee",
            link: "/coffeecatalogue",
          },
          {
            name: "Tea",
            link: "/teacatalogue",
          },
          {
            name: "Snacks",
            link: "/snackscatalogue",
          },
          {
            name: "Best Sellers",
            link: "/",
          },
          {
            name: "Discounts",
            link: "/",
          },
        ]}
        className="footer-list-2"
      />
    </>
  );
};

export default FooterList;
