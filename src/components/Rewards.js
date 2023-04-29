import React from "react";
import rewardIcon from "../images/reward-icon.svg"

function Rewards() {
  return (
    <section id="Rewards">
      <div className="reward-banner">
      <img src={rewardIcon} alt="reward-icon" />
      <div>
        <h5>Stack Owner's Bonus & Rewards!</h5>
        <p>Members get an extra 10% shares in addition to rewards below!</p>
      </div>
      </div>
      <div className="Rewards-heading">
        <h2>REWARDS</h2>
        <p>
          Multiple investments in an offering cannot be combined to qualify for
          a larger campaign perk. Get rewarded for investing more into Fanbase.
        </p>
      </div>
      <div className="rewards-grid">
        <div className="rewards-card">
          <h3>US$244</h3>
          <h4>STARTENGINE OWNER'S BONUS</h4>
          <p>
            This offering is eligible for the StartEngine Owner's 10% Bonus
            program. For details on this program, see the Offering Summary
            section below
          </p>
          <div>Select</div>
        </div>
        <div className="rewards-card">
          <h3>US$400</h3>
          <h4>BRONZE TIER</h4>
          <p>Early access to new Fanbase features on the plaform.</p>
          <div>Select</div>
        </div>
        <div className="rewards-card">
          <h3>US$1,000</h3>
          <h4>SILVER TIER</h4>
          <p>
            Early access to new Fanbase features on the plaform, and 10,000
            loves to use on Fanbase verified profile badge.
          </p>
          <div>Select</div>
        </div>
        <div className="rewards-card">
          <h3>US$2,500</h3>
          <h4>GOLD TIER</h4>
          <p>
            Early access to new Fanbase features on the plaform, and 15,000
            loves to use on Fanbase and a Fanbase T-shirt and a verified badge.
          </p>
          <div>Select</div>
        </div>
        <div className="rewards-card">
          <h3>US$5,000</h3>
          <h4>PLATINUM TIER</h4>
          <p>
            Early access to new Fanbase features on the plaform, and 20,000
            loves to use on Fanbase, a Fanbase T-shirt and an early investor
            gold verified badge.
          </p>
          <div>Select</div>
        </div>
        <div className="rewards-card">
          <h3>US$10,000</h3>
          <h4>DIAMOND TIER</h4>
          <p>
            Early access to new Fanbase features on the plaform, and 30,000
            loves to use on Fanbase, a Fanbase T-shirt, an early investor gold
            verified badge and access to a private dinner for diamond level
            investors with Founder and Exec Team
          </p>
          <div>Select</div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
