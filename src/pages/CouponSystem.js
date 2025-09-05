import { useState } from 'react';
import './CouponSystem.css';

const CouponSystem = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: 'SUMMER2023',
      reward: '100 Diamonds',
      expiry: '2023-07-31',
      used: 45,
      limit: 100,
    },
    {
      id: 2,
      code: 'WELCOME100',
      reward: '50 Gold',
      expiry: '2023-12-31',
      used: 120,
      limit: 500,
    },
  ]);

  const [newCoupon, setNewCoupon] = useState({
    code: '',
    reward: '',
    expiry: '',
    limit: 100,
  });

  const handleGenerateCoupon = () => {
    if (newCoupon.code && newCoupon.reward && newCoupon.expiry) {
      const coupon = {
        id: coupons.length + 1,
        ...newCoupon,
        used: 0,
      };
      setCoupons([...coupons, coupon]);
      setNewCoupon({ code: '', reward: '', expiry: '', limit: 100 });
    }
  };

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setNewCoupon({ ...newCoupon, code: result });
  };

  return (
    <div className="coupon-system">
      <h2>Coupon System</h2>

      <div className="generate-coupon-form">
        <h3>Generate New Coupon</h3>
        <div className="form-group">
          <label>Coupon Code:</label>
          <div className="code-input">
            <input
              type="text"
              value={newCoupon.code}
              onChange={e =>
                setNewCoupon({ ...newCoupon, code: e.target.value })
              }
              placeholder="Enter coupon code"
            />
            <button onClick={generateRandomCode}>Generate</button>
          </div>
        </div>

        <div className="form-group">
          <label>Reward:</label>
          <input
            type="text"
            value={newCoupon.reward}
            onChange={e =>
              setNewCoupon({ ...newCoupon, reward: e.target.value })
            }
            placeholder="Enter reward (e.g., 100 Diamonds)"
          />
        </div>

        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="date"
            value={newCoupon.expiry}
            onChange={e =>
              setNewCoupon({ ...newCoupon, expiry: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Usage Limit:</label>
          <input
            type="number"
            value={newCoupon.limit}
            onChange={e =>
              setNewCoupon({ ...newCoupon, limit: parseInt(e.target.value) })
            }
            min="1"
          />
        </div>

        <button onClick={handleGenerateCoupon}>Generate Coupon</button>
      </div>

      <div className="coupons-list">
        <h3>Active Coupons</h3>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Reward</th>
              <th>Expiry</th>
              <th>Usage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id}>
                <td>{coupon.code}</td>
                <td>{coupon.reward}</td>
                <td>{coupon.expiry}</td>
                <td>
                  {coupon.used}/{coupon.limit}
                </td>
                <td>
                  {new Date(coupon.expiry) > new Date() &&
                  coupon.used < coupon.limit
                    ? 'Active'
                    : 'Expired'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponSystem;
