function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
