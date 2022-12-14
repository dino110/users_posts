export default function SearchBar({
  handleInputChange,
  handleSelectChange,
  searchInput,
}) {
  return (
    <div className="flex flex-row gap-1 mx-auto my-2 w-min">
      <div className="flex flex-row justify-between items-center rounded-md w-40">
        <label htmlFor="serchby" className="text-xs font-medium text-gray-700">
          Search by
        </label>
        <select
          id="serchby"
          name="serchby"
          className="h-7 w-24 px-0.5 rounded-md border-2 focus:outline-none text-xs"
          defaultValue="title"
          onChange={handleSelectChange}
        >
          <option>username</option>
          <option>title</option>
          <option>email</option>
        </select>
      </div>
      <div className="flex flex-row items-center rounded-md border-2 w-32 px-2 h-7">
        <input
          className="mr-2 text-xs focus:outline-none w-full "
          type="text"
          placeholder="search"
          onChange={handleInputChange}
          value={searchInput}
        />
        <img src="/search.png" alt="search icon" className="h-5 w-5 " />
      </div>
    </div>
  );
}
