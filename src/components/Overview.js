import React from "react";
import checkbox from "../images/checkbox.png";
import fanbaseIMG1 from "../images/FanbaseImg_1.jpeg";
import fanbaseIMG2 from "../images/FanbaseImg_2.jpeg";
import fanbaseIMG3 from "../images/FanbaseImg_3.jpeg";
import fanbaseIMG4 from "../images/FanbaseImg_4.jpeg";
import fanbaseIMG5 from "../images/FanbaseImg_5.jpeg";
import fanbaseIMG6 from "../images/FanbaseImg_6.png";
import fanbaseIMG7 from "../images/FanbaseImg_7.jpeg";
import fanbaseIMG8 from "../images/FanbaseImg_8.jpeg";
import fanbaseIMG9 from "../images/FanbaseImg_9.jpeg";
import fanbaseIMG10 from "../images/FanbaseImg_10.jpeg";
import fanbaseIMG11 from "../images/FanbaseImg_11.jpeg";
import fanbaseIMG12 from "../images/FanbaseImg_12.jpeg";
import fanbaseIMG13 from "../images/FanbaseImg_13.jpeg";
import fanbaseIMG14 from "../images/FanbaseImg_14.jpeg";
import fanbaseIMG15 from "../images/FanbaseImg_15.jpeg";
import fanbaseIMG16 from "../images/FanbaseImg_16.jpeg";
import fanbaseIMG17 from "../images/FanbaseImg_17.jpeg";

function Overview() {
  return (
    <section id="/">
        <div className="reason2invest">
          <h2>REASONS TO INVEST</h2>

          <div className="checkbox">
            <img src={checkbox} alt="checkbox" className="w-[30px] h-[30px]" />
            <p>
              Fanbase allows users to individually create programming that is
              directly centered on their points of interest and entertainment
              without paying for hundreds of shows that they are not interested
              in viewing.
            </p>
          </div>
          <hr></hr>
          <div className="checkbox">
            <img src={checkbox} alt="checkbox" className="w-[30px] h-[30px]" />
            <p>
              Consumer spending on the top one hundred subscription applications
              rose by at least 30% globally, and by over 25% in the United
              States.*
            </p>
          </div>

          <hr></hr>
          <div className="checkbox">
            <img src={checkbox} alt="checkbox" className="w-[30px] h-[30px]" />
            <p>
              Subscription revenue went up 164% over the past 12 months, with
              Android MRR growth rate of 35% since launching in July 2021.
            </p>
          </div>
        </div>

      <div className="sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
        <div className="flex-1 flex flex-col">
          <p></p>
        </div>
      </div>

      <div className="overview-subheading">
        <h6>
          OUR TRACTION <hr></hr>
        </h6>
        <h2>Our Traction Milestones in 2022 include:</h2>
        <ul>
          <li>Average engagement time for 2022 - 1 hour 31 minutes a day.</li>
          <li>Over 270k Users</li>
        </ul>
        <h2>Our Development Accomplishments in 2022 include:</h2>
        <p>
          <span className="font-bold">Flickz, </span>our short form video editor
          launched on
          <span className="font-bold"> February 16th, 2022.</span>
        </p>
        <p>
          <span className="font-bold">Fanbase Audio 2.0, </span>drop in audio
          chat launched on
          <span className="font-bold"> April 13th, 2022.</span>
        </p>
        <p>
          <span className="font-bold">TikTok Migration Functionality </span>
          launched on
          <span className="font-bold"> June 23rd, 2022.</span>
        </p>
        <div className="overview-video">
          <h4>
            Fanbase Audio Exclusive Subscriber Rooms <br></br>{" "}
            <span className="font-normal text-lg">launched on</span> July 21st,
            2022.
          </h4>
          <iframe
            src="https://player.vimeo.com/video/749841842"
            width={600}
            height={300}
            title="video"
          ></iframe>
          <h4>
            New Unlimited Subscriptions Functionality <br></br>{" "}
            <span className="font-normal text-lg">launched on</span> August 8th,
            2022.
          </h4>
          <iframe
            src="https://player.vimeo.com/video/752327135"
            width={600}
            height={300}
            title="video"
          ></iframe>
        </div>
      </div>

      <div className="overview-subheading">
        <h6>
          OVERVIEW <hr></hr>
        </h6>
        <h2>Pioneering Microcast Social Media.</h2>
        <p>
          Fanbase is a new frontier of social media, placing microcast and
          monetization capability at the forefront to the benefit of all users.
          By allowing any user to make money from their social content, they
          have the opportunity to create enormous consistent monthly revenue via
          their audience and increase authentic user engagement among their most
          interested followers. Fanbase users can post photos, videos, short
          form videos, create audio rooms, stories, broadcast live and post long
          form content to the platform to engage with audiences in a multitude
          of ways.
        </p>
        <img src={fanbaseIMG1} alt="fanbase" />
        <h2>What Is Microcast Social Media?</h2>
        <img src={fanbaseIMG2} alt="fanbase" />
        <p>
          Before we explain Microcast media, here are a couple examples of
          existing media distribution infrastructures.
        </p>
        <h2>The Broadcast Media Format.</h2>
        <img src={fanbaseIMG3} alt="fanbase" />
        <p>
          Smaller subscription video on demand streaming apps with thousands of
          movies and shows like{" "}
          <strong>Netflix, Disney+, Hulu, HBO MAX, Apple TV+ </strong>and{" "}
          <strong>Prime Video</strong>.
        </p>
        <h2>Now let's take a look at Microcast Media.</h2>
        <img src={fanbaseIMG4} alt="fanbase" />
        <p>
          Individual direct to person or brand subscription channels that house
          niche content like{" "}
          <strong>
            Beyonce, The Lakers, Kylie Jenner, Nike, Louis Vuitton
          </strong>{" "}
          or an <strong>Influencer</strong> inside a social network.
        </p>
        <p>
          Microcast subscriptions will allow users to individually create
          programming that is directly centered on their points of interest and
          entertainment without paying for hundreds of shows that they are not
          interested in viewing.
        </p>
        <h6>
          THE PROBLEM <hr></hr>
        </h6>
        <h2>
          We believe existing social media platforms are suppressing users'
          reach and content to increase ad revenue.
        </h2>
        <p>
          We believe in order for ad-based platforms like Instagram to make
          money they must suppress the reach of users. If a user can reach
          millions of people with their content, brands would pay the user
          directly and not pay Instagram for ads. Therefore Instagram must
          intentionally limit the reach of your content by not showing it to all
          your followers.
        </p>
        <img src={fanbaseIMG5} alt="fanbase" />
        <a
          href="https://www.statista.com/statistics/271258/facebooks-advertising-revenue-worldwide/"
          className="text-lightGreen italic underline ml-5"
        >
          source
        </a>
        <p>
          More and more users on these platforms are increasingly frustrated. We
          have entered a true crisis in which the platforms are getting rich off
          of the creativity of the users, but own a monopoly on the advertising
          and revenue stemming from the entire user base.
        </p>
        <p>
          Although other platforms are attempting to address these issues, they
          do not provide the organic ability to grow their following on the
          platform, leaving users without a current major following on other
          platforms in the dark. Some current platforms that monetize lean
          toward mainly adult content, which does not instill confidence in the
          plethora of creator types out there looking to monetize. Also making
          them non-brand safe.
        </p>
        <h2>
          The issue of negative treatment of creators and frustrated users on
          other platforms is well documented.
        </h2>
        <p>
          In July and September of 2022, celebrities Kim Kardiashian, Kylie
          Jenner, and Cardi B expressed their frustration with Instagram and its
          attempts to mimic rival platform Tiktok. The changes have affected the
          algorithm and visibility of their content, resulting in lower
          engagement with users. (
          <a
            href="https://www.nbcnews.com/tech/tech-news/instagram-responds-backlash-changes-kim-kardashian-kylie-jenner-joined-rcna40027"
            className="text-lightGreen underline"
          >
            source
          </a>
          )
        </p>
        <img src={fanbaseIMG6} alt="fanbase" />
        <p className="italic font-normal text-sm">
          *These Celebrities are not endorsing Fanbase and have not expressed
          support for the app. They have solely commented on other social media
          apps.
        </p>
        <a
          href="https://www.nbcnews.com/tech/tech-news/instagram-responds-backlash-changes-kim-kardashian-kylie-jenner-joined-rcna40027"
          className="italic underline ml-5 text-lightGreen"
        >
          {" "}
          source
        </a>
        <p>
          In August of 2022, social media platform Triller was hit with a flurry
          of lawsuits and accusations from producers Swizz Beatz and Timbaland,
          Sony Music, and numerous other Black creators. The claims failure to
          pay for “Verzus”, music royalties, and a black creator program.{" "}
        </p>
        <img src={fanbaseIMG7} alt="fanbase" />
        <a
          href="https://www.rollingstone.com/culture/culture-features/black-creator-tiktok-strike-dance-law-1334553/"
          className="italic underline ml-5 text-lightGreen"
        >
          {" "}
          source
        </a>
        <p>
          We believe creators contribute so much to social media platforms only
          to have their pages deactivated, their content throttled down, and
          their visibility diminished, all while not compensating them for their
          contributions to the platform over and over again.
        </p>
        <h6>
          THE SOLUTION <hr></hr>
        </h6>
        <h2>
          Combining full content monetization and the scalability of a social
          network with NO content suppression.
        </h2>
        <p>
          Fanbase bridges the gap between traditional social platforms with the
          monetization aspects of other subscription-based applications by
          giving users the opportunity to do both natively in our application.
          Users can grow their organic followings and find their audience while
          also offering subscriber paid content for those who want exclusive
          access.{" "}
        </p>
        <img src={fanbaseIMG8} alt="fanbase" />
        <p>
          The ability for users to reach every single person that follows them
          creates the opportunity to generate limitless amounts of revenue and
          simultaneously engage with their suppressed audience. That is the
          difference between Fanbase and platforms that monetize from running
          ads.{" "}
        </p>
        <h6>
          THE MARKET <hr></hr>
        </h6>
        <h2>Subscription based applications are surging.</h2>
        <p>
          Over 50% of in-app purchases in 2020 were recurring. On Fanbase,
          creating a subscriber relationship directly with other users creates
          the opportunity to tap into multiple verticals of the subscriber
          economy on one platform. (
          <a
            href="https://www.insiderintelligence.com/content/over-50-of-in-app-purchases-were-recurring-2020"
            className="text-lightGreen underline"
          >
            source
          </a>
          )
        </p>
        <img src={fanbaseIMG9} alt="fanbase" />
        <a
          href="https://www.washingtonpost.com/business/2021/06/01/subscription-boom-pandemic/"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        <h2>
          Gen Z and Black content creators continue to drive social media
          culture.
        </h2>
        <img src={fanbaseIMG10} alt="fanbase" />
        <p>
          The Fanbase persona is Gen Z. Gen Zers are trendsetters. Next year, 74
          million people in the U.S. will be part of “Gen Z”, which will make it
          the largest generation of all. (
          <a
            href="https://wallaroomedia.com/blog/social-media/tiktok-statistics/"
            className="text-lightGreen underline"
          >
            source
          </a>
          )
        </p>
        <img src={fanbaseIMG11} alt="fanbase" />
        <p>
          A{" "}
          <a
            href="https://www.pewresearch.org/internet/2018/03/01/social-media-use-in-2018/pi_2018-03-01_social-media_a-01/"
            className="text-lightGreen underline text-base"
          >
            survey
          </a>{" "}
          of US social media users by Pew Research shows that:
          <ul>
            <li>
              On Instagram, the highest number of users are African Americans at
              26% topping White and Hispanic users.
            </li>
            <li>26% of people who identify as Black use Twitter.</li>
            <li>
              Black creators and users on YouTube were polled at 76% running a
              close second behind Hispanic users at 78%.
            </li>
            <li>70% of Black respondents use Facebook.</li>
          </ul>
        </p>
        <h6>
          WHAT WE DO <hr></hr>
        </h6>
        <h2>We make moving to Fanbase easy.</h2>
        <p>
          Easily migrate all your Instagram and TikTok content and captions over
          to Fanbase in just a few steps.
        </p>
        <img src={fanbaseIMG12} alt="fanbase" />
        <h6>
          THE BUSINESS MODEL <hr></hr>
        </h6>
        <h2>20% of all in-app purchases</h2>
        <p>
          Fanbase takes a 20% portion of all in-app purchases from users,
          including user purchases of ‘Love’ packs or subscriptions to their
          favorite creators.
        </p>
        <img src={fanbaseIMG13} alt="fanbase" />
        <p>
          We payout all earned revenue over $25 to users at the beginning of
          every month
        </p>
        <h6>
          HOW WE ARE DIFFERENT <hr></hr>
        </h6>
        <h2>
          We don’t shadowban, suppress content, or run ads. Giving full reach
          and visibility to every user.{" "}
        </h2>
        <p>
          Our competition ranges from traditional social networks, which we
          believe fail to adequately provide reach to users’ audiences on their
          own behalf, or subscription-based services like Patreon, which help
          users monetize audiences from other platforms, but we believe fail to
          provide adequate creator tools and native functionality.
        </p>
        <img src={fanbaseIMG14} alt="fanbase" />
        <p>
          We are a native app with real-time engagement and all of the network
          effects in one place. It's the one-stop-shop for users looking to find
          their own unique audience while building a community and drawing in
          monthly revenue. Because of this, we are also able to send
          notifications to keep users engaged, unlike our other competitors who
          have web apps.{" "}
        </p>
        <p>
          Other subscription-based services allow users to live broadcast in
          real-time, however, their content skews mainly toward adult content
          and we are a place for users of all types.
        </p>
        <img src={fanbaseIMG15} alt="fanbase" />
        <a
          href="https://www.insiderintelligence.com/content/clubhouse-adds-tipping-feature-bid-creators"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        ,
        <a
          href="https://www.socialmediatoday.com/news/instagram-tests-fan-club-stories-nft-style-collectibles-in-app/602180/"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        ,
        <a
          href="https://www.prnewswire.com/news-releases/triller-launches-1st-annual-black-creator-conference-to-promote-black-content-creators--talent-across-all-forms-of-media-september-23--24-in-atlanta-301357365.html"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        ,
        <a
          href="https://www.hollywoodreporter.com/business/digital/tiktok-macro-black-creatives-grant-1235047296/#!"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        ,
        <a
          href="https://thesource.com/2021/11/22/triller-announces-14-million-investment-in-black-creators/"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        ,
        <a
          href="https://www.businesstoday.in/technology/news/story/instagram-rolls-out-subscriptions-to-help-creators-make-money-330722-2022-04-21"
          className="italic underline ml-5 text-lightGreen"
        >
          source
        </a>
        <h6>
          WHY INVEST <hr></hr>
        </h6>
        <h2>Users should have equity in the social apps they use</h2>
        <p>
          The users are what give a social media platform their value. Without
          users the platform has no value. This is why we believe that users
          should have the opportunity to invest in the very platforms they will
          make billion dollar companies.
        </p>
        <img src={fanbaseIMG16} alt="fanbase" />
        <p>
          Fanbase is also leading the conversation in user equity by offering
          the opportunity for anyone to own shares in the very platform they
          use. Be the biggest spokesperson for a social media platform that lets
          you monetize on the front end and have equity on the backend.
        </p>
        <img src={fanbaseIMG17} alt="fanbase" />
      </div>
    </section>
  );
}

export default Overview;
