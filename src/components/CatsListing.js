import { useState, useEffect } from 'react';
import axios from 'axios';
import './CatsListing.css'; // Import CSS for styling

function CatsListing() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch cats data
  const fetchCats = async (pageNumber) => {
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(`https://api.freeapi.app/api/v1/public/cats?page=${pageNumber}&limit=4`);
      
      // Check if the API response contains cats data
      if (response.data && response.data.data && response.data.data.data && response.data.data.data.length > 0) {
        setCats(response.data.data.data); // Set the cats data
        setTotalPages(response.data.data.totalPages); // Set total pages
      } else {
        setCats([]); // No cats found
      }
    } catch (error) {
      setError('Failed to fetch cat data. Please try again later.');
      console.error('Error fetching cats:', error);
    }
    setLoading(false);
  };

  // Fetch cats data when component mounts or page changes
  useEffect(() => {
    fetchCats(page);
  }, [page]); // Fetch data whenever `page` changes

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="cats-listing-container">
      {loading ? (
        <div className="loading-container">
          <div className="loading-card"></div>
          <div className="loading-card"></div>
          <div className="loading-card"></div>
          <div className="loading-card"></div>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : cats.length > 0 ? (
        <>
          <div className="cats-listing">
            <div className="cards-wrapper">
              <div className="cats-cards">
                {cats.map((cat) => (
                  <div key={cat.id} className="cat-card">
                    <img src={cat.image} alt={cat.name} className="cat-image" />
                    <div className="cat-info">
                      <h2 className="cat-name">{cat.name}</h2>
                      <p className="cat-description">{cat.description}</p>
                      <p className="cat-origin"><strong>Origin:</strong> {cat.origin}</p>
                      <p className="cat-temperament"><strong>Temperament:</strong> {cat.temperament}</p>
                      <p className="cat-life-span"><strong>Life Span:</strong> {cat.life_span} years</p>
                      <div className="cat-links">
                        {cat.wikipedia_url && <a href={cat.wikipedia_url} className="learn-more-link" target="_blank" rel="noopener noreferrer">Learn more</a>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pagination-buttons">
            <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
            <span className="page-info">Page {page} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
          </div>
        </>
      ) : (
        <div className="no-cats-message">No cats available at the moment.</div>
      )}
    </div>
  );
}

export default CatsListing;
