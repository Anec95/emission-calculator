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
        longitude: NaN,
        latitude: NaN,
        searchType: "carbonmonoxide"
    })
    const [info, setInfo] = useState([])
    const [dates, setDates] = useState([]);

    const handleCountry = (e) => setChartData({
        ...chartData,
        longitude: NaN,
        latitude: NaN,
        country: e.target.value
    })
    
    const handleCalendar = (e) => setDates(e.value)
    useEffect(() => {
        setChartData({
            ...chartData,
            dates: [moment(dates[0]).format('YYYY-MM-DD'), moment(dates[1]).format('YYYY-MM-DD')]
        })
    }, [dates, chartData])

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

    const handleSearchType = (e, newAlignment) => setChartData({...chartData, searchType: newAlignment})

    useEffect(() => {
        async function renderingDataApp() {
            const fetchData = await monoxide(chartData.searchType, chartData.country, chartData.dates[0], chartData.dates[1])
            setInfo(fetchData)   
        }
        renderingDataApp() 
    }, [chartData])

    console.log(chartData.dates)

    return (
        <DashboardMain>
            <BackgroundImg
                src={backgroundImg}
                alt="background"
            />
            <ChartLine
                info={info}
            />
            <Form
                handleCalendar={handleCalendar}
                handleCountry={handleCountry}
                handleSearchType={handleSearchType}
                handleLon={handleLon}
                handleLat={handleLat}
                searchType={chartData.searchType}
                dates={dates}
                selectedCountry={chartData.country}
                // selectedCountry={selectedCountry}
            />
        </DashboardMain>
    )
}

export default Dashboard