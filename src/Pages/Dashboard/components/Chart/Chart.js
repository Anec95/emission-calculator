import { ChartContainer } from "Pages/Dashboard/styledComponents/styledDashboard"
import { VictoryLine, VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryBrushContainer } from "victory"
import { motion } from "framer-motion"
import moment from 'moment';
import { useState, useEffect, useMemo } from "react";



function ChartLine(props) {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [zoomDomain, setZoomDomain] = useState()
    const [selectedDomain, setSelectedDomain] = useState()
    const [chartSize, setChartSize] = useState({
        width: 1400,
        heightBigChart: 300,
        heightSmallChart: 100,
    })


    const database = props.info
    // const chartDates = database.map(data => moment(data.start).format('DD-MM-YY'))

    const chartData = useMemo(() => {
        return database.map(data => {
            return {x: moment(data.start).format('DD-MM-YYYY'), y: data.average}
        })
    }, [database]) 

    const chartX = database.map(data => new Date(data.start))

    function handleZoom(domain) {
        setSelectedDomain(domain);
    }

    function handleBrush(domain) {
        setZoomDomain(domain);
    }
    

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
        

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    useEffect(() => {
        if (windowSize.innerWidth <= 500) {
            setChartSize({
                width: 300,
                heightBigChart: 240,
                heightSmallChart: 80,
            })
        } else if (windowSize.innerWidth > 500 && windowSize.innerWidth <= 1000) {
            setChartSize({
                width: 700,
                heightBigChart: 300,
                heightSmallChart: 100,
            })
        } else {
            setChartSize({
                width: 1400,
                heightBigChart: 300,
                heightSmallChart: 100,
            })
        }
    }, [windowSize])
    

    return (
        <ChartContainer
            as={motion.div}
            whileHover={{
                scale: 1.1,
                originX: "100%",
                zIndex: 10,
                backgroundColor: "var(--blue-hover)"
            }}
        >
            <VictoryChart
                width={chartSize.width}
                height={chartSize.heightBigChart}
                scale={{x: "time", y: "linear"}}
                padding={{left: 100, bottom: 50, right: 30}}
                containerComponent={
                    <VictoryZoomContainer responsive={false}
                        zoomDimension="x"
                        zoomDomain={zoomDomain}
                        onZoomDomainChange={handleZoom}
                    />
                }
            >
            <VictoryAxis
                dependentAxis
                tickFormat={y => Number(y).toFixed(5)}
                fixLabelOverlap
            />
            <VictoryAxis
                tickValues={chartX}
                fixLabelOverlap
            />
            <VictoryLine
                style={{
                    data: {stroke: "tomato"}
                }}
                data={chartData}
            />

            </VictoryChart>

            <VictoryChart
                width={chartSize.width}
                height={chartSize.heightSmallChart}
                scale={{x: "time"}}
                padding={{top: 0, left: 50, right: 50, bottom: 30}}
                containerComponent={
                    <VictoryBrushContainer responsive={false}
                        brushDimension="x"
                        brushDomain={selectedDomain}
                        onBrushDomainChange={handleBrush}
                    />
                }
            >
                <VictoryAxis
                    tickValues={chartX}
                    fixLabelOverlap
                />
                <VictoryLine
                    style={{
                        data: {stroke: "tomato" }
                    }}
                    data={chartData}
                />
            </VictoryChart>
        </ChartContainer>
    )
}

export default ChartLine