import axios from 'axios';

export const getNearbyPlaces = async (req, res) => {
    const { lat, lng, type } = req.query;

    try {
        const apiKey = process.env.GOOGLE_API_KEY; // Use the API key from the environment variable
        const placeType = type === 'pharmacy' ? 'pharmacy' : 'hospital'; // Default to 'hospital'

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=${placeType}&key=${apiKey}`;

        const response = await axios.get(url);
        const places = response.data.results;

        console.log('Places fetched:', places); // Log the fetched places

        // Calculate distance for each place
        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);
        const placesWithDistance = places.map(place => {
            const distance = calculateDistance(userLat, userLng, place.geometry.location.lat, place.geometry.location.lng);
            return { ...place, distance };
        });

        res.status(200).json({ places: placesWithDistance });
    } catch (error) {
        console.error('Error fetching nearby places:', error); // Log the error
        res.status(500).json({ message: 'Error fetching nearby places', error });
    }
};

// Function to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
