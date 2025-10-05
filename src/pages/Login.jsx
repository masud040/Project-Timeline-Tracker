import SecureLoginDraw from "../assets/icon/secure_login.svg";
import LoginForm from "../components/shared/authentication/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row h-[90%] md:h-[70%] bg-bg">
      {/* Left Illustration */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-[#fff5f5]">
        <img
          src={SecureLoginDraw}
          alt="Secure login illustration"
          className="max-w-lg w-full"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex justify-center items-center md:px-6 px-0 ">
        <div className="w-full max-w-md card">
          <div className="section-header text-center lg:text-left">
            <h1 className="section-heading">Welcome back!</h1>
            <p className="section-description">
              Enter your credentials to access your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
