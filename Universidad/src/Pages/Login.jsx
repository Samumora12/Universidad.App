import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className="container">

  {/* Outer Row */}
  <div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="usuarioForm"
                      placeholder="Enter User..."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="contraForm"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btnLogin btn btn-primary btn-user btn-block"
                  >
                    Login
                  </button>
                  <hr />
                  <a href="index.html" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Login with Google
                  </a>
                  <a href="index.html" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                  </a>
                </form>
                <hr />
                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <Link className="small" to={`/Register`}>
                    Create an Account!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
    </div>
  )
}
