import { useState, useEffect } from "react";

export function useCoffeeData(url = "http://localhost:5001/coffees") {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => setCoffees(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);
  
  // Filter coffees by origin
const filterByOrigin = (origin) => {
    if (!origin) return coffees;
    return coffees.filter(c => c.origin.toLowerCase() === origin.toLowerCase());
  };

  // Search coffees by name
  const searchByName = (query) => {
    if (!query) return coffees;
    return coffees.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  };

  return { coffees, setCoffees, loading, error, filterByOrigin, searchByName };
}