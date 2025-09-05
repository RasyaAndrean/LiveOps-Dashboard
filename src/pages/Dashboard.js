import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { name: 'Active Users', value: '12,345' },
    { name: 'Revenue Today', value: '$1,234' },
    { name: 'Events Active', value: '7' },
    { name: 'Pending Mails', value: '142' },
  ];

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.name}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>New event "Summer Festival" created</li>
          <li>Mail sent to 5,000 users</li>
          <li>12 users banned for cheating</li>
          <li>AB test "Tutorial Length" started</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
