import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import HeroSection from "../components/admin/HeroSection";

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

const FinalStatus = () => <div>Final Status</div>;
const Approval = () => <div>Approval Content</div>;
const Papers = () => <div>Papers Content</div>;

export default AdminLayout;
