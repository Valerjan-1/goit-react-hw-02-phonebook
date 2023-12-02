const Filter = ({ filter, handleFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
