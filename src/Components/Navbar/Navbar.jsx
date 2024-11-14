import React, { useState } from "react";
import "./nstyle.css";
import CustomTabButton from "../customComponets/customTabButton";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav style={{ paddingBottom: "0" }}>
      <CustomTabButton
        isActive={activeTab === "Home"}
        onClick={() => handleTabClick("Home")}
      >
        Home
      </CustomTabButton>
      <CustomTabButton
        isActive={activeTab === "Contact"}
        onClick={() => handleTabClick("Contact")}
      >
        Contact
      </CustomTabButton>
      <CustomTabButton
        isActive={activeTab === "About"}
        onClick={() => handleTabClick("About")}
      >
        About
      </CustomTabButton>
    </nav>
  );
};

export default Navbar;
