import React from "react";
import logo from "../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppStore from "../images/AppStore.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="startengine"
              className="w-[150px] h-[72px] object-contain"
            />
            <p className="text-[14px] leading-[27px]">
              @ {currentYear} All Rights Reserved
            </p>
            <a
              href="https://apps.apple.com/us/app/startengine-startup-investing/id1560434961?shortlink=6g7c1cf5&c=Website%20Header%20Button&pid=Website&source_caller=ui"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={AppStore}
                alt="appstore"
                className="w-[170px] h-[72px] object-contain"
              />
            </a>
          </div>

          <div className="flex-[1-5] w-[65%] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-extrabold text-[18px] leading-[27px]">
                Get To Know Us
              </h4>
              <ul className="list-none mt-4">
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Our Team
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Careers
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-extrabold text-[18px] leading-[27px]">
                Let's Work Together
              </h4>
              <ul className="list-none mt-4">
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Raise Capital
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Scout: Refer A StartUp
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Success Stories
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Partnership
                </li>
              </ul>
            </div>
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-extrabold text-[18px] leading-[27px]">
                Need Help
              </h4>
              <ul className="list-none mt-4">
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Contact Us
                </li>
                <li className="text-[14px] leading-[24px] cursor-pointer">
                  Help Center
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 ">
          <div className="flex flex-row md:mt-o mt-6">
            <FacebookIcon className="mr-4" />
            <TwitterIcon className="mr-4" />
            <LinkedInIcon className="mr-4" />
            <InstagramIcon />
          </div>
          <div className="flex justify-evenly items-center">
            <a
              href="https://www.startengine.com/terms"
              target="_blank"
              rel="noreferrer"
              className="text-secondary mr-7 font-bold"
            >
              Terms of Use
            </a>
            <a
              href="https://www.startengine.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-secondary mr-7 font-bold"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.startengine.com/disclaimer"
              target="_blank"
              rel="noreferrer"
              className="text-secondary mr-7 font-bold"
            >
              Disclaimer
            </a>
            <a
              href="https://www.startengine.com/annual-reports"
              target="_blank"
              rel="noreferrer"
              className="text-secondary mr-7 font-bold"
            >
              Annual Reports
            </a>
            <a
              href="https://www.startengine.com/form-crs"
              target="_blank"
              rel="noreferrer"
              className="text-secondary mr-7 font-bold"
            >
              Form CRS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
