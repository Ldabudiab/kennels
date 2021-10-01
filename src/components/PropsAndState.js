import React, {useState}  from "react"
import { GetCurrentDate } from "../date/helpers"
import { Qoute } from "../qoutes/QouteCard"
export const PropsAndState = ({ yourName, day }) => {



    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
      //good practice:
      //make a copy of state, modify it, and then setState to the copy
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
    }

    return (

        <>
        <Qoute />
        <h3>Welcome, {yourName} </h3>
        <GetCurrentDate /> 
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click Me</button>
        </>
    )

}