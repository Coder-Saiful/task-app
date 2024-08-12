import SignupForm from "@/components/Signup/SignupForm";
import Link from "next/link";

export const metadata = {
  title: "Create New Account",
};

const RegisterPage = () => {
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
                <h3 className="mb-0 text-center">Create New Account</h3>
              </div>
              <div className="card-body">
                <SignupForm />
                <div className="mt-3 text-center">
        <span className="me-1">Already han an account?</span>
        <Link href="/accounts/login">Login Here</Link>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
