import React from "react"
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts"
// Include the fusioncharts library
import FusionCharts from "fusioncharts"
// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts"
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy"
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: "doughnut2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Stars Per Language",
                theme: "candy",
                decimals: 0,
                showPercentValues: 0
            },
            data
        }
    }

    return (<ReactFC {...chartConfigs} />)
}
export default ChartComponent
