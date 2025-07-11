import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [places, setPlaces] = useState([]);
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [loading, setLoading] = useState(false);

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.append("q", query);
      const res = await axios.get(`/places/search?${params.toString()}`);
      setPlaces(res.data);
    } catch (error) {
      console.error(
        "Error fetching places:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPlaces();
  };

  return (
    <div className="px-4 py-6">
      <form
        onSubmit={handleSearch}
        className="max-w-2xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        <div className="md:col-span-3">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, title, or address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition w-full"
        >
          Search
        </button>
      </form>

      {/* Results Grid */}
      {loading ? (
        <div className="text-center text-gray-500">Loading results...</div>
      ) : (
        <div className="grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {places.length > 0 ? (
            places.map((place) => {
              const firstPhoto =
                place.photos?.general?.[0] || place.photos?.[0] || null;

              return (
                <Link
                  to={`/place/${place._id}`}
                  key={place._id}
                  className="cursor-pointer"
                >
                  <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden">
                    {firstPhoto ? (
                      <img
                        src={`http://localhost:4000/upload/${firstPhoto}`}
                        alt={place.title}
                        className="object-cover aspect-square w-full"
                      />
                    ) : (
                      <div className="aspect-square bg-gray-300 flex items-center justify-center text-white">
                        No photo
                      </div>
                    )}
                  </div>
                  <h2 className="font-bold text-md">{place.address}</h2>
                  <h3 className="text-sm text-gray-500">{place.title}</h3>
                  <div className="mt-1">
                    <span className="font-bold">${place.price} per night</span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No places match your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
