import { useState } from 'react';
import './MailSystem.css';

const MailSystem = () => {
  const [mails, setMails] = useState([
    {
      id: 1,
      subject: 'Welcome Bonus',
      recipients: 'All Users',
      sent: '2023-06-01',
      status: 'Sent',
    },
    {
      id: 2,
      subject: 'Event Reminder',
      recipients: 'Active Users',
      sent: '2023-06-10',
      status: 'Sent',
    },
  ]);

  const [newMail, setNewMail] = useState({
    subject: '',
    message: '',
    recipients: 'All Users',
    attachments: [],
  });

  const handleSendMail = () => {
    if (newMail.subject && newMail.message) {
      const mail = {
        id: mails.length + 1,
        ...newMail,
        sent: new Date().toISOString().split('T')[0],
        status: 'Sent',
      };
      setMails([...mails, mail]);
      setNewMail({
        subject: '',
        message: '',
        recipients: 'All Users',
        attachments: [],
      });
    }
  };

  return (
    <div className="mail-system">
      <h2>Mail System</h2>

      <div className="send-mail-form">
        <h3>Send New Mail</h3>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            value={newMail.subject}
            onChange={e => setNewMail({ ...newMail, subject: e.target.value })}
            placeholder="Enter mail subject"
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={newMail.message}
            onChange={e => setNewMail({ ...newMail, message: e.target.value })}
            placeholder="Enter mail message"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Recipients:</label>
          <select
            value={newMail.recipients}
            onChange={e =>
              setNewMail({ ...newMail, recipients: e.target.value })
            }
          >
            <option value="All Users">All Users</option>
            <option value="Active Users">Active Users</option>
            <option value="Inactive Users">Inactive Users</option>
            <option value="VIP Users">VIP Users</option>
            <option value="Specific User IDs">Specific User IDs</option>
          </select>
        </div>

        <div className="form-group">
          <label>Attachments:</label>
          <input
            type="text"
            value={newMail.attachments}
            onChange={e =>
              setNewMail({ ...newMail, attachments: e.target.value })
            }
            placeholder="Enter attachment items (comma separated)"
          />
        </div>

        <button onClick={handleSendMail}>Send Mail</button>
      </div>

      <div className="mails-list">
        <h3>Sent Mails</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Recipients</th>
              <th>Sent Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mails.map(mail => (
              <tr key={mail.id}>
                <td>{mail.subject}</td>
                <td>{mail.recipients}</td>
                <td>{mail.sent}</td>
                <td>{mail.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MailSystem;
