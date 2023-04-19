import { ChartContainer } from "./styledComponents/styledChart"
import { motion } from "framer-motion"
import ChartBox from "./components/ChartBox"
import ChartText from "./components/ChartText"



function ChartLine(props) {
    
    
    return (
        <ChartContainer
            as={motion.div}
            whileHover={{
                scale: 1.1,
                originX: "100%",
                originY: "150%",
                zIndex: 10,
                backgroundColor: "var(--blue-hover)"
            }}
        >
            <ChartText
                searchType={props.searchType}
            />
            <ChartBox
                info={props.info}
            />            
        </ChartContainer>
    )
}

export default ChartLine