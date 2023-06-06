import React, { useState } from "react";

const AddTwoNumber = () => {
  const [firstv, setFirstv] = useState();
  const [secondv, setSecondv] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "f") {
      setFirstv(Number(value));
    } else if (name === "s") {
      setSecondv(Number(value));
    }
  };
  return (
    <div>
      <form>
        <input
          name="f"
          value={firstv}
          placeholder="First Number"
          onChange={handleChange}
        />
        <input
          name="s"
          value={secondv}
          placeholder="Second Number"
          onChange={handleChange}
        />
        <div>Sum: {firstv+secondv}</div>
      </form>
    </div>
  );
};

export default AddTwoNumber;
