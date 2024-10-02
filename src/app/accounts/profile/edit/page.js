import EditProfileForm from "@/components/User/EditProfile/EditProfileForm";
import Link from "next/link";

export const metadata = {
  title: "Profile | Edit",
};

const EditProfilePage = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div
                className="card-header text-white position-relative"
              >
                <h3 className="mb-0 text-center">Edit Your Profile</h3>
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

export default EditProfilePage;
