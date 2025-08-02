// src/pages/Details.jsx
import { useParams, Link } from 'react-router-dom';

const Details = () => {
    const { city } = useParams();

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white p-4">
            <header className="flex items-center justify-between mb-4">
                <Link to="/" className="text-[#ff4c60] font-bold">&lt; Back</Link>
                <h1 className="text-xl uppercase tracking-wider">{city}</h1>
                <span className="text-sm text-gray-400">Details</span>
            </header>

            <section className="bg-[#ff6b81] rounded-xl p-6 shadow-md space-y-4">
                <h2 className="text-lg font-semibold">Air Quality Index (AQI)</h2>
                <p className="text-sm">⚠️ AQI Level: <strong>120</strong> (Moderate)</p>
                <p className="text-sm">🌬 PM2.5: <strong>35 µg/m³</strong></p>
                <p className="text-sm">🌫 PM10: <strong>60 µg/m³</strong></p>
                <p className="text-sm">💨 CO: <strong>0.7 ppm</strong></p>
                <p className="text-sm">🌡 Temp: <strong>28°C</strong></p>
            </section>
        </div>
    );
};

export default Details;
