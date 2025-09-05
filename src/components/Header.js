import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>LiveOps Dashboard</h1>
        <div className="user-info">
          <span>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
