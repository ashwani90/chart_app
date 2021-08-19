import { Bar } from 'react-chartjs-2';

export const Chart = ({ chartData }) => {
    return (
        <div>
        <Bar
        data={chartData}
        options={{
            plugins: {
                title: {
                    display: true,
                    text: "Cryptocurrency Prices"
                },
                legend: {
                    display: true,
                    position: "bottom"
                }
            }
        }}
        />
        </div>
    );
};

// Completed