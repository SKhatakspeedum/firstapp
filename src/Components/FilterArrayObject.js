import React, { useEffect, useState } from "react";

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

const FilterArrayObject = () => {
  const [personData, setpersonData] = useState([]);


  //Function to Filter array by given character.
  const filterDataFunction = (character) => {
    const filteredData = people.filter((person) =>
      person.name.includes(character)
    );
    //update state personData=filteredData.
    setpersonData(filteredData);
  };

  //Run the filter function.
  useEffect(() => {
    filterDataFunction("i");
  }, []);

  return (
    <div>
      {personData.length > 0 ? (
        personData.map((item, index) => {
          return <li key={index}> {item.name}</li>;
        })
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default FilterArrayObject;
