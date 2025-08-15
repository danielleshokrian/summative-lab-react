import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import FilterPanel from "../components/FilterPanel";

export default function Shop({ coffees }) {
  const [search, setSearch] = useState("");
  const [origin, setOrigin] = useState("");

  const origins = [...new Set(coffees.map(c => c.origin))];

  const displayedCoffees = coffees.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (!origin || c.origin.toLowerCase() === origin.toLowerCase())
  );

  return (
    <div>
      <h1>Shop</h1>
      <FilterPanel
        search={search}
        setSearch={setSearch}
        origin={origin}
        setOrigin={setOrigin}
        origins={origins}
      />

      <div>
        {displayedCoffees.map(c => <CoffeeCard key={c.id} coffee={c} />)}
        {displayedCoffees.length === 0 && <p>No coffees found.</p>}
      </div>
    </div>
  );
}
