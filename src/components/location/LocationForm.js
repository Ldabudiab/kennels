import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css'

export const LocationForm = () => {


	const [location, setLocation] = useState({
		name: "",	
		address: "",
	});

    const history = useHistory();

	
	const handleControlledInputChange = (event) => {
	
		const newLocation = { ...location }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	
		newLocation[event.target.id] = selectedVal
		
		setLocation(newLocation)
	}


	const handleClickSaveLocation = (event) => {
		event.preventDefault() 

        addLocation(location)
        .then(() => history.push("/locations"))

	
	}

	return (
		<form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Location Adress:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location address" value={location.address} />
				</div>
			</fieldset>
		
		
			<button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save location
          </button>
		</form>
	)
};

