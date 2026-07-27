import React from "react";

function Signup() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6 text-center">
          <img
            src="media/images/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3">Open a free account</h1>

          <p className="text-muted mb-4">
            Start investing and trading with TradeNest.
            No account opening charges.
          </p>

          <form>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Create password"
              />
            </div>

            <button
              className="btn btn-primary btn-lg w-100"
              type="submit"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-4 text-muted">
            Already have an account?{" "}
            <a href="/">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;