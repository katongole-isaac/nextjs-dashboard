/**
 * CheckBox Component
 *
 */

import { useState } from "react";

const CheckBox = ({ label, name }) => {
  const [value, setValue] = useState({
    name: "",
    value: false,
  });

  const handleChange = ({ target: input }) => {
    const { name, checked: value } = input;
    setValue({ name, value });
  };

  return (
    <div className="input-group ">
      <input
        type="checkbox"
        name={name}
        value={value}
        id={name}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={name} className="ml-3 clickable chckbox-label">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
