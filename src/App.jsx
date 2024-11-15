import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TaskDashboard from './components/TaskDashboard'
 import AuthPage from './components/Authpages'
 import Dashboard from './components/Dashboard';
 import Calendar from './components/Calendar';
 import SideBar from './components/SideBar'
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard  SideBar={SideBar} />} />
        <Route path="/taskDashboard" element={<TaskDashboard SideBar={SideBar} />} />
        <Route path='/calendar' element={<Calendar SideBar={SideBar} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
