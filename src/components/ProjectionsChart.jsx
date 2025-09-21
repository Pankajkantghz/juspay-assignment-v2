import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 18 },
  { name: "Feb", value: 24 },
  { name: "Mar", value: 22 },
  { name: "Apr", value: 28 },
  { name: "May", value: 19 },
  { name: "Jun", value: 25 },
];

export default function ProjectionsChart() {
  return (
    <div
      className="rounded-xl shadow flex flex-col gap-4 
                 bg-[#F7F9FB] text-[#1C1C1C] 
                 dark:bg-gray-900 dark:text-gray-100
                 transition-colors duration-300"
      style={{
        width: "432px",
        height: "252px",
        minWidth: "400px",
        padding: "24px",
      }}
    >
      {/* Title */}
      <h3 className="text-[14px] font-semibold leading-[20px]">
        Projections vs Actuals
      </h3>

      {/* Chart Frame */}
      <div className="flex gap-4" style={{ width: "384px", height: "168px" }}>
        {/* Custom Y axis labels */}
        <div className="flex flex-col justify-between text-[12px] leading-[18px] text-[#1C1C1C] dark:text-gray-300">
          {[0, 10, 20, 30].map((v) => (
            <span key={v}>{v}M</span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex flex-col justify-between" style={{ width: "342px", height: "168px" }}>
          {/* Grid + Bars */}
          <div style={{ flex: 1, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={32}>
                {/* Horizontal Grid */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"               // light mode grid
                />

                {/* Bars */}
                <Bar dataKey="value" fill="#60A5FA" radius={[6, 6, 0, 0]} /> 

                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 30]} />

                {/* Tooltip responsive to dark mode */}
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  contentStyle={{
                    backgroundColor: "var(--tooltip-bg, white)",
                    color: "var(--tooltip-text, black)",
                    borderRadius: "6px",
                    fontSize: "12px",
                    border: "none",
                  }}
                  formatter={(value) => [`${value}M`, "Value"]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom labels (X axis) */}
          <div className="flex justify-between text-[12px] text-[#1C1C1C] dark:text-gray-300">
            {data.map((d, i) => (
              <span key={i} className="w-[57px] text-center">
                {d.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}