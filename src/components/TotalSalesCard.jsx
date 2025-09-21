import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
  Sector
} from "recharts";
import { useState } from "react";

// Data
const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },    // Black
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" }, // Mint
  { name: "Sponsored", value: 154.02, color: "#95A4FC" }, // Indigo
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },     // Blue
];

const total = data.reduce((acc, cur) => acc + cur.value, 0);

// Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    const percent = ((val / total) * 100).toFixed(1);
    return (
      <div className="backdrop-blur-md rounded-lg px-3 py-1 
                      bg-black/80 text-white text-xs shadow">
        {percent}%
      </div>
    );
  }
  return null;
};

// Custom Arc (rounded pie slices)
const CustomArc = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      cornerRadius={100}
    />
  );
};

export default function TotalSalesCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const displayValue =
    hoveredIndex !== null
      ? ((data[hoveredIndex].value / total) * 100).toFixed(1)
      : ((data[0].value / total) * 100).toFixed(1);

  return (
    <div
      className="w-[202px] min-w-[200px] max-w-[272px] h-[344px] 
                 rounded-[16px] p-6 flex flex-col gap-4
                 bg-[#F7F9FB] text-[#1C1C1C] 
                 dark:bg-gray-900 dark:text-gray-100 
                 transition-colors duration-300"
    >
      {/* Title */}
      <h3 className="text-[14px] font-semibold leading-[20px]">
        Total Sales
      </h3>

      {/* Donut Chart */}
      <div className="w-[120px] h-[120px] mx-auto flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={12}
              onMouseLeave={() => setHoveredIndex(null)}
              shape={<CustomArc />}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  onMouseEnter={() => setHoveredIndex(index)}
                />
              ))}

              {/* Center label flips color */}
              <Label
                value={`${displayValue}%`}
                position="center"
                className="text-[12px] font-semibold 
                           fill-[#1C1C1C] dark:fill-gray-100"
              />
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 w-[154px] mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-[154px] h-[22px]"
          >
            <span className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[12px] leading-[18px] 
                               text-[#1C1C1C] dark:text-gray-200">
                {item.name}
              </span>
            </span>
            <span className="text-[12px] leading-[18px] 
                             text-[#1C1C1C] dark:text-gray-200">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}