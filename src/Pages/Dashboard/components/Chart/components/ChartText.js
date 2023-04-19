import { ChartInfo, ChartTitle, ChartParagraph } from "../styledComponents/styledChart"


function ChartText(props) {
    

    return (
        <ChartInfo>
            <ChartTitle>
                The data shown, are calculated based on {props.searchType} emission.               
            </ChartTitle>
            <ChartParagraph>
            {
                props.searchType === "methane" ?
                    "Dry-air mixing ratio of methane for cloud-free observations with a spatial resolution of 7x7km2 observed at about 13:30 local solar time from spectra measured by TROPOMI" :
                props.searchType === "carbonmonoxide" ?
                    "Atmospheric content of carbon monoxide in `mol m¯²`" :
                props.searchType === "ozone" ?
                    "Atmospheric content of ozone in `mol m¯²`" :
                props.searchType === "nitrogendioxide" ?
                    "Nitrogen dioxide tropospheric column with a spatial resolution of 7x3.5km2 observed at about 13:30 local solar time from spectra measured by TROPOMI" :
                    ""
            }
            </ChartParagraph>
        </ChartInfo>
    )
}

export default ChartText