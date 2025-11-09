'use client';


import withRole from "@/app/components/hoc/withRole";
import SalesChart from "@/app/components/analytics/SalesChart";

function AdminAnalyticsPage() {
    // Demo sales data
    const salesData = [
        { date: '2025-10-01', sales: 1200 },
        { date: '2025-10-02', sales: 2100 },
        { date: '2025-10-03', sales: 1300 },
    ];

    return (
        <div>
            <h2>Sales Analytics</h2>
            <SalesChart data={salesData} />
        </div>
    );
}

export default withRole(AdminAnalyticsPage, ['admin']);
