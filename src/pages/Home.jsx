import React, { useEffect, useState } from "react";
import SkipCard from "../components/SkipCard";
import { fetchSkipData } from "../services/api/skipData";
import "../styles/home.css";

const Home = () => {
  const [skipData, setSkipData] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSkipData();
      setSkipData(response);
    };

    fetchData();
  }, []);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
    setSkipData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected: item.id === skip.id,
      }))
    );
  };

  return (
    <div className="p-8 text-center space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Choose Your Skip Size</h1>
          <p className="text-gray-600">
            Select the skip size that best suits your needs
          </p>
        </div>

        {selectedSkip && (
          <div className="btn-primary">
            {selectedSkip.size} Yard Skip - £
            {selectedSkip.price_before_vat + selectedSkip.vat} (
            {selectedSkip.hire_period_days} day hire)
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipData.map((skip) => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            image={skip.image}
            hireDays={skip.hire_period_days}
            price={skip.price_before_vat}
            vat={skip.vat}
            selected={skip.selected}
            onSelect={() => handleSkipSelect(skip)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
