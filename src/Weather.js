import React, { useState, useEffect } from 'react';

function Weather() {
    const [locationData, setLocationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchLocation() {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setLocationData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchLocation();

    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {locationData && (
                <div>
                    <h2>Location Information</h2>
                    <p>Country: {locationData.country_name}</p>
                    <p>Region: {locationData.region}</p>
                    <p>City: {locationData.city}</p>
                    <p>Latitude: {locationData.latitude}</p>
                    <p>Longitude: {locationData.longitude}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
