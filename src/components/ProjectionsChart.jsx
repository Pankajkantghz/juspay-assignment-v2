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
      className="rounded-xl shadow flex flex-col gap-4"
      style={{
        width: "432px",
        height: "252px",
        minWidth: "400px",
        padding: "24px",
        backgroundColor: "#F7F9FB",
      }}
    >
      {/* Title (Text) */}
      <h3
        style={{
          width: "384px",
          height: "20px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          color: "#1C1C1C",
        }}
      >
        Projections vs Actuals
      </h3>

      {/* Chart Frame */}
      <div
        className="flex"
        style={{
          width: "384px",
          height: "168px",
          gap: "16px",
          flexDirection: "row",
        }}
      >
        {/* Left Text (Y Axis labels) */}
        <div
          className="flex flex-col justify-between"
          style={{
            width: "26px",
            height: "168px",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            lineHeight: "18px",
            color: "#1C1C1C",
            textAlign: "right",
          }}
        >
          {[0, 10, 20, 30].map((v) => (
            <span key={v}>{v}M</span>
          ))}
        </div>

        {/* Chart Area (grid lines + vertical bars + bottom text) */}
        <div
          className="flex flex-col justify-between"
          style={{ width: "342px", height: "168px" }}
        >
          {/* Grid + Bars */}
          <div style={{ flex: 1, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={32}>
                {/* Line (horizontal grid) */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                {/* Vertical Bar (Bars) */}
                <Bar dataKey="value" fill="#A8C5DA" radius={[6, 6, 0, 0]} />

                {/* Hidden axes (we render our own text) */}
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 30]} />

                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  wrapperStyle={{
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                  }}
                  formatter={(value) => [`${value}M`, "Value"]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom Text (X Axis labels) */}
          <div
            className="flex justify-between"
            style={{
              width: "342px",
              height: "18px",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              letterSpacing: "0px",
              color: "#1C1C1C",
              textAlign: "center",
            }}
          >
            {data.map((d, i) => (
              <span key={i} style={{ width: "57px" }}>
                {d.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}