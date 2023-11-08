import React, { useContext } from "react";
import { DataContext } from "../utils/context.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function Graph(props) {
  const context = useContext(DataContext);

  return (
    <div className="graph">
      <LineChart width={850} height={200} data={context.conditions}>
        <Line type="monotone" dataKey={props.condition} stroke="red" />
        <CartesianGrid stroke="black" />
        <XAxis dataKey="time" />
        <YAxis dataKey={props.condition} />
        <Tooltip separator=" ▶" />
        <Legend
          width={100}
          wrapperStyle={{
            top: 5,
            right: 5,
            backgroundColor: "#f5f5f5",
            border: "1px solid black",
            borderRadius: 1,
            lineHeight: "40px",
          }}
        />
      </LineChart>
    </div>
  );
}

export default Graph;
