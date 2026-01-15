import DashboardLayout from "../../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold">Welcome to DataSense</h2>
      <p className="text-gray-600 mt-2">This is your analytics dashboard.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
