import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImportantMessage from "../components/ImportantMessage";
import keyIcon from "../images/key-icon.png";
import bulbIcon from "../images/bulb-icon.png";
import homeIcon from "../images/home-icon.png";
import ourTeamImg1 from "../images/Our-team-img_1.png";
import ourTeamImg2 from "../images/Our-team-img_2.png";
import ourTeamImg3 from "../images/Our-team-img_3.png";
import image1 from "../images/left_img_new-1.png";
import ourValuesImg from "../images/values-image_1.png";

function About() {
  return (
    <div>
      <Navbar />

      <div className="about-page-hero">
        <h4>OUR MISSION</h4>
        <h1>HELP ENTREPRENEURS ACHIEVE THEIR DREAMS</h1>
        <button>Browse Openings</button>
      </div>

      <div className="our-values">
        <div className="values-heading">
        <h1>OUR VALUES</h1>
        <img src={ourValuesImg} alt="image" />
        </div>
        <div className="values-content-grid">
          <div>
            <h6>Do the Right Thing</h6>
            <p>
              We protect our reputation and do right by our customers and
              investors.
            </p>
          </div>
          <div>
            <h6>Own the Mission</h6>
            <p>
              We believe in StartEngine’s vision and are passionate about
              helping founders.
            </p>
          </div>
          <div>
            <h6>Stay Curious</h6>
            <p>
              We think outside the box and question the status quo every day.
            </p>
          </div>
          <div>
            <h6>Care About Others</h6>
            <p>
              We show respect to each other & are considerate in how we treat
              others.
            </p>
          </div>
          <div>
            <h6>Be a Team Player</h6>
            <p>We are selfless, collaborative and accountable.</p>
          </div>
          <div>
            <h6>Exceed Expectations</h6>
            <p>We work hard, commit to deadlines, and are never satisfied.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="image-text">
          <div>
            <img src={image1} alt="left-image" />
          </div>
          <p>
            We’re in the business of helping other businesses raise capital from
            their customers, friends, and the adventurous investors in the
            StartEngine community.{" "}
            <span className="text-lightGreen">
              No one’s been doing this longer than we have.
            </span>
          </p>
        </div>
      </div>

      <div className="about-page-cards">
        <h1>WHY BUSINESSES NEED THE CROWD</h1>
        <div className="about-page-grid">
          <div className="about-page-card">
            <div className="card-image">
              <img src={keyIcon} alt="key-icon" />
            </div>
            <h2>ACCESS TO CAPITAL</h2>
            <p>
              There are nearly 6 million businesses in the US that need capital
              to grow. A great idea shouldn’t fail because they can’t raise the
              money to develop into a profitable business.
            </p>
          </div>

          <div className="about-page-card">
            <div className="card-image">
              <img src={homeIcon} alt="home-icon" />
            </div>
            <h2>FINANCE IS OUTDATED</h2>
            <p>
              Existing financing options, such as private equity and venture
              capital, can’t fund all of these businesses. That’s where we come
              in.
            </p>
          </div>

          <div className="about-page-card">
            <div className="card-image">
              <img src={bulbIcon} alt="bulb-icon" />
            </div>
            <h2>DEMOCRATIZING FUNDING</h2>
            <p>
              We believe that any driven entrepreneur with a great idea should
              be able to raise capital. We’ve built a platform where they can
              pitch directly to the crowd.
            </p>
          </div>
        </div>
      </div>

      <div className="our-team">
        <h1>OUR TEAM</h1>
        <div className="team-content">
          <img src={ourTeamImg1} alt="HOWARD-MARKS-Image" />
          <div className="team-info">
            <h2>HOWARD MARKS</h2>
            <h6>StartEngine Co-Founder & CEO</h6>
            <p>
              Before co-founding StartEngine, Howard co-founded Activision and
              was the Chairman of Activision Studios from 1991 until 1997. As a
              former Board Member and Executive Vice-President of video-game
              giant Activision, he and a partner took control in 1991 and turned
              the ailing company into the $37 billion market cap video game
              industry leader, selling millions of games.
            </p>
            <p>
              Howard was also the founder and CEO of Acclaim Games, a publisher
              of online games that was later sold to The Walt Disney Company.
              Howard is the 2015 “Treasure of Los Angeles” recipient, awarded
              for his work to transform Los Angeles into a leading technology
              city, and a member of LA Mayor Eric Garcetti’s technology council.
              He is bilingual and a triple national of the United States, United
              Kingdom, and France.
            </p>
          </div>
        </div>

        <div className="team-content">
          <img src={ourTeamImg2} alt="KEVIN-O'LEARY-Image" />
          <div className="team-info">
            <h2>KEVIN O'LEARY</h2>
            <h6>Strategic Advisor</h6>
            <p>
              Kevin O’Leary is a renowned businessman and investor. He founded
              SoftKey, an educational software company, that he led to a $4B
              acquisition. After the acquisition, Kevin eventually found himself
              on television, quickly becoming a sought-after host and
              personality on a range of shows – including Discovery’s Project
              Earth, CNBC, and ABC’s Shark Tank.
            </p>
            <p>
              Kevin has since launched O’Leary ETFs; O’Leary Fine Wines; and a
              best-selling book series on financial literacy. In 2014, Kevin
              founded O’Leary Financial Group – a group of brands and services
              that share Kevin’s guiding principles of honesty, directness,
              convenience, and above all, great value. Kevin has joined
              StartEngine as a Strategic Advisor. He is a StartEngine
              shareholder and a paid spokesperson to help bring awareness to
              equity crowdfunding and StartEngine’s platform.
            </p>
          </div>
        </div>

        <div className="team-content">
          <img src={ourTeamImg3} alt="RON-MILLER-Image" />
          <div className="team-info">
            <h2>RON MILLER</h2>
            <h6>StartEngine Co-Founder & Chairman of the Board</h6>
            <p>
              Ron Miller is the Chairman of the Board of StartEngine. Ron
              facilitates financial ignition for innovative tech and media
              companies in order to help entrepreneurs achieve the American
              dream. Ron is a four-time Inc. 500/5000 Award recipient and an
              Ernst & Young Entrepreneur of The Year Award Finalist. He has
              visualized, founded, built and sold five companies through
              management buyouts, private equity firms, private investors and
              public markets.
            </p>
            <p>
              Ron founded the San Diego Chapter of the Entrepreneurs
              Organization (EO) and is also a member of WPO/YPO where he has
              served on the executive committee. Ron is active in the LA Mayor’s
              Council on Technology and Innovation, the Advisory Council of USC
              Greif Center for Entrepreneurial Studies and facilitating students
              at UCLA Anderson. He also sits on the board of West Coast Care and
              is active in helping homeless individuals get off the street.
            </p>
          </div>
        </div>

        <button className="openings-btn">Browse Openings</button>
      </div>

      <hr></hr>
      <Footer />
      <ImportantMessage />
    </div>
  );
}

export default About;
