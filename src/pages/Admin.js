import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import HeroSection from "../components/admin/HeroSection";
import FinalStatus from "../components/admin/FinalStatus";
import Approval from "../components/admin/Approval";
import Papers from "../components/admin/Papers";

const AdminLayout = () => {
  const navigate = useNavigate();

  const [section, setSection] = useState("home");

  const handleSelect = (section) => {
    setSection(section);
  };
 
  return (
    <>
      <h1 className="text-5xl w-full p-5 font-bold bg-pijet-blue text-white">
        DASHBOARD
      </h1>
      <div className="flex">
        <div className="w-1/6 h-screen bg-white-200">
          <Sidebar onSelect={handleSelect} />
        </div>
        <div className="w-full bg-blue-200">
          {section === "home" && <HeroSection />}
          {section === "final-status" && <FinalStatus />}
          {section === "approval" && <Approval />}
          {section === "papers" && <Papers />}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
