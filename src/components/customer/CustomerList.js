import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers } from '../../modules/CustomerManager';

export const CustomerList = () => {
    // The initial state is an empty array
    const [Customers, setCustomers] = useState([]);
  
    const getCustomers= () => {
      // After the data comes back from the API, we
      //  use the setAnimals function to update state
      return getAllCustomers().then(CustomersFromAPI => {
        setCustomers(CustomersFromAPI)
      });
    };
  
    // got the animals from the API on the component's first render
    useEffect(() => {
      getCustomers();
    }, []);
  
    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
      <div className="container-cards">
        {Customers.map(Customer => <CustomerCard key={Customer.id} Customer={Customer}/>)}
      </div>
    );
  };
  