import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 import AuthPage from './components/Authpages';


 import SideBar from './components/SideBar';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/SideBar" element={<SideBar/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
