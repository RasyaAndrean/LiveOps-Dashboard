import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Event Manager', path: '/events' },
    { name: 'Mail System', path: '/mail' },
    { name: 'Coupon System', path: '/coupons' },
    { name: 'AB Test', path: '/abtest' },
    { name: 'Ban Hammer', path: '/ban' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
              1. [Event Manager](#1-event-manager) 2. [Mail
              System](#2-mail-system) 3. [Coupon System](#3-coupon-system) 4.
              [AB-Test](#4-ab-test) 5. [Ban Hammer](#5-ban-hammer)
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
