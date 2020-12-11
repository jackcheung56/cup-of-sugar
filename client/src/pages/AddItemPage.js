import React, { useState } from "react";
import "../styles/Form.css";
import { __CreateItem } from "../services/ItemService";
import { useHistory } from "react-router-dom";
import FormInput from "../components/FormInput";

const AddItemPage = (props) => {
  const [newItem, setNewItem] = useState({});
  const [condition, setCondition] = useState("");
  const history = useHistory();
  const loggedUser = props.currentUser.id;

  console.log("ADD", newItem);

  const handleChange = ({ target }) => {
    setNewItem({ ...newItem, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const post = await __CreateItem(newItem);
      history.push(`/users/${loggedUser}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>ADD ITEM</h1>
      <form className="inputFields">
        <FormInput
          placeholder="item name"
          name="title"
          value={newItem.title}
          onChange={handleChange}
        />

        <FormInput
          placeholder="category"
          name="category"
          value={newItem.category}
          onChange={handleChange}
        />

        <FormInput
          placeholder="image"
          name="image"
          value={newItem.image}
          onChange={handleChange}
        />

        <FormInput
          placeholder="description"
          name="description"
          value={newItem.description}
          onChange={handleChange}
        />

        <div className="tags">
          <button
            type="button"
            placeholder="Great"
            name="Great"
            onClick={() => setCondition("Great")}
          >
            Great
          </button>

          <button
            type="button"
            placeholder="Acceptable"
            name="Acceptable"
            onClick={() => setCondition("Acceptable")}
          >
            Acceptable
          </button>

          <button
            type="button"
            placeholder="Bad"
            name="Bad"
            onClick={() => setCondition("Bad")}
          >
            Bad
          </button>
        </div>

        <input
          type="hidden"
          name="condition"
          value={(newItem.condition = condition)}
        ></input>

        <input
          type="hidden"
          name="ownerId"
          value={(newItem.owner_id = loggedUser)}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
