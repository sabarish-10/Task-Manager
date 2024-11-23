import { MdOutlineWorkOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrTasks } from "react-icons/gr";
import { IoTimeOutline, IoSettingsOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { useState } from "react";
import Dashboard from './Dashboard';
import TaskDashboard from './TaskDashboard';
const SideBar = () => {
  const [sidebarOpen,setSidebarOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isTimeManageOpen, setIsTimeManageOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);


  const [selectedItem, setSelectedItem] = useState("dashboard"); // Centralized menu state


  const renderContent = () => {
    switch (selectedItem) {
      case "dashboard":
  
  
        return <Dashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />;
      case "taskDashboard":
      
        return <TaskDashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />;
     
      default:
        return <Dashboard sidebarOpen={sidebarOpen} />;
    }
  };
  const handleMenuClick = (menu) => {
    setSelectedItem(menu);
    setIsDashboardOpen(menu === "dashboard");
    setIsTaskOpen(menu === "taskDashboard");
    setTimeout(()=>{
      setSidebarOpen(!sidebarOpen);
    },300)
   
  };
  
  return (
    <>
      <div className="flex overflow-hidden">
        <div className={`${sidebarOpen ? "xl:hidden w-full fixed inset-0 bg-black bg-opacity-50 md:bg-opacity-30 md:backdrop-blur-sm z-10" : ""}`}></div>
        <aside
          className={`fixed top-0 border-e-[1px] hover:cursor-pointer  md:w-60 w-56  z-40 bg-white left-0 h-full transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}

        >

          <ul className="mt-10  lg:mt-0">
            <li className={`flex ps-6   items-center gap-2  md:ps-4  py-3   ${isDashboardOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`} onClick={() => handleMenuClick("dashboard")}>

              <RxDashboard />
              <p className="flex items-center text-sm text-gray-500 font-medium"
              >
                DASHBOARD
              </p>
            </li>
            <li className={`flex ps-6   items-center gap-2  md:ps-4  py-3   ${isProjectOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`}>
              <MdOutlineWorkOutline />
              <p className="text-gray-500  text-sm font-medium">
                PROJECTS
              </p>
            </li>
            <li className={`flex ps-6   items-center gap-2  md:ps-4  py-3   ${isTaskOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`} onClick={()=>{handleMenuClick("taskDashboard")  }}>
              <GrTasks />
              <p className="text-gray-500 text-sm font-medium"
              >
                MY TASKS
              </p>
            </li>
            <li className={`flex ps-6   items-center gap-2  md:ps-4  py-3   ${isTimeManageOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`}>
              <IoTimeOutline />
              <p className="text-gray-500 text-sm font-medium">
                TIME MANAGE
              </p>
            </li>
            <li className={`flex items-center md:ps-4 ps-6 py-3 gap-2 ${isStatsOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`}>
              <FiPieChart />
              <p className="text-gray-500 text-sm font-medium">
                STATS
              </p>
            </li>
            <li className={`flex ps-6   items-center gap-2  md:ps-4  py-3   ${isSettingsOpen ? "border-e-[3px] text-teal-400 border-teal-300 bg-teal-50" : " hover:bg-teal-100 hover:text-black"
              }`}>
              <IoSettingsOutline />
              <p className="text-gray-500 text-sm font-medium">
                SETTINGS
              </p>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div

        >
          {/* Toggle Button */}



        </div>
      </div>
<div>
      {renderContent()}
      </div>

     

    </>
  );
};

export default SideBar;
