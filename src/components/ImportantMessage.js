import React from "react";
import { Link } from "react-router-dom";

function ImportantMessage() {
  return (
    <div className="importangMsg">
      <p className="font-extrabold">Important Message</p>
      <p>
        IN MAKING AN INVESTMENT DECISION, INVESTORS MUST RELY ON THEIR OWN
        EXAMINATION OF THE ISSUER AND THE TERMS OF THE OFFERING, INCLUDING THE
        MERITS AND RISKS INVOLVED. INVESTMENTS ON STARTENGINE ARE SPECULATIVE,
        ILLIQUID, AND INVOLVE A HIGH DEGREE OF RISK, INCLUDING THE POSSIBLE LOSS
        OF YOUR ENTIRE INVESTMENT.
      </p>
      <p>
        <a href="https://www.startengine.com/" target="_blank" rel="noreferrer">
          www.StartEngine.com
        </a>{" "}
        Is A Website owned and operated by StartEngine Crowdfunding, Inc.
        (“StartEngine”), which is neither a registered broker-dealer, investment
        advisor nor funding portal.
      </p>
      <p>
        Unless indicated otherwise with respect to a particular issuer, all
        securities-related activity is conducted by regulated affiliates of
        StartEngine: StartEngine Capital, LLC, a funding portal registered{" "}
        <a
          href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&filenum=7-7&type=CFPORTAL&owner=include&count=40"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        {" "} with the US Securities and Exchange Commission (SEC) and{" "}
        <a
          href="https://www.finra.org/about/firms-we-regulate/funding-portals-we-regulate"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        {" "}as a member of the Financial Industry Regulatory Authority (FINRA), or
        StartEngine Primary, LLC, a broker-dealer registered with the SEC and
        <a href="https://www.finra.org/#/" target="_blank" rel="noreferrer">
        {" "} FINRA
        </a>{" "}
        / {" "}
        <a href="https://www.sipc.org/" target="_blank" rel="noreferrer">
          SIPC.
        </a>
        You can review the background of our broker-dealer and our investment
        professionals on FINRA’s BrokerCheck
        <a
          href="https://brokercheck.finra.org/firm/summary/291773"
          target="_blank"
          rel="noreferrer"
        >
         {" "} here
        </a>.
        StartEngine Secondary is an alternative trading system regulated by the
        SEC and operated by StartEngine Primary, LLC, a broker dealer registered
        with the SEC and FINRA.
      </p>
      <p>
        Investment Opportunities Posted And Accessible Through The Site Are Of
        Three Types
      </p>
      <p>
        1) Regulation A offerings (JOBS Act Title IV; known as Regulation A+),
        which are offered to non-accredited and accredited investors alike.
        These offerings are made through StartEngine Primary, LLC (unless
        otherwise indicated).<br></br> 2) Regulation D offerings (Rule 506(c)),
        which are offered only to accredited investors. These offerings are made
        through StartEngine Primary, LLC. <br></br> 3) Regulation Crowdfunding
        offerings (JOBS Act Title III), which are offered to non-accredited and
        accredited investors alike. These offerings are made through StartEngine
        Capital, LLC. Some of these offerings are open to the general public,
        however there are important differences and risks.
      </p>
      <p>
        Any securities offered on this website have not been recommended or
        approved by any federal or state securities commission or regulatory
        authority. StartEngine and its affiliates do not provide any investment
        advice or recommendation and do not provide any legal or tax advice with
        respect to any securities. All securities listed on this site are being
        offered by, and all information included on this site is the
        responsibility of, the applicable issuer of such securities. StartEngine
        does not verify the adequacy, accuracy or completeness of any
        information. Neither StartEngine nor any of its officers, directors,
        agents and employees makes any warranty, express or implied, of any kind
        whatsoever related to the adequacy, accuracy, or completeness of any
        information on this site or the use of information on this site. See
        additional general disclosures{" "}
        <a
          href="https://www.startengine.com/disclaimer"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        By accessing this site and any pages on this site, you agree to be bound
        by our{" "}
        <a
          href="https://www.startengine.com/terms"
          target="_blank"
          rel="noreferrer"
        >
          Terms of use
        </a>{" "}
        and{" "}
        <a
          href="https://www.startengine.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>{" "}
        , as may be amended from time to time without notice or liability.
      </p>
      <p>Canadian Investors</p>
      <p>
        Investment opportunities posted and accessible through the site will not
        be offered to Canadian resident investors.
        <br></br>
        Potential investors are strongly advised to consult their legal, tax and
        financial advisors before investing. The securities offered on this site
        are not offered in jurisdictions where public solicitation for offerings
        is not permitted; it is solely your responsibility to comply with the
        laws and regulations of your country of residence.
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
        (800-317-2200). StartEngine does not sell personal information. For all
        customer inquiries, please write to contact@startengine.com.
      </p>
      <p>
        StartEngine’s Reg A+ offering is made available through StartEngine
        Crowdfunding, Inc. This investment is speculative, illiquid, and
        involves a high degree of risk, including the possible loss of your
        entire investment. For more information about this offering, please view
        StartEngine’s{" "}
        <a
          href="https://www.sec.gov/Archives/edgar/data/1661779/000110465921108692/tm2125737d1_partiiandiii.htm"
          target="_blank"
          rel="noreferrer"
        >
          offering circular
        </a>{" "}
        and{" "}
        <a
          href="https://www.sec.gov/Archives/edgar/data/1661779/000110465921108692/tm2125737d1_partiiandiii.htm#a_002"
          target="_blank"
          rel="noreferrer"
        >
          risks associated with this offering
        </a>
        .
      </p>
    </div>
  );
}

export default ImportantMessage;
