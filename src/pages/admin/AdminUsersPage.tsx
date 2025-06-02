import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import UserManagement from '../../components/admin/UserManagement';

const AdminUsersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <AdminSidebar />
      <div className="md:mr-64 p-6">
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminUsersPage;