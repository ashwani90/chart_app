import React from "react";
import {ResponsivePie} from "@nivo/pie";

const Pie = ({pieData}) => {
    return (
        <ResponsivePie
            data={pieData}
            margin={{top:40,right:80,bottom:80,left:80}}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            border-color={{from:'color', modifiers:[["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{from: "color" }}
            arcLabelsTextColor={{from:'color', modifiers:[["darker", 2]] }}
            />
    );
}
export default Pie;