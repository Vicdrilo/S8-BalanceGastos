import { Chart } from "./chart-components/Chart";
import { ChartSummary } from "./chart-components/ChartSummary";
import "../styles/ShowChart.css";

export function ShowChart() {
  return (
    <div className="show-chart-contianer rounded-2xl mt-4 bg-white h-[350px]">
      <div className="chart-container w-full">
        <Chart />
      </div>
      <div className="chart-footer w-full p-6">
        <ChartSummary />
      </div>
    </div>
  );
}
