import React from 'react'
import StatsGroupCard from './StatsGroupCard'
import ProjectionsChart from './ProjectionsChart'
import RevenueChart from './RevenueChart'
import RevenueByLocation from './RevenueByLocation'
import TopSellingProducts from './TopSellingProducts'
import TotalSalesCard from './TotalSalesCard'

const AnalyticsDashboard = () => {
  return (
    <div className="w-[55.75rem] h-[60.625rem] p-4 flex flex-col gap-7">
      
      {/* Row 1 */}
      <div className="flex gap-7">
        <div className="flex-1">
          <StatsGroupCard />
        </div>
        <div className="flex-1">
          <ProjectionsChart />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-7">
        <div className="flex-1">
          <RevenueChart />
        </div>
        <div className="flex-1">
          <RevenueByLocation />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-7">
        <div className="flex-1">
          <TopSellingProducts />
        </div>
        <div className="flex-1">
          <TotalSalesCard />
        </div>
      </div>

    </div>
  )
}

export default AnalyticsDashboard