import { useState, useEffect } from "react";

function AddTodo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  // Load existing items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const handleTextChange = (e) => setText(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = Math.random().toString(36).substring(2,8)
    
    // Create a new object with text, id, and boolean values
    const newItem = {
      id,
      text: text,
      isCompleted: false
    };

    // Add the new item to the array
    const updatedItems = [...items, newItem];

    // Save the updated array to localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    // Update the state
    setItems(updatedItems);

    // Clear the form
    setText("");
  };

  return (
    <div>
      <h1>Add Items to localStorage</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.id}: {item.text} - {item.isCompleted ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;
