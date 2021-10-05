import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeList} from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "./location/LocationForm"
import { Login } from "./auth/Login"
import {Register} from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"

export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {

  // const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  // const setAuthUser = (user) => {
  //   sessionStorage.setItem("kennel_customer", JSON.stringify(user))
  //   setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  // }
  

    return (

      

        <>

            <Route exact path="/login">
              {isAuthenticated ? <Home /> : <Redirect to="/login"/>}
            </Route>

            <Route exact path="/animals">
	              {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/locations">
	              {isAuthenticated ? <LocationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/customers">
	              {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/employees">
	              {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
            </Route>

             <Route exact path="/login">
	              <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
	              <Register setAuthUser={setAuthUser}/>
            </Route>

            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            
            {/* Render the animal list when http://localhost:3000/locations */}
              <Route exact path="/locations">
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

            <Route path="/animals/:animalId(\d+)/edit">
               {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" /> } 
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            
            <Route path="/animals/create">
              <AnimalForm />
            </Route>

            <Route path="/locations/create">
              <LocationForm />
            </Route>
            
        </>
    )
}
