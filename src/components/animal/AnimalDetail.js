import React, { useState, useEffect } from "react";
import { getAnimalById, deleteAnimal } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { useParams, useHistory } from "react-router";


export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      history.push("/animals")
    );
  };

  const handleBack = () =>{

    history.push("/animals")
  }
  

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          location: animal.location.name,
          customer: animal.customer.name
        });
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location}</div>
      <div className="animal__owner">Customer: {animal.customer}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
        <button onClick={handleBack}>back</button>
    </section>
  );
};

