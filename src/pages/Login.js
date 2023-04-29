import React, { useState } from "react";
import logo from "../images/logo.png";
import appleicon from "../images/appleicon.png";
import googleIcon from "../images/goggle_icon.png";
import facebookicon from "../images/facebook.png";
import letsinvest from "../images/letsInvest.png";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const icon = showPassword ? <Visibility /> : <VisibilityOff />;
  const inputType = showPassword ? "text" : "password";
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full flex p-5 navbar">
        <img src={logo} alt="Start-Engine" className="w-[90px] h-[35px]" />
      </nav>

      {/* Body */}
      <div className="content-section">
        <div className="left-side">
          <img src={letsinvest} alt="letsInvest" />
        </div>

        <div className="right-side">
          <label className="switch">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleToggle}
            />
            <span className="slider round">
              <span
                className="on"
                style={{ color: isToggled ? "#175c65" : "white" }}
              >
                Log In
              </span>
              <span
                className="off"
                style={{ color: isToggled ? "white" : "#175c65" }}
              >
                Sign Up
              </span>
            </span>
          </label>

          <div className="social-box">
            <div className="social-icon">
              <img src={appleicon} alt="Apple" />
            </div>
            <div className="social-icon">
              <img src={googleIcon} alt="Google" />
            </div>
            <div className="social-icon">
              <img src={facebookicon} alt="Facebook" />
            </div>
          </div>

          <hr></hr>
          <p className="or">OR</p>

          {!isToggled ? (
            // Log In Form
            <form>
              <input
                type="email"
                className="input-box"
                required
                placeholder="Email"
              />

              <div className="flex relative">
                <input
                  type={inputType}
                  className="input-box"
                  required
                  placeholder="Password"
                  password
                />
                <span
                  onClick={handleClickShowPassword}
                  className="visibility-icon"
                >
                  {icon}
                </span>
              </div>

              <button type="submit" className="submit-btn">
                Log In
              </button>

              <p className="forgot-pwd">
                <a href="#">Forgot Password</a>
              </p>
            </form>
          ) : (
            // Sign Up Form
            <form>
              <input
                type="email"
                className="input-box"
                required
                placeholder="Email"
              />

              <div className="flex relative">
                <input
                  type={inputType}
                  className="input-box mb-0"
                  required
                  placeholder="Password"
                  password
                />
                <span
                  onClick={handleClickShowPassword}
                  className="visibility-icon"
                >
                  {icon}
                </span>
              </div>
              <label className="text-xs px-6 mt-[-20px]">
                At least 8 characters, a capital letter, a special character,
                and a number
              </label>

              <input
                type="text"
                className="input-box"
                required
                placeholder="First Name (as appears on ID)"
              />
              <input
                type="text"
                className="input-box"
                required
                placeholder="Last Name (as appears on ID)"
              />
              <div className="referral">
                <input
                  type="text"
                  className="input-box"
                  name="ReferralCode"
                  required
                  placeholder="Optional"
                />
                <label>Referral Code:</label>
              </div>

              <div className="input_checkbox">
                <label>
                  I have read and agree to the Site's{" "}
                  <a
                    href="https://user.startengine.com/images/ElectronicDeliveryConsent.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightGreen font-bold"
                  >
                    electronic delivery notice
                  </a>
                  ,{" "}
                  <a
                    href="https://help.startengine.com/en_us/investor-education-guide-regulation-crowdfunding-r1LkCdCzY"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightGreen font-bold"
                  >
                    educational materials
                  </a>
                  , risks, and{" "}
                  <a
                    href="https://user.startengine.com/images/Compensation_Disclosure_Form.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightGreen font-bold"
                  >
                    compensation disclosure
                  </a>
                  .
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="input_checkbox">
                <label>
                  I would like to receive the StartEngine newsletter and
                  investment opportunities that are relevant to my interests.
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <p className="px-5 text-xs pt-4">
                By signing up you agree with our{" "}
                <a
                  href="https://www.startengine.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightGreen font-bold"
                >
                  Terms and Conditions
                </a>{" "}
                &{" "}
                <a
                  href="https://www.startengine.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightGreen font-bold"
                >
                  Privacy Policy
                </a>
              </p>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Important Message */}

      <hr></hr>
      <div className="importangMsg">
        <p>Important Message</p>
        <p>
          <a
            href="https://www.startengine.com/"
            target="_blank"
            rel="noreferrer"
          >
            www.StartEngine.com
          </a>
          {" "} Is A Website Owned By StartEngine Crowdfunding, Inc. And Operated By
          StartEngine Crowdfunding And Its Wholly Owned-Subsidiary, StartEngine
          Capital, LLC, Located At 700 N San Vicente Blvd., 7th Floor Green
          Building, Los Angeles, CA 90069. StartEngine Crowdfunding Is A Not A
          Broker-Dealer, Funding Portal Or Investment Adviser. StartEngine
          Capital, LLC Is A Funding Portal Registered{" "}
          <Link
            href="/login"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Here
          </Link>{" "}
          With The US Securities And Exchange Commission (SEC) And{" "}
          <Link
            href="/login"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Here
          </Link>{" "}
          As A Member Of The Financial Industry Regulatory Authority (FINRA). By
          Accessing This Site And Any Pages On This Site, You Agree To Be Bound
          By Our{" "}
          <a
          href="https://www.startengine.com/terms"
          target="_blank"
          rel="noreferrer"
        >
          Terms of use
        </a>{" "}
          And{" "}
          <a
          href="https://www.startengine.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
          , As May Be Amended From Time To Time Without Notice Or Liability.
        </p>
        <p>
          Investment Opportunities Posted And Accessible Through The Site Are Of
          Three Types
        </p>
        <p>
          1.Regulation A Offerings (JOBS Act Title IV; Known As Regulation A+),
          Which Are Offered To Non-Accredited And Accredited Investors Alike. No
          Broker-Dealer, Funding Portal Or Investment Adviser Is Involved In
          These Offerings. These Offerings Are Made Through StartEngine
          Crowdfunding, Inc. <br></br>2. Regulation D Offerings (506(C)), Which Are
          Offered Only To Accredited Investors. No Broker-Dealer, Funding
          Portal, Or Investment Adviser Is Involved In These Offerings. These
          Offerings Are Made Through StartEngine Crowdfunding, Inc. <br></br> 3.
          Regulation Crowdfunding Offerings (JOBS Act Title III), Which Are
          Offered To Non-Accredited And Accredited Investors Alike. These
          Offerings Are Made Through StartEngine Capital, LLC. Some Of These
          Offerings Are Open To The General Public, However There Are Important
          Differences And Risks. You Can Learn More In Our{" "}
          <Link
            to="/login"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Learn Section
          </Link>
        </p>
        <p>Canadian Investors</p>
        <p>
          Investment Opportunities Posted And Accessible Through The Site Will
          Not Be Offered To Canadian Resident Investors.
        </p>
        <p>
          Potential Investors Are Strongly Advised To Consult Their Legal, Tax
          And Financial Advisors Before Investing. The Securities Offered On
          This Site Are Not Offered In Jurisdictions Where Public Solicitation
          Of Offerings Are Not Permitted; It Is Solely Your Responsibility To
          Comply With The Laws And Regulations Of Your Country Of Residence.
        </p>
        <p>
          California Investors Only:{" "}
          <a
          href="https://www.startengine.com/ccpa-opt-out"
          target="_blank"
          rel="noreferrer"
        >
          Do Not Sell My Personal Information
        </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
