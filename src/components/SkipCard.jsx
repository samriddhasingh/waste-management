const SkipCard = ({
  size,
  image,
  hireDays,
  price,
  vat,
  selected,
  onSelect,
}) => {
  const totalPrice = price + vat;

  return (
    <div
      onClick={onSelect}
      className={`
        bg-gray-50 rounded-2xl p-6 border-2 cursor-pointer relative 
        transition-all duration-300 ease-in-out hover:-translate-y-1 
        hover:shadow-xl overflow-hidden group
        ${
          selected
            ? "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg shadow-blue-200/50 -translate-y-1"
            : "border-transparent hover:border-gray-200"
        }
      `}
    >
      <div
        className={`
        absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600
        transition-opacity duration-300
        ${selected ? "opacity-100" : "opacity-0"}
      `}
      />

      <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-5">
        {size} Yards
      </div>

      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-5 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${size} yard skip`}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <></>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{size} Yard Skip</h3>
        <p className="text-gray-600">{hireDays} day hire period</p>
        <div className="text-3xl font-bold text-blue-600">£{totalPrice}</div>
      </div>

      <button
        className={`
          w-full mt-5 py-3 px-4 rounded-lg font-semibold transition-all duration-300
          ${
            selected
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        `}
      >
        {selected ? "✓ Selected" : "Select This Skip →"}
      </button>

      {selected && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
          ✓
        </div>
      )}
    </div>
  );
};

export default SkipCard;
