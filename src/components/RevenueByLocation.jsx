import WorldMap from "../assets/maps/worldmap.svg";

export default function RevenueByLocation() {
  const locations = [
    { city: "New York", revenue: 72000 },
    { city: "San Francisco", revenue: 39000 },
    { city: "Sydney", revenue: 25000 },
    { city: "Singapore", revenue: 61000 },
  ];

  const scaleMax = 100000;

  return (
    <div
      className="rounded-2xl shadow p-6 flex flex-col gap-4 
                 w-[202px] min-w-[200px] max-w-[272px] h-[318px]
                 bg-white text-gray-900
                 dark:bg-gray-900 dark:text-gray-100
                 transition-colors duration-300"
    >
      {/* Title */}
      <h3 className="font-semibold text-sm">Revenue by Location</h3>

      {/* World Map */}
      <div className="relative h-[120px] w-full flex items-center justify-center">
        <img
          src={WorldMap}
          alt="World Map"
          className="w-full h-full object-contain 
                     invert-0 dark:invert" 
          // 🔥 in dark mode make world map invert so it shows clearly
        />
      </div>

      {/* Revenue rows */}
      <div className="flex flex-col gap-3 w-full">
        {locations.map((loc) => {
          const widthPercent = Math.min((loc.revenue / scaleMax) * 100, 100);
          return (
            <div key={loc.city} className="flex flex-col gap-1">
              {/* Labels */}
              <div className="flex justify-between text-xs font-medium text-gray-700 dark:text-gray-300">
                <span>{loc.city}</span>
                <span>{(loc.revenue / 1000).toFixed(0)}K</span>
              </div>

              {/* Progress bar */}
              <div className="relative w-full h-[3px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#60A5FA] dark:bg-blue-400 rounded-full"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
