import React from "react";
import { useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function updateFormData(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newPlant = {
      ...formData
    }

    addNewPlant(newPlant)

    setFormData({
      name: "",
      image: "",
      price: ""
    })
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={updateFormData} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={updateFormData} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
