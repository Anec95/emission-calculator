import { Calendar } from 'primereact/calendar';


function RangeCalendar(props) {
    return(
        <Calendar
            className='calendar'
            value={props.dates}
            onChange={props.handleCalendar}
            selectionMode="range"
            readOnlyInput
            dateFormat="dd/mm/yy"
            placeholder={"Enter your range of date"}
            inputStyle={{
                backgroundColor: "transparent",
                border: "1px solid black",
                marginBottom: "40px",
                height: "40px",
                
            }}
            style={{
                height: "50px",
                width: "100%"
            }}
        />
    )
}

export default RangeCalendar