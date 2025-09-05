import { useState } from 'react';
import './BanHammer.css';

const BanHammer = () => {
  const [bannedUsers, setBannedUsers] = useState([
    {
      id: 1,
      userId: 'user123',
      reason: 'Cheating',
      banDate: '2023-06-15',
      unbanned: false,
    },
    {
      id: 2,
      userId: 'user456',
      reason: 'Harassment',
      banDate: '2023-06-10',
      unbanned: false,
    },
  ]);

  const [banRequest, setBanRequest] = useState({
    userId: '',
    reason: '',
    banType: 'account',
  });

  const handleBanUser = () => {
    if (banRequest.userId && banRequest.reason) {
      const ban = {
        id: bannedUsers.length + 1,
        ...banRequest,
        banDate: new Date().toISOString().split('T')[0],
        unbanned: false,
      };
      setBannedUsers([...bannedUsers, ban]);
      setBanRequest({ userId: '', reason: '', banType: 'account' });
    }
  };

  const unbanUser = id => {
    setBannedUsers(
      bannedUsers.map(user =>
        user.id === id ? { ...user, unbanned: true } : user
      )
    );
  };

  return (
    <div className="ban-hammer">
      <h2>Ban Hammer</h2>

      <div className="ban-user-form">
        <h3>Ban User</h3>
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={banRequest.userId}
            onChange={e =>
              setBanRequest({ ...banRequest, userId: e.target.value })
            }
            placeholder="Enter user ID"
          />
        </div>

        <div className="form-group">
          <label>Ban Type:</label>
          <select
            value={banRequest.banType}
            onChange={e =>
              setBanRequest({ ...banRequest, banType: e.target.value })
            }
          >
            <option value="account">Account Only</option>
            <option value="device">Device + Account</option>
            <option value="ip">IP + Device + Account</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason:</label>
          <select
            value={banRequest.reason}
            onChange={e =>
              setBanRequest({ ...banRequest, reason: e.target.value })
            }
          >
            <option value="">Select reason</option>
            <option value="Cheating">Cheating</option>
            <option value="Harassment">Harassment</option>
            <option value="Spam">Spam</option>
            <option value="Exploiting">Exploiting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Additional Details:</label>
          <textarea
            value={banRequest.details}
            onChange={e =>
              setBanRequest({ ...banRequest, details: e.target.value })
            }
            placeholder="Enter additional details (optional)"
            rows="3"
          />
        </div>

        <button onClick={handleBanUser}>Ban User</button>
      </div>

      <div className="banned-users-list">
        <h3>Banned Users</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Ban Type</th>
              <th>Reason</th>
              <th>Ban Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bannedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.banType}</td>
                <td>{user.reason}</td>
                <td>{user.banDate}</td>
                <td>{user.unbanned ? 'Unbanned' : 'Banned'}</td>
                <td>
                  {!user.unbanned && (
                    <button onClick={() => unbanUser(user.id)}>Unban</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BanHammer;
