import React, { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="p-8 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Welcome!
      </h1>

      {loading ? (
        <p className="text-center">Loading data...</p>
      ) : (
        <p>The page is loaded</p>
      )}
    </div>
  );
}
