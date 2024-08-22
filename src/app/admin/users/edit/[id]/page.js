import EditUserForm from "@/components/EditUser/EditUserForm";
import { httpAxios } from "@/helper/httpAxios";
import React from "react";

export const generateMetadata = async ({params: {id}}) => {
    try {
        // console.log(await httpAxios.get(`/api/users/${id}`))
        return {title: "a user update"}
    } catch(error) {
        return {title: 'User Info | Edit'}
    }
}

const UserEdit = ({ params: { id } }) => {
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
                <h3 className="mb-0 text-center">Edit Your Profile</h3>
              </div>
              <div className="card-body">
                <EditUserForm id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserEdit;
// present_address: { country: '', city: '', state: '', postcode: '', address: '' },
// permanent_address: { country: '', city: '', state: '', postcode: '', address: '' }