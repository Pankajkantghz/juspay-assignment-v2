import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", current: 12, previous: 8 },
  { name: "Feb", current: 10, previous: 15 },
  { name: "Mar", current: 11, previous: 12 },
  { name: "Apr", current: 15, previous: 10 },
  { name: "May", current: 18, previous: 20 },
  { name: "Jun", current: 20, previous: 22 },
];

export default function RevenueChart() {
  return (
    <div className="w-[662px] h-[318px] min-w-[662px] bg-[#F7F9FB] rounded-xl p-6 flex flex-col gap-4">
      {/* Legend */}
      <div className="flex items-center gap-4 h-[22px]">
        <h3 className="font-semibold text-sm">Revenue</h3>
        <span className="text-xs text-gray-400">|</span>
        <span className="flex items-center gap-2 text-xs text-gray-700">
          <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
          Current Week <strong>$58,211</strong>
        </span>
        <span className="flex items-center gap-2 text-xs text-gray-700">
          <span className="w-2 h-2 bg-blue-300 rounded-full inline-block"></span>
          Previous Week <strong>$68,768</strong>
        </span>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickFormatter={(val) => `${val}M`}
              domain={[0, 30]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip formatter={(val) => `${val}M`} />

            {/* Previous Week (blue line) */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#90CAF9"
              strokeWidth={2.5}
              dot={false}
            />

            {/* Current Week (black solid/dashed) */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={2.5}
              dot={false}
              isAnimationActive={false}
              strokeDasharray="0"
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={2.5}
              dot={false}
              isAnimationActive={false}
              strokeDasharray="5 5"
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}