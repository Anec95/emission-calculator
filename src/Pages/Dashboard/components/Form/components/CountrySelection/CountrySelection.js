import { Dropdown } from 'primereact/dropdown';
import { countries } from 'Data/dataCountries';


function CountrySelection(props) {
    return(
        <Dropdown
            value={props.selectedCountry}
            onChange={props.handleCountry}
            options={countries} optionLabel="name" 
            placeholder="Select a Country"
            className="w-full md:w-14rem"
            style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                marginBottom: "10px",
                width: "100%"
            }}
        />
    )
}

export default CountrySelection