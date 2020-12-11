import React, { useState } from "react";
import "../styles/Form.css";

import { __UpdateItem } from "../services/ItemService";

<<<<<<< HEAD
// import { useHistory } from "react-router-dom";
import FormInput from "../components/FormInput";
=======
import FormInput from '../components/FormInput'
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8

const EditItemPage = (props) => {

<<<<<<< HEAD
  const data = props.history.location.detail.detail;
  const callId = props.history.location.detail.detail.id;
  const [editItem, setEditItem] = useState({});

  const handleChange = ({ target }) => {
    setEditItem({ ...editItem, [target.name]: target.value });
    console.log("TARGET VALUE", target.value);
  };
=======
  const [condition, setCondition] = useState(``)
  const data = props.history.location.detail.detail
  const callId = props.history.location.detail.detail.id
  const [editItem, setEditItem] = useState({})

  console.log(data)


  const handleChange = ({ target }) => {
    setEditItem({ ...editItem, [target.name]: target.value })
  }
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8

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
    event.preventDefault()
    try {
      props.history.goBack()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <button onClick={backButton}>cancel</button>
      <h1>EDIT ITEM</h1>
<<<<<<< HEAD
      <form className="inputFields" onSubmit={handleSubmit}>
=======
      <form className="inputFields">

>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
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

<<<<<<< HEAD
        <button>Submit</button>
      </form>
=======
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
            type="button"
            placeholder="Great"
            name="Great"
            onClick={() => setCondition('Great')}
          >Great</button>

          <button
            type="button"
            placeholder="Acceptable"
            name="Acceptable"
            onClick={() => setCondition('Acceptable')}
          >Acceptable</button>

          <button
            type="button"
            placeholder="Bad"
            name="Bad"
            onClick={() => setCondition('Bad')}
          >Bad</button>

        </div>




        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>


>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
    </div>
  );
};

export default EditItemPage;
