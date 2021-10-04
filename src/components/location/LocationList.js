import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager';
import { useHistory } from 'react-router';


export const LocationList = () => {
    // The initial state is an empty array
    const [Locations, setLocations] = useState([]);
  
    const history = useHistory();

    const getLocations= () => {
      // After the data comes back from the API, we
      //  use the setLocations function to update state
      return getAllLocations().then(locationsFromAPI => {
        setLocations(locationsFromAPI)
      });
    };

    const handleDeleteLocation = id => {
      deleteLocation(id)
      .then(() => getAllLocations().then(setLocations));
  };
  
  
    // got the Locations from the API on the component's first render
    useEffect(() => {
      getLocations();
    }, []);
  
    // Finally we use .map() to "loop over" the Locations array to show a list of Location cards
    return (
      <>
      <section className="section-content">
      <button type="button"
          className="btn"
            onClick={() => {history.push("/locations/create")}}>
            Admit Location
        </button>
      </section>

      <div className="container-cards">
        {Locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation}/>)}
      </div>
      </>
    );
  };