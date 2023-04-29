import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rewardicon from "../images/reward_icon.png";
import secureicon from "../images/secure_icon.png";
import investmenticon from "../images/investment_icon.png";

function InvestingFAQ() {
  return (
    <section id="InvestingFAQ">
      <div className="InvestingFAQ-heading">
        <h2>HOW INVESTING WORKS</h2>
        <p className="italic text-secondary font-bold">
          Cancel anytime before 48 hours before a rolling close or the offering
          end date.
        </p>
      </div>

      <div className="why-startEngine-card">
        <h2>WHY STARTENGINE?</h2>
        <div className="flex items-center mb-5">
          <img src={rewardicon} alt="rewards" />
          <div className="mx-5">
            <h4>REWARDS</h4>
            <p>
              We want you to succeed and get the most out of your money by
              offering rewards and memberships!
            </p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <img src={secureicon} alt="secure" />
          <div className="mx-5">
            <h4>SECURE</h4>
            <p>Your info is your info. We take pride in keeping it that way!</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <img src={investmenticon} alt="investment" />
          <div className="mx-5">
            <h4>DIVERSE INVESTMENTS</h4>
            <p>Invest in over 200 start-ups and collectibles!</p>
          </div>
        </div>
      </div>

      <div>
        <Accordion sx={{ boxShadow: "none", padding: "1% 3%", background: "#f6fbfb" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "rgb(227, 225, 225)",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-bold">How much can I invest?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="mb-4">
              With Regulation A+, a non-accredited investor can only invest a
              maximum of 10% of their annual income or 10% of their net worth
              per year, whichever is greater. There are no restrictions for
              accredited investors.
            </p>
            <p>
              With Regulation Crowdfunding, non-accredited investors with an
              annual income or net worth less than $124,000, are limited to
              invest a maximum of 5% of the greater of those two amounts. For
              those with an annual income and net worth greater than $124,000,
              he/she is limited to investing 10% of the greater of the two
              amounts.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", padding: "1% 3%", background: "#f6fbfb" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "rgb(227, 225, 225)",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-bold">When will i receive my shares?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="mb-4">
              At the close of an offering, all investors whose funds have
              “cleared” by this time will be included in the disbursement. At
              this time, each investor will receive an email from StartEngine
              with their Countersigned Subscription Agreement, which will serve
              as their proof of purchase moving forward.
            </p>
            <p>
              Please keep in mind that a company can conduct a series of
              “closes” or withdrawals of funds throughout the duration of the
              campaign. If you are included in that withdrawal period, you will
              be emailed your countersigned subscription agreement and proof of
              purchase immediately following that withdrawal.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", padding: "1% 3%", background: "#f6fbfb" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "rgb(227, 225, 225)",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-bold">
              What will the return of my investment be?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              StartEngine assists companies in raising capital, and once the
              offering is closed, we are no longer involved with whether the
              company chooses to list shares on a secondary market, or what
              occurs thereafter. Therefore, StartEngine has no control or
              insight into your investment after the close of the live offering.
              In addition, we are not permitted to provide financial advice. You
              may want to contact a financial professional to discuss possible
              investment outcomes.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", padding: "1% 3%", background: "#f6fbfb" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "rgb(227, 225, 225)",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-bold">Can i cancel my investment?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="mb-4">
              For Regulation Crowdfunding, investors are able to cancel their
              investment at any point throughout the campaign up until 48 hours
              before the closing of the offering. Note: If the company does a
              rolling close, they will post an update to their current
              investors, giving them the opportunity to cancel during this
              timeframe. If you do not cancel within this 5-day timeframe, your
              funds will be invested in the company, and you will no longer be
              able to cancel the investment. If your funds show as ‘Invested’ on
              your account dashboard, your investment can no longer be canceled.
            </p>
            <p className="mb-4">
              For Regulation A+, StartEngine allows for a four-hour cancelation
              period. Once the four-hour window has passed, it is up to each
              company to set their own cancelation policy. You may find the
              company’s cancelation policy in the company’s offering circular.
            </p>
            <p className="mb-4">
              Once your investment is canceled, there is a 10-day clearing
              period (from the date your investment was submitted). After your
              funds have cleared the bank, you will receive your refund within
              10 business days.
            </p>
            <p>
              Refunds that are made through ACH payments can take up to 10
              business days to clear. Unfortunately, we are at the mercy of the
              bank, but we will do everything we can to get you your refund as
              soon as possible. However, every investment needs to go through
              the clearing process in order to get sent back to the account
              associated with the investment.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", padding: "1% 3%" , background: "#f6fbfb"}}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "rgb(227, 225, 225)",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-bold">
              What is the difference between Regulation Crowdfunding and
              Regulation A+ ?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Both Title III (Regulation Crowdfunding) and Title IV (Reg A+)
              help entrepreneurs crowdfund capital investments from unaccredited
              and accredited investors. The differences between these
              regulations are related to the investor limitations, the differing
              amounts of money companies are permitted to raise, and differing
              disclosure and filing requirements. To learn more about Regulation
              Crowdfunding, click here, and for Regulation A+, click here.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", padding: "1% 3%", background: "#f6fbfb" }}>
        <div className="info">
            <p className="font-bold">More FAQs</p>
            <a
              href="https://www.startengine.com/investor-faq"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowForwardIcon fontSize="small" />{" "}
            </a>
          </div>
        </Accordion>

      
      </div>
    </section>
  );
}

export default InvestingFAQ;
