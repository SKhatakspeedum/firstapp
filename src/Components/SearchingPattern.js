import React, { useEffect, useState } from 'react';

const people = [
  {
    name: "Insane",
    age: 21,
  },
  {
    name: "Immortal",
    age: 24,
  },
  {
    name: "Chilliflick",
    age: 24,
  },
  {
    name: "Monjiro",
    age: 20,
  },
  {
    name: "Kentaro",
    age: 21,
  },
];

const SearchingPattern = () => {
  const [pattern, setPattern] = useState([]);

  // Function to search for a pattern in the people array
  const searchPattern = (searchText) => {
    // Filter the people array based on the search text
    const filteredData = people.filter((person) =>
      person.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPattern(filteredData); // Set the filtered data to the pattern state
  };

  // Run the searchPattern function.
  useEffect(() => {
    searchPattern("jiro");
  }, []);

  return (
    <div>
      {pattern.length > 0 ? (
        <ul>
          {pattern.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default SearchingPattern;
