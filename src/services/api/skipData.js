export const fetchSkipData = async () => {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );

  if (!response.ok) {
    console.error("Failed to fetch skip data:");
    return [];
  }

  return response.json();
};
