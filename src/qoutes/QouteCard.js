import React, { useEffect } from "react";
import { useState } from "react";
import { getQoutes } from "./QuoteManager";
import "./Qoute.css"

export const Qoute = () => {
    const [qoute, ChangeQoute] = useState([]);

    const getSingleQoute = () => {
        return getQoutes().then( taco =>{
            const random = Math.floor(Math.random() * taco.length)
            ChangeQoute(taco[random]);
        })

    }

    useEffect(() => {
        getSingleQoute();
      }, []);

      const newButton = () => {
          getSingleQoute();
      }

      return (
        <div className="qoutes">
        <section className="qoute">
            <p className="qoute_Text">{qoute.text}</p>
            <h4 className="qoute_author"> - {qoute.author}</h4>
        </section>
        <button onClick={(newButton)}>New Quote</button>
        </div>
        
      )
   
}
