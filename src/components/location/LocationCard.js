import React from "react"
import "./Location.css"

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">Nashville Kennels North</h3>
        <div className="animal__adress">200 Main Street</div>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Delete</button>
    </section>
)
