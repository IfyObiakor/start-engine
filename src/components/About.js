import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TeamIMG1 from "../images/TeamIMG_1.webp";
import TeamIMG2 from "../images/TeamIMG_2.webp";
import TeamIMG3 from "../images/TeamIMG_3.webp";
import TeamIMG4 from "../images/TeamIMG_4.webp";
import TeamIMG5 from "../images/TeamIMG_5.webp";
import TeamIMG6 from "../images/TeamIMG_6.webp";
import TeamIMG7 from "../images/TeamIMG_7.webp";
import TeamIMG8 from "../images/TeamIMG_8.webp";
import TeamIMG9 from "../images/TeamIMG_9.webp";
import TeamIMG10 from "../images/TeamIMG_10.webp";
import TeamIMG11 from "../images/TeamIMG_11.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function About() {
  return (
    <section id="About">
      <div className="About-heading">
        <h2>ABOUT</h2>
        <div className="About-details">
          <div>
            <h6>HEADQUATERS</h6>
            <p>976 Jefferson St. NW Suite I Atlanta, GA 30318</p>
          </div>
          <div>
            <h6>WEBSITE</h6>
            <a href="https://www.fanbase.app/" target="_blank" rel="noreferrer">
              View Site <OpenInNewIcon />{" "}
            </a>
          </div>
        </div>
        <p>
          Fanbase is a free to download, free to use microcast social media
          platform with subscription capability for every user. Fanbase enables
          anyone to monetize their content charging $4.99 a month per
          subscriber, for exclusive access to photos, videos, audio chat rooms,
          and long-form content. Fanbase also has virtual currency known as
          "Love." That allows users to tip other users half a penny per love.
          Users can give love on any type of content on Fanbase.
        </p>
      </div>

      <hr></hr>

      <div className="Team-members">
        <h2>TEAM</h2>
        <div className="first-row">
          <div className="team-member">
            <img src={TeamIMG1} alt="Team-Image" />
            <h4>Isaac Hayes III</h4>
            <h6>Chief Executive Officer</h6>
            <p>
              Isaac Hayes III is the Founder and Chief Executive Officer of
              Fanbase. Fanbase is a subscription-based social media platform
              that helps any user monetize the content they create.
            </p>
            <p>
              He is a veteran songwriter-producer from Atlanta, Ga., As well as
              President and C.E.O of Isaac Hayes Enterprises, his late father
              Isaac Hayes’ estate. His broad catalog of writing, producing, and
              licensing music for TV and film, his extensive experience in
              social media marketing, and his passion for African American
              entrepreneurship led him to develop Fanbase.
            </p>
            <p>
              As CEO of Fanbase, Isaac is the driving force behind the
              platform's development and future path. In addition to his role as
              CEO, Isaac also runs two other businesses. His primary role is
              with Fanbase. Please refer to the offering materials for further
              details
            </p>
            <a
              href="https://www.linkedin.com/in/isaachayes3/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <div className="team-member">
            <img src={TeamIMG2} alt="Team-Image" />
            <h4>Ramiro Canovas</h4>
            <h6>Chief Technology Officer</h6>
            <p>
              Ramiro Canovas is a seasoned tech professional with over a decade
              of experience. He worked in Dell EMC, a top storage company as the
              Senior Regional Software Specialist and as a partner in MTM
              Agency, a Georgia-based marketing, and advertising agency, prior
              to starting his own development agency, ConsultR.
            </p>
            <p>
              ConsultR empowers organizations to reinvent themselves through
              creativity, technology, and innovation. His company has helped
              businesses like Taco Bell, FITTS, Heineken, and Pet Releaf to
              reach their customers through artfully crafted experiences.
            </p>
            <p>
              In his role as Chief Technology Officer at Fanbase, he handles all
              the technology layers of the platform from development to
              integrations to data analytics. He is a former professional soccer
              player and avid fan.
            </p>
            <a
              href="https://www.linkedin.com/in/ramirocanovas/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className="second-row">
          <div className="team-member">
            <img src={TeamIMG3} alt="Team-Image" />
            <h4>Federico Cardinali</h4>
            <h6>Dev Leader - Part-Time</h6>
            <p>
              Federico is our full-stack guru that manages our API and iOS
              teams. He has more than 12 years of experience in native
              developments and works closely with our CTO to architecture the
              platform and plan technical roadmaps. He loves funko pops and, of
              course, Star Wars. He is currently part-time in Fanbase working
              approximately 30 hours a week and spending the rest of the time
              with ConsultR (part-time)
            </p>
            <a
              href="https://www.linkedin.com/in/heyventrilo/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="team-member">
            <img src={TeamIMG4} alt="Team-Image" />
            <h4>Santiago Nogues</h4>
            <h6>Creative Director - Part-Time</h6>
            <p>
              Santiago is our Creative Jedi that makes sure that our creatives
              lobes are always working. He has worked with brands such as
              Samsung, Toshiba, Jaguar among many others. A musician by heart
              that never stops surprising with his ideas and creative direction
              for Fanbase. He is currently part-time in Fanbase working
              approximately 25 hours a week and spending the rest of the time
              with ConsultR (part-time)
            </p>
            <a
              href="https://www.linkedin.com/in/santiagonogues/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <div className="team-member">
            <img src={TeamIMG5} alt="Team-Image" />
            <h4>Dre Davis</h4>
            <h6>Director / Creator Artist Relations - Part-Time</h6>
            <p>
              Dre Davis is responsible for architecting the celebrity and
              influencer creator culture on Fanbase and brings over 20 years of
              music industry experience and talent management to the position.
              Dre's new duties and responsibilities will include further
              expanding Fanbase’s footprint as the premier creator platform for
              monetized content.
            </p>
            <a
              href="https://www.linkedin.com/in/dredavis/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>

<div className="third-row">
   <div>
   <img src={TeamIMG6} alt="Team-Image" />
        <h4>Maria Giuliana</h4>
        <h6>Director of Audio Community - Part-Time</h6>
        <p>
          Combining her creative visions and passion for developing client
          relations Maria created MariaMaria- a creative communications agency
          providing services to help you find the right words at the right time,
          plan a solid event and navigate your branding with effective
          storytelling crucial to communicating your brand.
        </p>
        <a
          href="https://www.linkedin.com/in/maria-giuliana-b3a257160/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
   </div>

      <div>
      <img src={TeamIMG7} alt="Team-Image" />
        <h4>Julian Bravo</h4>
        <h6>Coordinator - Part-Time</h6>
        <p>
          Julian comes from a very extensive agency background having worked
          with clients such as American Express, Loreal & Telefonica. He is the
          team guru that puts all the resources together for the machine to work
          seamlessly and on time. An innate people person that never fails. He
          is currently part-time in Fanbase working approximately 25 hours a
          week and spending the rest of the time with ConsultR (part-time)
        </p>
        <a
          href="https://www.linkedin.com/in/julianbravo/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>

     <div>
     <img src={TeamIMG8} alt="Team-Image" />
        <h4>Bill Campbell</h4>
        <h6>Music, Growth, and Flickz Development Advisor</h6>
        <p>
          Bill Campbell is a Senior Executive with 30+ years of global expertise
          in Business Development, Operations, Strategic Planning, Business &
          Legal Affairs, and General Management.
        </p>
        <p>
          He has in-depth industry experience in music, media, social, and
          entertainment markets. He previously served as advisor to TikTok and
          ByteDance helping scale and develop those companies.
        </p>
        <a
          href="https://www.linkedin.com/in/billcampbell/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
     </div>
     </div>

     <div className="forth-row">
    <div>
    <img src={TeamIMG9} alt="Team-Image" />
        <h4>GW Wright</h4>
        <h6>Director Sports / Athletics - Part-Time</h6>
        <p>
          As a sports marketing insider, GW Wright is connected from C-suite
          boardrooms to locker rooms all across the nation. GW’s main focus is
          building relationships with sports talent/teams/associations and
          brands to help foster meaningful partnerships that benefit all
          parties.
        </p>
        <a
          href="https://www.linkedin.com/in/gwwright79/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
    </div>

  <div>
  <img src={TeamIMG10} alt="Team-Image" />
        <h4>Suma Thumma</h4>
        <h6>Data / Insights Manager - Part-Time</h6>
        <p>
          Suma has 13+ years of experience working in IT as a Business
          Intelligence Engineering Lead / Sr. Data Warehouse Developer.
        </p>
        <p>
          Experience working with different cloud technologies. Extensive
          experience conducting data analysis and data modeling and building
          dashboards.
        </p>
  </div>

      <div>
      <img src={TeamIMG11} alt="Team-Image" />
        <h4>Arun Valliappan</h4>
        <h6>Data / Insights Manager - Part-Time</h6>
        <p>
          Arun Valliappan is a technology executive and Entrepreneur with over
          20 years of leadership and data architecture experience in
          transforming data and technology into revenue and efficiency gains. He
          has proven experience in setting direction and consulting companies to
          implement their Business Intelligence solutions and Reporting
          strategy.
        </p>
        <p>
          Known for delivery of actionable insights to key leadership and
          institutionalizing a data driven analysis and decision-making culture.
        </p>
        <p>
          Broad range of experience solving business problems for industry
          leaders in internet,retail,media and energy.
        </p>
        <p>
          Specializing in Business Intelligence and Data Warehousing strategy,
          planning, technical architecture, infrastructure & operations,
          analysis & design, development & testing .
        </p>
      </div>
      </div>
      </div>
    </section>
  );
}

export default About;
