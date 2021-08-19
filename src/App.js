import React from "react";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import { ResponsiveBar } from "@nivo/bar";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};




export default function App() {
    const data = [
        {
            day: "Monday",
            degress: 59
        },
        {
            day: "Tuesday",
            degress: 61
        },
        {
            day: "Wednesday",
            degress: 55
        },
        {
            day: "Thursday",
            degress: 78
        },
        {
            day: "Friday",
            degress: 71
        },
        {
            day: "Saturday",
            degress: 56
        },
        {
            day: "Sunday",
            degress: 67
        }
    ];

    const pieData =  [
        {
            id: "java",
            label: "java",
            value: 195,
            color: "hsl(90, 70%, 50%)"
        },
        {
            id: "erlang",
            label: "erlang",
            value: 419,
            color: "hsl(56, 70%, 50%)"
        },
        {
            id: "ruby",
            label: "ruby",
            value: 407,
            color: "hsl(103, 70%, 50%)"
        },
        {
            id: "haskell",
            label: "haskell",
            value: 474,
            color: "hsl(186, 70%, 50%)"
        },
        {
            id: "go",
            label: "go",
            value: 71,
            color: "hsl(104, 70%, 50%)"
        }
    ];
    return (
        <div style={styles}>
            <h1>Nivo basic demo</h1>
            <div style={{ height: "400px" }}>
                <Bar data={data}/>
                <Pie pieData={pieData} />
            </div>
        </div>
        // <ResponsiveBar data={eXdata} keys={["earnings"]} indexBy="quarter" />
        // <div>
        //     <Bar data={data}/>
        //     <Pie pieData={pieData} />
        // </div>

    );
}