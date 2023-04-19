import { FormContainer } from "./styledComponents/styledForm";
import { motion } from "framer-motion"
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


function Form(props) {
    
    return (
        <FormContainer
                type={"text"}
                as={motion.div}
                whileHover={{
                    scale: 1.1,
                    originX: "-50%",
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
                    latitude={props.latitude}
                    longitude={props.longitude}
                />
                <ToggleButtons
                    handleSearchType={props.handleSearchType}
                    searchType={props.searchType}
                />
            </FormContainer>
    )
}

export default Form