import { CoordinatesContainer, CoordinatesTextField } from "../../styledComponents/styledForm"

function Coordinates(props) {
  
    return (
        <CoordinatesContainer>
            <CoordinatesTextField
                // helperText="Please enter longitude"
                id="demo-helper-text-aligned"
                label="Longitude"
                color="secondary"
                onChange={props.handleLon}
                value={props.longitude}
                size="small"
            />
            <CoordinatesTextField
                // helperText="Enter a latitude"
                id="demo-helper-text-aligned"
                label="Latitude"
                color="warning"
                onChange={props.handleLat}
                value={props.latitude}
                size="small"
            />
        </CoordinatesContainer>
    )
}

export default Coordinates