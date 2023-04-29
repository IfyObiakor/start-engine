import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "./Table";

function Terms() {
  return (
    <section id="Terms">
      <div className="Terms-heading">
        <h2>TERMS</h2>
        <h6>Fanbase</h6>
        <h4 className="text-lightGreen font-extrabold text-xl mt-5">
          Overview
        </h4>
        <div className="grid-container1">
          <div>
            <h5>PRICE PER SHARE</h5>
            <h6>US$3.95</h6>
          </div>
          <div>
            <h5>VALUATION</h5>
            <h6>$84.93M</h6>
          </div>
          <div>
            <h5>
              DEADLINE <InfoIcon fontSize="small" />{" "}
            </h5>
            <h6>Jun 28, 2023</h6>
          </div>
          <div>
            <h5>
              AMOUNT RAISED <InfoIcon fontSize="small" />{" "}
            </h5>
            <h6>US$3,215,679.19</h6>
          </div>
        </div>

        <h4 className="text-lightGreen font-extrabold text-xl mt-5">
          Breakdown
        </h4>
        <div className="grid-container2">
          <div>
            <h5>
              MIN INVESTMENT <InfoIcon fontSize="small" />{" "}
            </h5>
            <h6>US$244.90</h6>
          </div>
          <div>
            <h5>OFFERING TYPE</h5>
            <h6>Equity</h6>
          </div>

          <div>
            <h5>
              MAX INVESTMENT <InfoIcon fontSize="small" />{" "}
            </h5>
            <h6>US$3,330,900.70</h6>
          </div>

          <div>
            <h5>ASSET TYPE</h5>
            <h6>Common Stock</h6>
          </div>
          <div>
            <h5>MIN NUMBER OF SHARES OFFERED </h5>
            <h6>2,531</h6>
          </div>
          <div>
            <h5>SHARES OFFERED</h5>
            <h6>Class B Non Voting Common Stock</h6>
          </div>
          <div>
            <h5>MAX NUMBER OF SHARES OFFERED </h5>
            <h6>843,266</h6>
          </div>
        </div>

        <p className="italic text-xs my-5 font-semibold">
          Maximum Number of Shares Offered subject to adjustment for bonus
          shares
        </p>

        <div className="Terms-Info">
          <Accordion sx={{ boxShadow: "none", padding: "2% 3%", background: "#f6fbfb" }}>
            <div className="info">
              <p>SEC Recent Filing</p>
              <a
                href="https://www.sec.gov/cgi-bin/browse-edgar?CIK=0001826213&owner=exclude&action=getcompany&Find=Search"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowForwardIcon fontSize="small" />{" "}
              </a>
            </div>
          </Accordion>

          <Accordion sx={{ boxShadow: "none", padding: "2% 3%", background: "#f6fbfb" }}>
            <div className="info">
              <p className="font-bold">More FAQs</p>
              <a
                href="https://startenginebetadev.s3.amazonaws.com/production/startups/62f712ded2559a32dcdccec3/documents/offering_details/OfferingFanbaseMemo_NEW.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowForwardIcon fontSize="small" />{" "}
              </a>
            </div>
          </Accordion>

          <Accordion sx={{ boxShadow: "none", padding: "2% 3%" , background: "#f6fbfb" }}>
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
              <p>Financials</p>
            </AccordionSummary>
            <AccordionDetails>
              <Table />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: "none", padding: "2% 3%", background: "#f6fbfb" }}>
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
              <p>Risk</p>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                A crowdfunding investment involves risk. You should not invest
                any funds in this offering unless you can afford to lose your
                entire investment. In making an investment decision, investors
                must rely on their own examination of the issuer and the terms
                of the offering, including the merits and risks involved. These
                securities have not been recommended or approved by any federal
                or state securities commission or regulatory authority.
                Furthermore, these authorities have not passed upon the accuracy
                or adequacy of this document. The U.S. Securities and Exchange
                Commission does not pass upon the merits of any securities
                offered or the terms of the offering, nor does it pass upon the
                accuracy or completeness of any offering document or literature.
                These securities are offered under an exemption from
                registration; however, the U.S. Securities and Exchange
                Commission has not made an independent determination that these
                securities are exempt from registration.
              </span>
            </AccordionDetails>
          </Accordion>
        </div>

        <p className="italic text-sm my-5">
          *Maximum Number of Shares Offered subject to adjustment for bonus
          shares. See Bonus info below.
        </p>

        <div className="italic text-sm">
          <h4 className="underline text-center font-bold text-sm my-3">
            Investment Incentives and Bonuses*
          </h4>
          <h4 className="font-bold underline my-3">Time-Based:</h4>
          <h4 className="font-bold my-3">Friends and Family Early Birds</h4>
          <p className="my-3">
            Invest within the first 48 hours and receive additional 15% bonus
            shares.
          </p>
          <h4 className="font-bold my-3">Super Early Bird Bonus</h4>
          <p className="my-3">
            Invest within the first week and receive additional 10% bonus
            shares.
          </p>
          <h4 className="font-bold my-3">Early Bird Bonus</h4>
          <p className="my-3">
            Invest within the first two weeks and receive an additional 5% bonus
            shares.
          </p>
          <h4 className="font-bold underline my-3">Amount-Based Perks:</h4>
          <h4 className="font-bold my-3">$400+ | Bronze Tier</h4>
          <p className="my-3">
            Early Access to new Fanbase features on the platform.
          </p>
          <h4 className="font-bold my-3">$1,000+ | Silver Tier</h4>
          <p className="my-3">
            arly access to new Fanbase features on the platform, and 10,000
            loves to use on Fanbase and verified profile badge.
          </p>
          <h4 className="font-bold my-3">$2,500+ | Gold Tier</h4>
          <p className="my-3">
            Early access to new Fanbase features on the platform, 15,000 loves
            to use on Fanbase and a Fanbase T-Shirt and verified profile badge.
          </p>
          <h4 className="font-bold my-3">$5,000+ | Platinum Tier</h4>
          <p className="my-3">
            Early access to new Fanbase features on the platform, 20,000 loves
            to use on Fanbase, a Fanbase T-Shirt and an early investor gold
            verified profile badge.
          </p>
          <h4 className="font-bold my-3">$10,000+ | Diamond Tier</h4>
          <p className="my-3">
            10% bonus shares, early access to new Fanbase features on the
            platform, 30,000 loves to use on Fanbase, a Fanbase T-Shirt, an
            early investor gold verified profile badge, and access to a private
            dinner for Diamond level investors with Founder and Executive Team.{" "}
            <br></br> *Transportation and lodging not included.
          </p>
          <p className="my-3">
            *In order to receive perks from an investment, one must submit a
            single investment in the same offering that meets the minimum perk
            requirement. Bonus shares from perks will not be granted if an
            investor submits multiple investments that, when combined, meet the
            perk requirement. All perks occur when the offering is completed.
          </p>
          <h4 className="font-bold my-3">Loyalty Bonus | 5% Bonus Shares</h4>
          <p className="my-3">
            As you have previously invested in Fanbase you are eligible for
            additional bonus shares.
          </p>

          <h4 className="underline text-center font-bold my-3">
            The 10% Bonus for StartEngine Shareholders
          </h4>
          <p className="my-3">
            Fanbase Social Media, Inc. will offer 10% additional bonus shares
            for all investments that are committed by investors that are
            eligible for the StartEngine Crowdfunding Inc. OWNer's bonus.
          </p>
          <p className="my-3">
            This means eligible StartEngine shareholders will receive a 10%
            bonus for any shares they purchase in this offering. For example, if
            you buy 100 shares of Class B Non-Voting Common Stock at $3.95 /
            share, you will receive 110 shares of Class B Non-Voting Common
            Stock, meaning you'll own 110 shares for $3.95. Fractional shares
            will not be distributed and share bonuses will be determined by
            rounding down to the nearest whole share.
          </p>
          <p className="my-3">
            This 10% Bonus is only valid during the investors eligibility
            period. Investors eligible for this bonus will also have priority if
            they are on a waitlist to invest and the company surpasses its
            maximum funding goal. They will have the first opportunity to invest
            should room in the offering become available if prior investments
            are canceled or fail.
          </p>
          <p className="my-3">
            Investors will receive the highest single bonus they are eligible
            for among the bonuses based on the amount invested and time of
            offering elapsed (if any). Eligible investors will also receive the
            Owner’s Bonus and the Loyalty Bonus in addition to the
            aforementioned bonus.
          </p>
          <p className="my-3">
            Irregular Use of Proceeds <br></br> The Company might incur
            Irregular Use of Proceeds that may include but are not limited to
            the following over $10,000: Vendor payments. Salary payments made to
            one’s self, a friend or relative. Any expense labeled “Travel and
            Entertainment”.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Terms;
