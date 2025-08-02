// src/components/MetricCard.jsx
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetricCard = ({ title, value }) => {
    return (
        <Link to={`/details/${title}`}>
            <div className="bg-[#ff6b81] rounded-2xl p-4 flex flex-col justify-between shadow-md hover:scale-105 transition-transform cursor-pointer">
                <div>
                    <h2 className="text-md font-semibold">{title}</h2>
                    <p className="text-sm mt-2">{value}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <ChevronRight className="text-white opacity-80" />
                </div>
            </div>
        </Link>
    );
};

export default MetricCard;
