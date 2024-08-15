import { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomUserProfile.css'; // Import custom styles

function RandomUserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random');
      setUser(response.data.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setLoading(false);
  };

  return (
    <div className="user-profile-container">
      <button className="refresh-button" onClick={fetchUser}>
        <img src="/images/refresh.png" alt="Refresh" className="icon" />
      </button>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        user && (
          <div className="user-profile">
            <div className="user-picture-container">
              <img src={user.picture.large} alt="Profile" className="user-picture" />
              <div className="picture-title">{user.name.title}</div>
            </div>
            <div className="user-name">{`${user.name.first} ${user.name.last}`}</div>
            <div className="user-username">@{user.login.username}</div>
            <div className="icons-container">
              {user.location && (
                <div className="tooltip">
                  <a
                    href={`https://www.google.com/maps?q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                  >
                    <img src="/images/map.jpg" alt="Location" className="icon" />
                  </a>
                  <span className="tooltiptext">
                    {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
                  </span>
                </div>
              )}
              {user.cell && (
                <div className="tooltip">
                  <a href={`tel:${user.cell}`} target="_blank" rel="noopener noreferrer" className="icon-button">
                    <img src="/images/call.jpg" alt="Cell Phone" className="icon" />
                  </a>
                  <span className="tooltiptext">{user.cell}</span>
                </div>
              )}
            </div>
            <div className="user-details">
              <div className="user-info">
                <label>Email:</label>
                <span><a href={`mailto:${user.email}`} className="email-link">{user.email}</a></span>
              </div>
              <div className="user-info">
                <label>Date of Birth:</label>
                <span>{new Date(user.dob.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}</span>
              </div>
              <div className="user-info">
                <label>Cell:</label>
                <span>{user.cell}</span>
              </div>
              <div className="city-nationality">
                <div className="user-info">
                  <div className="label">City:</div>
                  <div className="value">{user.location.city}</div>
                </div>
                <div className="user-info">
                  <div className="label">Nationality:</div>
                  <div className="value">
                    <img
                      src={`https://flagpedia.net/data/flags/h80/${user.nat.toLowerCase()}.png`} // Flagpedia URL
                      alt={`${user.nat} flag`}
                      className="national-flag"
                    />
                    {user.nat}
                  </div>
                </div>
                <div className="user-info">
                  <div className="label">Time Zone:</div>
                  <div className="value">
                    {user.location.timezone.offset} ({user.location.timezone.description})
                  </div>
                </div>
                <div className="user-info">
                  <div className="label">Registered Since:</div>
                  <div className="value">{new Date(user.registered.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}</div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default RandomUserProfile;
