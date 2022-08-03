import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemName, setItemName] = useState(null);
  const [newCategoryItem, setNewCategoryItem] = useState("Produce");

  function addNewItemName(e) {
    setItemName(e.target.value);
  }
  function addNewCategoryItem(e) {
    setNewCategoryItem(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: newItemName,
      category: newCategoryItem,
    });
  }

  return (
    <form className="NewItem" onSubmit={submit}>
      <label>
        Name:
        <input
          value={newItemName}
          onChange={addNewItemName}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newCategoryItem}
          onChange={addNewCategoryItem}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
