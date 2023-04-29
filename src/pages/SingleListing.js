import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

function SingleListing() {
  const [showMore, setShowMore] = useState(false);
  const text =
    'Fanbase is a free to download, free to use microcast social media platform with subscription capability for every user. Fanbase enables anyone to monetize their content charging $4.99 a month per subscriber, for exclusive access to photos, videos, audio chat rooms, and long-form content. Fanbase also has virtual currency known as "Love." That allows users to tip other users half a penny per love. Users can give love on any type of content on Fanbase.';

  return (
    <div>
    <Navbar/>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Side */}
        <div className="hero-left">
        <div className="yt-video">
        <iframe width="500" height="300" className="rounded-[40px] p-4" src="https://www.youtube.com/embed/M2E75mvofcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="amount-raised"><p>US$3,209,959.73 Raised</p></div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <h6>INVEST IN FANBASE TODAY!</h6>
          <h2>Microcast Social Media</h2>
          <p>
            {showMore ? text : `${text.substring(0, 150)}`}
            <button
              className="text-secondary font-bold text-start"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>
          <button className="py-3 px-20 mt-2 ml-1 bg-secondary rounded-[18px] text-white font-bold outline-none">
            Invest Now
          </button>
          <div className="caution">
            <p>
              This Reg CF offering is made available through StartEngine
              Capital, LLC. This investment is speculative, illiquid, and
              involves a high degree of risk, including the possible loss of
              your entire investment.
            </p>
          </div>
        </div>
      </section>

      <section>
        <BottomNav/>
      </section>
    </div>
  );
}

export default SingleListing;
