export default function LoginForm() {
  return (
    <form className="mt-4 space-y-4">
      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="form-input"
        />
      </div>

      <input type="submit" value="Login" className="btn w-full mt-2" />
    </form>
  );
}
