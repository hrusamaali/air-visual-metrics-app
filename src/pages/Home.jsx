// src/pages/Home.jsx
import MetricCard from '../components/MetricCard';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#ff6b81] text-white">
            {/* Header */}
            <header className="bg-[#ff4c60] p-4 flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
                    Air Pollution Metrics
                </h1>
                <span className="text-sm opacity-75">2025</span>
            </header>

            {/* Subheading or filter bar (if any) */}
            <div className="p-4 text-sm text-right opacity-70">
                USA (example region)
            </div>

            {/* Metrics Grid */}
            <section className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Sample static cards (will be dynamic later) */}
                <MetricCard title="Los Angeles" value="AQI: 123" />
                <MetricCard title="New York" value="AQI: 98" />
                <MetricCard title="Chicago" value="AQI: 110" />
                <MetricCard title="Houston" value="AQI: 145" />
                <MetricCard title="Phoenix" value="AQI: 88" />
                <MetricCard title="Philadelphia" value="AQI: 130" />
            </section>
        </div>
    );
};

export default Home;
