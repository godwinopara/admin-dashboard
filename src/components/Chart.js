import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sep",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Oct",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function App() {
  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}

