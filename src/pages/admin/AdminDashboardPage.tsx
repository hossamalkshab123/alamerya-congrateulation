import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Dashboard from '../../components/admin/Dashboard';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <AdminSidebar />
      <div className="md:mr-64 p-6">
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminDashboardPage;