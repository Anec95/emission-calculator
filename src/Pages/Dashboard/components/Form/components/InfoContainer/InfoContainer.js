import { Info } from "Pages/Dashboard/styledComponents/styledDashboard"


function InfoContainer(props) {

    return (
        <>
            {props.searchType === "methane" &&
                <Info>
                    Dry-air mixing ratio of methane for cloud-free observations with a spatial
                    resolution of 7x7km2 observed at about 13:30 local solar time from spectra
                    measured by TROPOMI
                </Info>
            }
            {props.searchType === "carbonmonoxide" &&
                <Info>
                    Atmospheric content of carbon monoxide in `mol m¯²`
                </Info>
            }
            {props.searchType === "ozone" &&
                <Info>
                    Atmospheric content of ozone in `mol m¯²`
                </Info>
            }
            {props.searchType === "nitrogendioxide" &&
                <Info>
                    Nitrogen dioxide tropospheric column with a spatial resolution of 7x3.5km2
                    observed at about 13:30 local solar time from spectra measured by TROPOMI
                </Info>
            }
        </>
    )
}

export default InfoContainer