import axios from "axios"

// `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json
//     ?country=DE
//     &begin=2019-02-01
//     &end=2019-03-01`

export async function monoxide(searchType, country, firstDate, secondDate, longitude, latitude ) {

    let completeURL = `
        https://api.v2.emissions-api.org/api/v2/${searchType}/average.json?
        country=${country}
        &begin=${firstDate}
        &end=${secondDate}
    `

    let coordinatesResearch = `
        https://api.v2.emissions-api.org/api/v2/${searchType}/average.json?
        &begin=${firstDate}
        &end=${secondDate}
        &point=${longitude}
        &point=${latitude}
        &limit=25
    `
    console.log(completeURL)
    
    let {data, status} = await axios.get(latitude && longitude ? coordinatesResearch : completeURL)

    // let {data, status} = await axios.get(completeURL)

    if (status === 402) {
        throw new Error("")
    }
    
    return data
}
