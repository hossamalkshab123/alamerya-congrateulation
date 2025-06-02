import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import CardManagement from '../../components/admin/CardManagement';

const AdminCardsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <AdminSidebar />
      <div className="md:mr-64 p-6">
        <CardManagement />
      </div>
    </div>
  );
};

export default AdminCardsPage;