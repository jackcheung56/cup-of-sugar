import React, { useState } from "react";
import '../styles/Form.css';
import { __UpdateItem } from "../services/ItemService";
import FormInput from "../components/FormInput";

const EditItemPage = (props) => {
  const [condition, setCondition] = useState(``);
  const data = props.history.location.detail.detail;
  const callId = props.history.location.detail.detail.id;
  const [editItem, setEditItem] = useState({});
  const handleChange = ({ target }) => {
    setEditItem({ ...editItem, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const update = await __UpdateItem(editItem, callId);

      props.history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const backButton = async (event) => {
    event.preventDefault();
    try {
      props.history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="backBtn" onClick={backButton}>cancel</button>
      <h1>EDIT ITEM</h1>
      <form className="inputFields">
        <FormInput
          placeholder={data.title}
          name="title"
          value={editItem.title}
          onChange={handleChange}
        />

        <FormInput
          placeholder={data.category}
          name="category"
          value={editItem.category}
          onChange={handleChange}
        />

        <FormInput
          placeholder={data.image}
          name="image"
          value={editItem.image}
          onChange={handleChange}
        />

        <FormInput
          placeholder={data.description}
          name="description"
          value={editItem.description}
          onChange={handleChange}
        />

        <div className="tags">
          <button
            className="condiTags"
            type="button"
            placeholder="Great"
            name="Great"
            onClick={() => setCondition("Great")}
          >
            Great
          </button>

          <button
            className="condiTags"
            type="button"
            placeholder="Acceptable"
            name="Acceptable"
            onClick={() => setCondition("Acceptable")}
          >
            Acceptable
          </button>

          <button
            className="condiTags"
            type="button"
            placeholder="Bad"
            name="Bad"
            onClick={() => setCondition("Bad")}
          >
            Bad
          </button>
        </div>

        <button className="submitButton" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditItemPage;
