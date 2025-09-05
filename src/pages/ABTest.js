import { useState } from 'react';
import './ABTest.css';

const ABTest = () => {
  const [tests, setTests] = useState([
    {
      id: 1,
      name: 'Tutorial Length',
      variantA: 'Standard (5 min)',
      variantB: 'Short (3 min)',
      startDate: '2023-06-01',
      endDate: '2023-06-30',
      active: true,
    },
    {
      id: 2,
      name: 'Shop Discount',
      variantA: '10% Off',
      variantB: '15% Off',
      startDate: '2023-06-10',
      endDate: '2023-06-25',
      active: false,
    },
  ]);

  const [newTest, setNewTest] = useState({
    name: '',
    variantA: '',
    variantB: '',
    startDate: '',
    endDate: '',
  });

  const handleCreateTest = () => {
    if (
      newTest.name &&
      newTest.variantA &&
      newTest.variantB &&
      newTest.startDate &&
      newTest.endDate
    ) {
      const test = {
        id: tests.length + 1,
        ...newTest,
        active: false,
      };
      setTests([...tests, test]);
      setNewTest({
        name: '',
        variantA: '',
        variantB: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const toggleTest = id => {
    setTests(
      tests.map(test =>
        test.id === id ? { ...test, active: !test.active } : test
      )
    );
  };

  return (
    <div className="ab-test">
      <h2>AB Test</h2>

      <div className="create-test-form">
        <h3>Create New AB Test</h3>
        <div className="form-group">
          <label>Test Name:</label>
          <input
            type="text"
            value={newTest.name}
            onChange={e => setNewTest({ ...newTest, name: e.target.value })}
            placeholder="Enter test name"
          />
        </div>

        <div className="form-group">
          <label>Variant A:</label>
          <input
            type="text"
            value={newTest.variantA}
            onChange={e => setNewTest({ ...newTest, variantA: e.target.value })}
            placeholder="Enter variant A description"
          />
        </div>

        <div className="form-group">
          <label>Variant B:</label>
          <input
            type="text"
            value={newTest.variantB}
            onChange={e => setNewTest({ ...newTest, variantB: e.target.value })}
            placeholder="Enter variant B description"
          />
        </div>

        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={newTest.startDate}
            onChange={e =>
              setNewTest({ ...newTest, startDate: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={newTest.endDate}
            onChange={e => setNewTest({ ...newTest, endDate: e.target.value })}
          />
        </div>

        <button onClick={handleCreateTest}>Create AB Test</button>
      </div>

      <div className="tests-list">
        <h3>Active AB Tests</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Variant A</th>
              <th>Variant B</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map(test => (
              <tr key={test.id}>
                <td>{test.name}</td>
                <td>{test.variantA}</td>
                <td>{test.variantB}</td>
                <td>{test.startDate}</td>
                <td>{test.endDate}</td>
                <td>{test.active ? 'Active' : 'Inactive'}</td>
                <td>
                  <button onClick={() => toggleTest(test.id)}>
                    {test.active ? 'Stop' : 'Start'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ABTest;
