import EditProfileForm from '@/components/EditProfile/EditProfileForm';
import React from 'react';

export const metadata = {
  title: "Saiful's Profile | Edit"
}

const AdminProfileEditPage = () => {
    return (
        <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div
                className="card-header text-white"
                style={{ background: "var(--primaryColor)" }}
              >
                <h3 className="mb-0 text-center">Edit Your Admin Profile</h3>
              </div>
              <div className="card-body">
                <EditProfileForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AdminProfileEditPage;