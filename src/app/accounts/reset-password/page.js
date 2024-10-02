import ResetPasswordForm from '@/components/User/ResetPassword/ResetPasswordForm';

export const metadata = {
  title: "Reset Password",
};

const ResetPasswordPage = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div
                className="card-header text-white position-relative"
              >
                <h3 className="mb-0 text-center">Reset Password</h3>
              </div>
              <div className="card-body">
                <ResetPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
