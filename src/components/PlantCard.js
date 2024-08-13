import React, { useState } from "react";

function PlantCard({plant}) {
  
  const [displayStockStatus, setStockStatus] = useState(true)

  function toggleStockStatus() {
    setStockStatus(displayStockStatus => !displayStockStatus)
  }
  
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {displayStockStatus ? (
        <button onClick={toggleStockStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStockStatus}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
