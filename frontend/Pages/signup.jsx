import React, { useState } from "react";
import "../Components/sign-up.css";

function Signup() {
  const [role, setRole] = useState("vendor"); // Default to vendor

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert(`Signing up as ${role}`);
  };

  return (
    <div className="container-signup">
      <h2 className="signup-title">Create Account</h2>

      {/* Role Selection Buttons */}
      <div className="role-toggle-signup">
        <button
          className={`btn-role-signup ${role === "vendor" ? "active" : ""}`}
          onClick={() => setRole("vendor")}
          type="button"
        >
          Vendor
        </button>
        <button
          className={`btn-role-signup ${role === "supplier" ? "active" : ""}`}
          onClick={() => setRole("supplier")}
          type="button"
        >
          Supplier
        </button>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="form-signup">
        {role === "vendor" && (
          <>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="vendorName">
                Vendor Name
              </label>
              <input
                className="input-signup"
                type="text"
                id="vendorName"
                name="vendorName"
                required
              />
            </div>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="vendorEmail">
                Email
              </label>
              <input
                className="input-signup"
                type="email"
                id="vendorEmail"
                name="vendorEmail"
                required
              />
            </div>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="vendorPassword">
                Password
              </label>
              <input
                className="input-signup"
                type="password"
                id="vendorPassword"
                name="vendorPassword"
                required
              />
            </div>
          </>
        )}

        {role === "supplier" && (
          <>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="supplierName">
                Supplier Name
              </label>
              <input
                className="input-signup"
                type="text"
                id="supplierName"
                name="supplierName"
                required
              />
            </div>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="supplierEmail">
                Email
              </label>
              <input
                className="input-signup"
                type="email"
                id="supplierEmail"
                name="supplierEmail"
                required
              />
            </div>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="supplierPassword">
                Password
              </label>
              <input
                className="input-signup"
                type="password"
                id="supplierPassword"
                name="supplierPassword"
                required
              />
            </div>
            <div className="form-group-signup">
              <label className="label-signup" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="input-signup"
                type="text"
                id="companyName"
                name="companyName"
                required
              />
            </div>
          </>
        )}

        <button className="btn-signup" type="submit">
          Sign Up as {role === "vendor" ? "Vendor" : "Supplier"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
