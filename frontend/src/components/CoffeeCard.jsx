export default function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <p>Origin: {coffee.origin}</p>
      <p>${coffee.price.toFixed(2)}</p>
    </div>
  );
}