import SearchBar from "./SearchBar";

export default function FilterPanel({ search, setSearch, origin, setOrigin, origins }) {
  return (
    <div className="filter-panel">
      {/* Search input */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Filter by origin */}
      <select value={origin} onChange={e => setOrigin(e.target.value)}>
        <option value="">All Origins</option>
        {origins.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
