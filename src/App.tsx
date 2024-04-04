import { useState } from "react";
import properties from "./assets/properties.json";
import { Hotel } from "./types";

function App() {
  const hotels = properties as Hotel[];
  const [textFilter, setTextFilter] = useState("");

  const hotelsFiltered = hotels.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(textFilter.toLowerCase()) ||
      hotel.description.toLowerCase().includes(textFilter.toLowerCase())
    );
  });

  return (
    <div className="m-8 ">
      <div className="flex justify-center">
        <input
          className="form-input px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text"
          value={textFilter}
          onChange={(e) => {
            setTextFilter(e.target.value);
          }}
          placeholder="Search hotels..."
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">Hotels</h1>
      <p className="text-gray-500">Showing {hotelsFiltered.length} hotels</p>
      <hr className="my-4" />
      {hotelsFiltered.length === 0 && <p>No hotels found</p>}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {hotelsFiltered.map((hotel, index) => {
          return (
            <div key={index} className="border p-4">
              <h2 className="text-xl font-bold">{hotel.name}</h2>
              <img src={hotel.images[0]} alt="" />
              <p>{hotel.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
