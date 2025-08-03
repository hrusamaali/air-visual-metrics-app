// src/pages/Home.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPollution } from '../redux/pollution/pollutionSlice';
import MetricCard from '../components/MetricCard';

const Home = () => {
    const dispatch = useDispatch();
    const { cities, status, error } = useSelector((state) => state.pollution);

    useEffect(() => {
        dispatch(fetchPollution({ country: 'USA', state: 'California' }));
    }, [dispatch]);


    return (
        <div className="min-h-screen bg-[#ff6b81] text-white">
            {/* Header */}
            <header className="bg-[#ff4c60] p-4 flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
                    Air Pollution Metrics
                </h1>
                <span className="text-sm opacity-75">2025</span>
            </header>

            {/* Subheading or filter bar */}
            <div className="p-4 text-sm text-right opacity-70">
                USA
            </div>

            {/* Status */}
            {status === 'loading' && <p className="p-4 text-center">Loading data...</p>}
            {status === 'failed' && <p className="p-4 text-center text-red-300">Error: {error}</p>}

            {/* Metrics Grid */}
            <section className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {status === 'succeeded' && cities.map((city, index) => (
                    <MetricCard
                        key={index}
                        title={city.city}
                        value={`State: ${city.state}`}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
