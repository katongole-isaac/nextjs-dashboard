/**
 * SearchBox Component
 *
 */

const SearchBox = ({ searchQuery, placeHolder, onChange }) => {
  return (
    <div className="card my-3 py-2">
      <div className="card-body d-flex align-items-center py-2">
        {/* <span className="font-weight-bold"  >Search </span> */}
        <input
          type="text"
          value={searchQuery}
          placeholder={placeHolder || "search..."}
          className="form-control w-50 "
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
