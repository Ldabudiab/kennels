


export const GetCurrentDate = () => {

    const myCurrentDate = new Date(Date.now());
    const dateFormat = myCurrentDate.toDateString();

    return <h4 className="date">Todays Date: {dateFormat}</h4>
}



