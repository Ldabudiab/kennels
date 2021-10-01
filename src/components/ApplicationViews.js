import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeList} from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}           
            <Route exact path="/animals">
                 <AnimalList />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
              <Route path="/locations">
              <LocationList />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
              <Route path="/customers">
              <CustomerList />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
              <Route path="/employees">
              <EmployeeList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

        </>
    )
}
