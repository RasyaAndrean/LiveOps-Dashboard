import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ABTest from './pages/ABTest';
import BanHammer from './pages/BanHammer';
import CouponSystem from './pages/CouponSystem';
import Dashboard from './pages/Dashboard';
import EventManager from './pages/EventManager';
import MailSystem from './pages/MailSystem';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<EventManager />} />
              <Route path="/mail" element={<MailSystem />} />
              <Route path="/coupons" element={<CouponSystem />} />
              <Route path="/abtest" element={<ABTest />} />
              <Route path="/ban" element={<BanHammer />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
