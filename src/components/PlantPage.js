import React from "react";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsData => setPlants(plantsData))
  }, [])

  function addNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  function updateSearchText(event) {
    setSearchText(event.target.value)
  }

  const filteredPlants = plants.filter(plant => {
      return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })
  

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search updateSearchText={updateSearchText} searchText={searchText}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
