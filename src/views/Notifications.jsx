import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const Notifications = ({ onLogout }) => {
  const [notifications, setNotifications] = useState([
    {
      name: 'Meeting with team',
      date: '2024-06-17',
      allDay: false,
      remindMe: '1h',
    },
    {
      name: 'Project deadline',
      date: '2024-06-18',
      allDay: true,
      remindMe: '12h',
    },
    {
      name: 'Doctor appointment',
      date: '2024-06-19',
      allDay: false,
      remindMe: '1d',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] =
    useState(null);
  const [newNotification, setNewNotification] = useState({
    name: '',
    date: '',
    allDay: false,
    remindMe: '1h',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewNotification({
      ...newNotification,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddNotification = () => {
    if (isEditing) {
      const updatedNotifications = notifications.map((notification, index) =>
        index === currentNotificationIndex ? newNotification : notification
      );
      setNotifications(updatedNotifications);
    } else {
      setNotifications([...notifications, newNotification]);
    }
    setShowModal(false);
    setIsEditing(false);
    setNewNotification({ name: '', date: '', allDay: false, remindMe: '1h' });
  };

  const handleEditNotification = (index) => {
    setCurrentNotificationIndex(index);
    setNewNotification(notifications[index]);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteNotification = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="flex h-screen">
      <aside>
        <Navbar onLogout={onLogout} />
      </aside>
      <div className="flex-1 p-8 ">
        <header className="flex justify-between items-center">
          <span className="text-2xl font-bold">Powiadomienia</span>
          <button
            onClick={() => {
              setShowModal(true);
              setIsEditing(false);
              setNewNotification({
                name: '',
                date: '',
                allDay: false,
                remindMe: '1h',
              });
            }}
            className="flex no-underline py-3 px-4 border-none cursor-pointer rounded-md items-center text-white bg-dark-green"
          >
            Dodaj powiadomienie
          </button>
        </header>

        <ul className="space-y-4 mt-4">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-800 p-4 rounded-md mb-4 w-full cursor-pointer border border-gray-300 shadow-lg"
              onClick={() => handleEditNotification(index)}
            >
              <div>
                <h3 className="font-semibold text-lg">{notification.name}</h3>
                <p>{notification.date}</p>
                <p>
                  {notification.allDay ? 'All day' : 'Specific time'} -
                  Przypomnij mi {notification.remindMe} przed
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteNotification(index);
                }}
                className="text-red-500 hover:text-red-700"
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-xl font-semibold mb-4">
                {isEditing ? 'Edit Notification' : 'Create Notification'}
              </h3>
              <label className="block mb-2">
                Nazwa:
                <input
                  type="text"
                  name="name"
                  value={newNotification.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                Data:
                <input
                  type="date"
                  name="date"
                  value={newNotification.date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="allDay"
                  checked={newNotification.allDay}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Cały dzień
              </label>
              <label className="block mb-4">
                Przypomnij mi:
                <select
                  name="remindMe"
                  value={newNotification.remindMe}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                >
                  <option value="1h">1 godzina przed</option>
                  <option value="12h">12 godzin przed</option>
                  <option value="1d">1 dzień przed</option>
                </select>
              </label>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleAddNotification}
                  className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
                >
                  {isEditing ? 'Zapisz' : 'Dodaj'}
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setIsEditing(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
                >
                  Anuluj
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Notifications.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Notifications;
