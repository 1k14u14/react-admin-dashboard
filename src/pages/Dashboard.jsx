import KPIcard from "../components/KPIcard"
import ChartCard from "../components/ChartCard"
import { revenueData, userData } from "../data/chartData"
import TransactionTable from "../components/TransactionTable"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Overview
      </h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <KPIcard
          title="Total Revenue"
          value="$45,230"
          growth="+12.5%"
        />
        <KPIcard
          title="Active Users"
          value="1,245"
          growth="+8.2%"
        />
        <KPIcard
          title="Conversion Rate"
          value="3.4%"
          growth="-1.1%"
        />
        <KPIcard
          title="Monthly Growth"
          value="18%"
          growth="+4.3%"
        />
      </div>
      {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <ChartCard title="Revenue Overview">
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                />
            </LineChart>
            </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="User Growth">
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#10b981" />
            </BarChart>
            </ResponsiveContainer>
        </ChartCard>
        <TransactionTable />
        </div>
    </div>
  )
}