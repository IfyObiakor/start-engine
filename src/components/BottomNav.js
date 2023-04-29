import React from "react";
import Overview from "./Overview";
import About from "./About";
import Terms from "./Terms";
import InvestingFAQ from "./InvestingFAQ";
import Footer from "./Footer";
import { Link } from "react-scroll";
import Updates from "./Updates";
import Rewards from "./Rewards";
import Discussion from "./Discussion";
import ImportantMessage from "./ImportantMessage";
import InvestNowBox from "./InvestNowBox";

function BottomNav() {
  return (
    <div>
      <nav className="w-full flex bottom-nav py-2 px-10">
        <ul className="list-none sm:flex hidden justify-start ml-10 items-center flex-1">
          <li>
            <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="Terms"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              to="Updates"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Updates
            </Link>
          </li>
          <li>
            <Link
              to="Rewards"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Rewards
            </Link>
          </li>
          <li>
            <Link
              to="Discussion"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Discussion
            </Link>
          </li>
          <li>
            <Link
              to="InvestingFAQ"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Investing FAQ
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex px-10 justify-between">
        <div>
          {" "}
          <Overview />
          <About />
          <Terms />
          <Updates />
          <Rewards />
          <Discussion />
          <InvestingFAQ />
        </div>
        <div>
          <InvestNowBox />{" "}
        </div>
      </div>

      <Footer />

      <ImportantMessage />
    </div>
  );
}

export default BottomNav;
