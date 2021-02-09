import './Chart.scss';
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { ContextState } from '../Models/ContextState.model';
import { useItemData } from '../Util/DataProvider';
import { createCandleWeek } from '../Util/createCandleWeek.mapper';
import { Day } from '../Models/Day.model';


function generateChartData(input: Day[] | []) {
  const result: unknown[] = [];
  input.forEach((day: Day, index: number) => {
    result.push({ name: `Day ${index + 1}`, current: day.current, open: day.open });
  });
  return result;
}

function Chart() {
  const data: ContextState = useItemData();
  const week = createCandleWeek(data.value);
  const generatedChartData = generateChartData(week);
  
  return (
    <div className="chart-container">
      <ResponsiveContainer width="105%" height="100%">
        <LineChart data={generatedChartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 200]} tickCount={6} />
          <Tooltip />
          <Line type="monotone" dataKey="open" stroke="#6853DF" />
          <Line type="monotone" dataKey="current" stroke="#FF6666" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
