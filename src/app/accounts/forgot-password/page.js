import ForgotPasswordForm from '../../../components/User/ForgotPassword/ForgotPasswordForm';

export const metadata = {
  title: "Forgot Password",
};

const ChangePasswordPage = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div className="card">
              <div
                className="card-header text-white position-relative"
              >
                <h3 className="mb-0 text-center">Forgot Password</h3>
              </div>
              <div className="card-body">
                <ForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordPage;
