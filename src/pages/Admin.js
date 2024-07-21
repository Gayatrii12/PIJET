import React, { useState } from "react";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import HeroSection from "../components/admin/HeroSection";
// import FinalStatus from "../components/admin/FinalStatus";

const AdminLayout = () => {
  const navigate = useNavigate();

  const [home, setAdminHome] = useState(0);

  const handleSelect = (section) => {
    // navigate(`/admin/${section}`);
    setAdminHome();
  };

  setAdminHome = () => {
    home = 1;
  };

  return (
    <>
      <h1 className="text-5xl w-full p-5 font-bold bg-pijet-blue text-white">
        DASHBOARD
      </h1>
      <div className="flex">
        <div className="w-2/6 h-screen bg-white-200">
          <Sidebar onSelect={handleSelect} />
        </div>
        <div className="w-full bg-blue-200">
          {/* <Routes>
            <Route path="" element={<AdminLayout />}>
              <Route path="/admin/home" element={<HeroSection />} />
              <Route path="/final-status" element={<FinalStatus />} />
              <Route path="/approval" element={<Approval />} />
              <Route path="/papers" element={<Papers />} />
            </Route>
          </Routes>
          <Outlet /> */}
          {/* <Routes>
            <Route path="/admin/home" element={<HeroSection />} />
          </Routes> */}
          {home && <HeroSection />}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

// const Home = () => <HeroSection />;
// const FinalStatus = () => <div>Approval Content</div>;
// const Approval = () => <div>Approval Content</div>;
// const Papers = () => <div>Papers Content</div>;

// const Admin = () => {
//   return (
//     // <>
//     //   <HeroSection/>
//     // </>
//     // <BrowserRouter>

//     // </BrowserRouter>

//   );
// };

// export default Admin;
