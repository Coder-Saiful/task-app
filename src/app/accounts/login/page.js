import LoginForm from "@/components/Login/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Login Page",
};

const LoginPage = () => {
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
                <h3 className="mb-0 text-center">Login Here</h3>
              </div>
              <div className="card-body">
                <LoginForm/>
                <div className="mt-3 text-center">
                    <span className="me-1">Don't have an account?</span>
                    <Link href="/accounts/register">Create Account</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
