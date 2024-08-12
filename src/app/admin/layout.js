import AdminNavbar from '@/components/Includes/AdminNavbar';
import React from 'react';

export const metadata = {
    title: "Admin Panel"
}

const DashboardLayout = ({children}) => {
    return (
        <section className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-xl-2 px-0'>
                    <AdminNavbar />
                </div>
                <div className='col-lg-9 col-xl-10'>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;