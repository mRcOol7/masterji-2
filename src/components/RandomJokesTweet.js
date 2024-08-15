import { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomJokesTweet.css'; // Import the CSS file

// Utility function to format numbers
const formatNumber = (num) => {
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
  return num;
};

// Utility function to format date and time
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  return new Date(date).toLocaleString(undefined, options);
};

function RandomJokesTweet() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
      setJoke(response.data.data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
    setLoading(false);
  };

  // Example random analytics data
  const analytics = {
    likes: Math.floor(Math.random() * 1000000),
    views: Math.floor(Math.random() * 1000000),
    retweets: Math.floor(Math.random() * 1000000),
    comments: Math.floor(Math.random() * 1000000),
  };

  // Current timestamp
  const currentTimestamp = formatDate(new Date());

  return (
    <div className="background">
      <div className="tweet-container">
        {loading ? (
          <div className="loading-card">
            <div className="loading-avatar"></div>
            <div className="loading-content">
              <div className="loading-line short"></div>
              <div className="loading-line"></div>
              <div className="loading-line short"></div>
            </div>
          </div>
        ) : (
          <div className="tweet-card">
            <div className="tweet-header">
              <img
                src="/images/elon-avatar.png" // Path to your avatar image
                alt="Elon Musk"
                className="tweet-avatar"
              />
              <div className="tweet-author">
                <span className="author-name">
                  Elon Musk
                  <img
                    src="/images/verification-badge.png" // Path to the verification badge PNG
                    alt="Verified"
                    className="verification-badge"
                  />
                </span>
                <span className="author-handle">@elonmusk</span>
              </div>
              <div className="tweet-timestamp">{currentTimestamp}</div>
              <span className="analytics-number">{formatNumber(analytics.views)}</span>
            </div>
            <div className="tweet-content">
              {joke.content}
            </div>
            <div className="tweet-footer">
              <div className="tweet-analytics">
                <div className="analytics-item">
                  <img src="/images/like-icon.png" alt="Likes" className="analytics-icon" />
                  <span className="analytics-number">{formatNumber(analytics.likes)}</span>
                </div>
                <div className="analytics-item">
                  <img src="/images/retweet-icon.png" alt="Retweets" className="analytics-icon" />
                  <span className="analytics-number">{formatNumber(analytics.retweets)}</span>
                </div>
                <div className="analytics-item">
                  <img src="/images/comment-icon.png" alt="Comments" className="analytics-icon" />
                  <span className="analytics-number">{formatNumber(analytics.comments)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomJokesTweet;
