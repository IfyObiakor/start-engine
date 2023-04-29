import React from "react";
import updatesImg1 from "../images/updatesIMG_1.jpeg";
import updatesImg2 from "../images/updatesIMG_2.jpeg";
import updatesImg3 from "../images/updatesIMG_3.jpeg";
import updatesImg4 from "../images/updatesIMG_4.jpeg";
import updatesImg5 from "../images/updatesIMG_5.jpeg";
import updatesImg6 from "../images/updatesIMG_6.png";
import updatesImg7 from "../images/updatesIMG_7.jpeg";
import { Link } from "react-router-dom";

function Updates() {
  return (
    <section id="Updates">
      <div className="Updates-heading">
        <h2> ALL UPDATES</h2>
      </div>

      <div className="updates-card">
        <h4>03.24.23</h4>
        <h2>We've extended our raise! Invest Now!</h2>
        <img src={updatesImg1} alt="Updates-Image" />
        <p>Good News!,</p>
        <p>
          Fanbase has decided to extend our round to $3.33 million dollars and
          let those who want to invest have that opportunity.
        </p>
        <p>
          Go to{" "}
          <Link to="/" className="text-secondary underline">
            startengine.com/fanbase
          </Link>{" "}
          to invest now!
        </p>
        <p>Thank You! 🥳</p>
        <br></br>
        <p>Fanbase</p>
      </div>

      <div className="updates-card">
        <h4>02.14.23</h4>
        <h2>Notice of Material Change in Offering</h2>
        <p className="text-center">
          [The following is an automated notice from the StartEngine team].
        </p>
        <p>
          Hello! Recently, a change was made to the Fanbase offering. Here's an
          excerpt describing the specifics of the change:
        </p>
        <hr></hr>
        <p className="text-center italic">
          Fanbase is increasing their offering max funding goal and extending
          the end date by 60 days
        </p>
        <hr></hr>
        <p>
          When live offerings undergo changes like these on StartEngine, the SEC
          requires that certain investments be reconfirmed. If your investment
          requires reconfirmation, you will be contacted by StartEngine via
          email with further instructions.
        </p>
      </div>

      <div className="updates-card">
        <h4>12.22.22</h4>
        <h2>Notice of Material Change in Offering</h2>
        <p className="text-center">
          [The following is an automated notice from the StartEngine team].
        </p>
        <p>
          Hello! Recently, a change was made to the Fanbase offering. Here's an
          excerpt describing the specifics of the change:
        </p>
        <hr></hr>
        <p className="text-center italic">
          Issuer is extending the campaign end date
        </p>
        <hr></hr>
        <p>
          When live offerings undergo changes like these on StartEngine, the SEC
          requires that certain investments be reconfirmed. If your investment
          requires reconfirmation, you will be contacted by StartEngine via
          email with further instructions.
        </p>
      </div>

      <div className="updates-card">
        <h4>12.19.22</h4>
        <h2>URGENT UPDATE! CORRECT INFORMATION MISSING!</h2>
        <img src={updatesImg2} alt="Updates-Image" />
        <p>
          Greetings to those of you that have invested in this latest round for{" "}
          <strong>Fanbase</strong>! Thank you!
        </p>
        <p>
          The good news is we have reached our goal of{" "}
          <strong>$2.5 Million</strong> and have wait listed dollars as well!
        </p>
        <p>
          The urgent news is that there are there are{" "}
          <strong>
            $111k total in Failed AMLs. (Anti Money Laundering Checks)
          </strong>
        </p>
        <p>
          There are also <strong>$34k in payment errors</strong>. Both of these
          issues can be resolved as long as you provide the correct information
          to StratEngine immediately.
        </p>
        <p>
          If StartEngine cannot get the correct information from you as an
          investor to fix these errors,{" "}
          <strong>
            then your investment will be returned and the wait listed dollars
            will fill your spot on the cap table and you will not be invested in
            Fanbase
          </strong>
          .
        </p>
        <p>
          <strong>
            Contact investor support immediately at this link so you can
            complete the investment process.
          </strong>{" "}
          <a
            href="https://help.startengine.com/contact/contact-us-ByDplTJXF"
            target="_blank"
            rel="noreferrer"
            className="text-secondary underline"
          >
            https://help.startengine.com/contact/contact-us-ByDplTJXF
          </a>
        </p>
        <p>
          We will begin accepting wait listed dollars tomorrow afternoon.{" "}
          <strong>Tuesday, December 20th</strong>
        </p>
        <p>
          <strong>This is very urgent that you respond TODAY.</strong>
        </p>
        <br></br>
        <p>Thank You,</p>
        <br></br>
        <p>Fanbase</p>
      </div>

      <div className="updates-card">
        <h4>12.15.22</h4>
        <h2>* BREAKING NEWS! We've Raised $2,124,000!</h2>
        <img src={updatesImg3} alt="Updates-Image" />
        <p>
          Amazing News! We've just crossed $2,124,000 of committed investment
          for our current campaign.{" "}
        </p>
        <p>
          Thank You to all of our new and returning investors! If you haven't
          invested and would still like to
        </p>
        <p>
          Go to{" "}
          <Link to="/" className="text-secondary underline">
            startengine.com/fanbase
          </Link>{" "}
          to invest now. The minimum to invest is $245.
        </p>
        <p>Seasons Greetings!</p>
        <br></br>
        <p> - Fanbase</p>
      </div>

      <div className="updates-card">
        <h4>12.09.22</h4>
        <h2>OUR GOAL IS IN SIGHT! INVEST NOW!</h2>
        <img src={updatesImg4} alt="Updates-Image" />
        <p>
          This final round is is getting close to closing, with less than
          $650,000 left before we reach out goal. Don't wait til the last minute
          to invest in Fanbase.
        </p>
      </div>

      <div className="updates-card">
        <h4>12.08.22</h4>
        <h2>NEW FEATURE! Pin Links In Audio Rooms!</h2>
        <img src={updatesImg5} alt="Updates-Image" />
        <p>It’s release week on Fanbase!</p>
        <p>
          Our latest update includes the ability to pin links in audio rooms!
          <br></br>
          That with some enhancements to audio camps and other fixes are in this
          latest release.
        </p>
        <p>
          Update to the latest version of Fanbase to start pinning links in
          audio rooms today!
        </p>
        <br></br>
        <p>- Fanbase</p>
      </div>

      <div className="updates-card">
        <h4>12.08.22</h4>
        <h2>Over $1.75 Million raised. THANK YOU! 🥳 INVEST NOW!</h2>
        <p>
          Amazing News! We've reached $1,750,000 in committed investment! Thank
          You!
        </p>
        <p>We're closing in on $2 Million!</p>
        <p>
          Invest Now at{" "}
          <Link to="/" className="text-secondary underline">
            startengine.com/fanbase
          </Link>{" "}
          <br></br> Don't miss this opportunity to invest! The minimum to invest
          is $245.
        </p>
        <br></br>
        <p>- Fanbase</p>
      </div>

      <div className="updates-card">
        <h4>11.25.22</h4>
        <h2>GIVE THE GIFT OF EQUITY! Invest in Fanbase for the Holidays!</h2>
        <img src={updatesImg6} alt="Updates-Image" />
        <p>
          There's no better gift to give than the gift of ownership! For $245
          you can invest in Fanbase! Go now to{" "}
          <Link to="/" className="text-secondary underline">
            startengine.com/fanbase
          </Link>{" "}
          to invest. Happy Holidays!
        </p>
        <br></br>
        <p>Isaac</p>
      </div>

      <div className="updates-card">
        <h4>11.14.22</h4>
        <h2>INVEST NOW! Over $1.3 Million raised in 6 weeks THANK YOU! 🥳</h2>
        <img src={updatesImg7} alt="Updates-Image" />
        <p>Dear Fanbase Community,</p>
        <p>
          We are more than halfway to closing this final round! We've raised
          over $1.3 Million in Committed Investments in 6 weeks!
        </p>
        <p>
          Thank You for joining this powerful group of investors and champions
          for Fanbase. There's so much to be Thankful for this holiday season
          and YOU are a BIG part of that. If you haven't yet invested in Fanbase
          we'd love to have you on the cap table as an investor. This is history
          in the making. On to $2.5 million! 🥳
        </p>
        <br></br>
        <p>Isaac</p>
      </div>

      <button>Show More Updates</button>
    </section>
  );
}

export default Updates;
