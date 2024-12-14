/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SignInCSS/SignInComponent.css";

const SignInComponent = () => {
  return (
    <div id="site-content" className="page-about">
      <main className="primary-content inner" role="main">
        <article className="page-box-shadow" role="article">
          <div className="grid-section">
            <div className="container">
              <div className="row1">
                <div className="col">
                  <div className="rich-text">
                    <a rel="noopener noreferrer" href="/login" target="_blank">
                      <img
                        src="/consultantlogin-02.png"
                        alt="Kforce Consultant Login"
                        className="responsive-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="intro-section">
            <div className="container">
              <h1 className="text-center">
                Kforce <em>On Assignment Portal</em> Now Available
              </h1>
              <p>
                The portal was designed with you in mind and highlights four
                main areas where you can conveniently find the information you
                need.
              </p>
            </div>
          </section>
          <div className="container">
            <div className="row2">
              <div className="col">
                <img
                  src="/consultantlogin-04.png"
                  alt="Consultant Benefits"
                  className="responsive-img"
                />
              </div>
            </div>
          </div>
          <section className="login-instructions">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="/signinrow2.jpg"
                    alt=""
                    className="responsive-img"
                  />
                </div>
                <div className="col-md-8">
                  <h2>Login Instructions</h2>
                  <p>
                    1. Go to{" "}
                    <a
                      rel="noopener noreferrer"
                      href="/login"
                      target="_blank"
                      title="Login"
                    >
                      www.kforcegreatstart.estaff365.com
                    </a>
                  </p>
                  <br />

                  <p>2. Click "Forgot Password?"</p>
                  <br />
                  <p> 3. Enter your email and click "Reset Password".</p>
                  <br />
                  <p>
                    {" "}
                    4. Check your email for a password reset email and follow
                    the instructions.
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="/login"
                    target="_blank"
                    className="btn"
                  >
                    Log In Today
                  </a>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container text-center">
              <p>
                Questions about the log in process? Contact the Customer
                Solutions Center at 888.435.7957.
              </p>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default SignInComponent;
