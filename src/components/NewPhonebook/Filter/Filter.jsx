export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label htmlFor="filter"> Find contacts by name </label>
      <br />
      <input onChange={onChange} value={value} type="text" name="filter" />
    </div>
  );
};
