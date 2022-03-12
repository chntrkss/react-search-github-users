import React from "react"
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts"
// Include the fusioncharts library
import FusionCharts from "fusioncharts"
// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts"
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: "bar3d",
        width: "400",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Countries With Most Oil Reserves [2017-18]",
                subCaption: "In MMbbl = One Million barrels",
                xAxisName: "Country",
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "K",
                theme: "fusion"
            },
            data
        }
    }

    return (<ReactFC {...chartConfigs} />)
}
export default ChartComponent
