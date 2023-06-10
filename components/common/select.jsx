/**
 * Select Component
 *
 */

const Select = ({ onChange, value, options }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      name="options"
      id="rows"
      className="custom-select"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
