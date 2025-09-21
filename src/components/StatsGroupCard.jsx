import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import ArrowDownRight from "../assets/icons/arrow-down-right.svg";

// Single Tile Component
function StatTile({ label, value, change, trend, lightColor }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-6 min-w-[200px] 
                  transition-colors duration-300`}
      style={{
        backgroundColor: lightColor, // pastel for light mode
        width: "202px",
        height: "112px",
        borderRadius: "16px",
      }}
    >
      {/* Label */}
      <span className="text-sm font-semibold leading-5 text-[#1C1C1C] dark:text-gray-200">
        {label}
      </span>

      {/* Value + Change */}
      <div className="flex items-center justify-between">
        {/* Value */}
        <span className="text-2xl font-semibold leading-9 text-[#1C1C1C] dark:text-gray-100">
          {value}
        </span>

        {/* Change w/ Arrow */}
        <span className="flex items-center text-sm font-medium text-[#1C1C1C] dark:text-gray-300">
          {change}
          {trend === "up" ? (
            <img src={ArrowUpRight} alt="Upward trend" className="w-4 h-4 ml-1" />
          ) : (
            <img src={ArrowDownRight} alt="Downward trend" className="w-4 h-4 ml-1" />
          )}
        </span>
      </div>

      {/* Force dark BG override when `dark:` is active */}
      <style jsx>{`
        .dark div[style] {
          background-color: #1e293b !important; /* slate-800 for dark mode */
        }
      `}</style>
    </div>
  );
}

// Dashboard Stats Group
export default function StatsGroupCard() {
  return (
    <div className="w-[432px] h-[252px] grid grid-cols-2 grid-rows-2 gap-7">
      <StatTile
        label="Customers"
        value="3,781"
        change="+11.01%"
        trend="up"
        lightColor="#E3F5FF"
      />
      <StatTile
        label="Orders"
        value="1,219"
        change="-0.03%"
        trend="down"
        lightColor="#F7F9FB"
      />
      <StatTile
        label="Revenue"
        value="$695"
        change="+15.03%"
        trend="up"
        lightColor="#F7F9FB"
      />
      <StatTile
        label="Growth"
        value="30.1%"
        change="+6.08%"
        trend="up"
        lightColor="#E5ECF6"
      />
    </div>
  );
}