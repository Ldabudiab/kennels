const qouteURL = "https://type.fit/api/quotes"

export const getQoutes = () => {

    return fetch(`${qouteURL}`)
    .then(res => res.json())
}


