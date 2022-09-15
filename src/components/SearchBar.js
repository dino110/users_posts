export default function SearchBar({
  handleInputChange,
  handleSelectChange,
  searchInput,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 mx-auto">
      <div className="flex flex-row justify-between items-center rounded-md w-48">
        <label htmlFor="serchby" className="text-xs font-medium text-gray-700">
          Search by
        </label>
        <select
          id="serchby"
          name="serchby"
          className="h-7 w-28 px-1 rounded-md border-2 focus:outline-none text-xs"
          defaultValue="title"
          onChange={handleSelectChange}
        >
          <option>username</option>
          <option>title</option>
          <option>email</option>
        </select>
      </div>
      <div className="flex flex-row items-center rounded-md border-2 w-48 px-2 h-7">
        <img src="/search.png" alt="search icon" className="h-5 w-5 " />
        <input
          className="ml-2 focus:outline-none w-full "
          type="text"
          placeholder=""
          onChange={handleInputChange}
          value={searchInput}
        />
      </div>
    </div>
  );
}
