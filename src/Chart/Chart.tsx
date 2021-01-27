import './Chart.scss';
import { ResponsiveContainer, BarChart, XAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

function Chart() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ];

  return (
    <div className="chart-container">
      <ResponsiveContainer width="105%" height="100%">
        <BarChart data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <Bar dataKey="pv" fill="#6853DF" />
          <Bar dataKey="uv" fill="#FF6666" />
          <Tooltip />
        </BarChart >
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;