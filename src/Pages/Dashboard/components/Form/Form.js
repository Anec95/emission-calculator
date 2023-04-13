import { DataContainer } from "Pages/Dashboard/styledComponents/styledDashboard"
import { motion } from "framer-motion"
import { FormContainer } from "Pages/Dashboard/styledComponents/styledDashboard"
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import RangeCalendar from "./components/RangeCalendar/RangeCalendar";
import CountrySelection from "./components/CountrySelection/CountrySelection"
import ToggleButtons from "./components/ToggleBtn/ToggleBtn";
import Coordinates from "./components/Coordinates/Coordinates";
import InfoContainer from "./components/InfoContainer/InfoContainer";


function Form(props) {
    
    return (
        <FormContainer>
            <DataContainer
                type={"text"}
                as={motion.div}
                whileHover={{
                    scale: 1.1,
                    originX: "50%",
                    backgroundColor: "var(--light-hover)"
                }}
            >                
                <RangeCalendar
                    handleCalendar={props.handleCalendar}
                    dates={props.dates}
                />
                <CountrySelection
                    handleCountry = {props.handleCountry}
                    selectedCountry={props.selectedCountry}
                />
                <Coordinates
                    handleLon={props.handleLon}
                    handleLat={props.handleLat}
                />
                <ToggleButtons
                    handleSearchType={props.handleSearchType}
                    searchType={props.searchType}
                />
            </DataContainer>
            <DataContainer
                as={motion.div}
                whileHover={{
                    scale: 1.1,
                    originX: "50%",
                    backgroundColor: "var(--light-hover)"
                }}
            >
                <InfoContainer
                    searchType={props.searchType}
                />
            </DataContainer>
        </FormContainer>
    )
}

export default Form