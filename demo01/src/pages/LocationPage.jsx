import React, { useState } from 'react';
import '../styles/LocationPage.css'; // Ensure this file has the updated CSS

const LocationPage = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('hospital'); // Default to hospital

    const handleFindLocations = (placeType) => {
        setLoading(true);
        setType(placeType); // Set type based on button clicked
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(`/api/nearby?lat=${latitude}&lng=${longitude}&type=${placeType}`);
                    const data = await response.json();
                    setLocations(data.places);
                } catch (err) {
                    setError('Error fetching locations');
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                setError('Error fetching location');
                setLoading(false);
            }
        );
    };

    return (
        <div className="location-container">
            <div className="button-container">
                <button onClick={() => handleFindLocations('hospital')} className="find-button">
                    {loading && type === 'hospital' ? 'Finding Hospitals...' : 'Find Nearest Hospitals'}
                </button>
                <button onClick={() => handleFindLocations('pharmacy')} className="find-button">
                    {loading && type === 'pharmacy' ? 'Finding Pharmacies...' : 'Find Nearest Pharmacies'}
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="location-list">
                {locations.map((place, index) => (
                    <a
                        key={index}
                        href={`https://www.google.com/maps?q=${place.geometry.location.lat},${place.geometry.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-item"
                    >
                        <h2>{place.name}</h2>
                        <p>{place.vicinity}</p>
                        <p><b><br></br>{place.distance.toFixed(2)} kilometer</b> away from you. You may need around <b>{place.distance.toFixed(2)*8} min</b> to reach.</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LocationPage;
