import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import ArrowDownRight from "../assets/icons/arrow-down-right.svg";

function StatTile({ label, value, change, trend, color }) {
  return (
    <div
      className="flex flex-col justify-between rounded-xl p-6 min-w-[200px]"
      style={{
        backgroundColor: color,
        width: "202px",
        height: "112px",
        borderRadius: "16px",
      }}
    >
      {/* Content 1: Label */}
      <span
        className="text-sm font-semibold leading-5"
        style={{ color: "#1C1C1C", width: "154px", height: "20px" }}
      >
        {label}
      </span>

      {/* Content 2: Value + Change with Icon */}
      <div
        className="flex items-center justify-between"
        style={{ width: "154px", height: "36px" }}
      >
        {/* Left → Value */}
        <span
          className="text-2xl font-semibold leading-9"
          style={{ color: "#1C1C1C", width: "62px", height: "36px" }}
        >
          {value}
        </span>

        {/* Right → Change + Arrow */}
        <span
          className={`flex items-center text-sm font-medium 
          }`}
          style={{ height: "18px" }}
        >
          {change}
          {trend === "up" ? (
            <img
              src={ArrowUpRight}
              alt="Upward trend"
              className="w-4 h-4 ml-1"
              style={{ width: "16px", height: "16px" }}
            />
          ) : (
            <img
              src={ArrowDownRight}
              alt="Downward trend"
              className="w-4 h-4 ml-1"
              style={{ width: "16px", height: "16px" }}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default function StatsGroupCard() {
  return (
    <div className="w-[432px] h-[252px] grid grid-cols-2 grid-rows-2 gap-7">
      <StatTile
        label="Customers"
        value="3,781"
        change="+11.01%"
        trend="up"
        color="#E3F5FF"
      />
      <StatTile
        label="Orders"
        value="1,219"
        change="-0.03%"
        trend="down"
        color="#F7F9FB"
      />
      <StatTile
        label="Revenue"
        value="$695"
        change="+15.03%"
        trend="up"
        color="#F7F9FB"
      />
      <StatTile
        label="Growth"
        value="30.1%"
        change="+6.08%"
        trend="up"
        color="#E5ECF6"
      />
    </div>
  );
}