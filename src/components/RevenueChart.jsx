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
    <div
      className="w-[662px] h-[318px] min-w-[662px] rounded-xl p-6 flex flex-col gap-4
                 bg-[#F7F9FB] text-[#1C1C1C]
                 dark:bg-gray-900 dark:text-gray-100
                 transition-colors duration-300"
    >
      {/* Legend */}
      <div className="flex items-center gap-4 h-[22px] text-sm">
        <h3 className="font-semibold">Revenue</h3>
        <span className="text-xs text-gray-400">|</span>

        {/* Current Week */}
        <span className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
          <span className="w-2 h-2 bg-black dark:bg-white rounded-full inline-block"></span>
          Current Week <strong>$58,211</strong>
        </span>

        {/* Previous Week */}
        <span className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
          <span className="w-2 h-2 bg-blue-300 dark:bg-blue-400 rounded-full inline-block"></span>
          Previous Week <strong>$68,768</strong>
        </span>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"       // default light mode gray
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "var(--axistick-color, #1C1C1C)" }}
            />
            <YAxis
              tickFormatter={(val) => `${val}M`}
              domain={[0, 30]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "var(--axistick-color, #1C1C1C)" }}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(val) => `${val}M`}
              contentStyle={{
                backgroundColor: "var(--tooltip-bg, white)",
                color: "var(--tooltip-text, black)",
                borderRadius: "6px",
                border: "none",
                fontSize: "12px",
              }}
            />

            {/* Previous Week (blue line) */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#90CAF9"
              strokeWidth={2.5}
              dot={false}
            />

            {/* Current Week (solid black on light, white in dark) */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="currentColor"
              className="text-black dark:text-white"
              strokeWidth={2.5}
              dot={false}
              isAnimationActive={false}
            />

            {/* Dashed version for current week */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="currentColor"
              className="text-black dark:text-white"
              strokeWidth={2.5}
              dot={false}
              isAnimationActive={false}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}