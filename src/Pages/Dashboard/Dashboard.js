import { BackgroundImg, DashboardMain } from "./styledComponents/styledDashboard"
import backgroundImg from "Assets/img/dashboard_pexels.jpg"
import Form from "./components/Form/Form"
import { useState, useEffect } from "react"
import moment from "moment"
import { monoxide } from "API/API"
import ChartLine from "./components/Chart/Chart"
import { countries } from "Data/dataCountries"
import "./styledComponents/libraryComponents.css"

function Dashboard() {
    const [chartData, setChartData] = useState({
        dates: ["2022-10-01", "2023-04-01"],
        country: {
            name: "Italy",
            code: "IT"
        },
        longitude: "",
        latitude: "",
        searchType: "carbonmonoxide"
    })
    const [dates, setDates] = useState()
    const [info, setInfo] = useState([])

    const handleCountry = (e) => setChartData({
        ...chartData,
        longitude: "",
        latitude: "",
        country: e.target.value
    })
    
    const handleCalendar = (e) => {
        setDates(e.value)
        const currentRange = e.value
        setChartData({
            ...chartData,
                dates: [moment(currentRange[0]).format('YYYY-MM-DD'), moment(currentRange[1]).format('YYYY-MM-DD')]
        })
    }

    const handleLon = (e) => setChartData({
        ...chartData,
        country: countries[0],
        longitude: e.target.value
    })

    const handleLat = (e) => setChartData({
        ...chartData,
        country: countries[0],
        latitude: e.target.value
    })

    console.log(chartData)

    const handleSearchType = (e, newAlignment) => setChartData({...chartData, searchType: newAlignment})

    useEffect(() => {
        async function renderingDataApp() {
            const fetchData = await monoxide(
                chartData.searchType,
                chartData.country,
                chartData.dates[0],
                chartData.dates[1],
                chartData.longitude,
                chartData.latitude
            )
            setInfo(fetchData)
        }
        renderingDataApp() 
    }, [chartData])

    return (
        <DashboardMain>
            <BackgroundImg
                src={backgroundImg}
                alt="background"
            />
            <ChartLine
                info={info}
                searchType={chartData.searchType}
            />
            <Form
                handleCalendar={handleCalendar}
                handleCountry={handleCountry}
                handleSearchType={handleSearchType}
                handleLon={handleLon}
                handleLat={handleLat}
                dates={dates}
                selectedCountry={chartData.country}
                latitude={chartData.latitude}
                longitude={chartData.longitude}
            />
        </DashboardMain>
    )
}

export default Dashboard