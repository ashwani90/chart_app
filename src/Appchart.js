import { useState, useEffect } from "react";
import { Chart } from "./components/chart";

function App() {
    useEffect(() => {
    const fetchPrices = async () => {
            const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
            const data = await res.json();
            setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
                {
                    label: "Price in USD",
                    data: data.data.map((crypto) => crypto.priceUsd),
                    backgroundColor: [
                        "#ffbb11",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ]
                }
            ]
            })
        }
        fetchPrices();
    }, []);

    const [chartData, setChartData] = useState({});
  return (
    <div className="App">
        <Chart chartData={chartData} />
    </div>
  );
}

export default App;
