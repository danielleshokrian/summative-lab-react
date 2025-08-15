import AddCoffeeForm from "../components/addCoffeeForm.jsx";

export default function AdminPortal({ coffees, setCoffees }) {
  const addCoffee = (newCoffee) => {
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => setCoffees([...coffees, data]))
      .catch(console.error);
  };

  return (
    <div>
      <h1>Admin Portal</h1>

      {/* Form to add new coffee */}
      <AddCoffeeForm onAdd={addCoffee} />
    </div>
  );
}