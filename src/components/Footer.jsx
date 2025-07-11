import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 py-10">
      {/* Top Grid Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">
              Safety Information
            </li>
            <li className="hover:underline cursor-pointer">
              Cancellation Options
            </li>
            <li className="hover:underline cursor-pointer">
              Our Covid-19 Response
            </li>
            <li className="hover:underline cursor-pointer">
              Supporting people with disabilities
            </li>
            <li className="hover:underline cursor-pointer">
              Report a neighbourhood concern
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">
              Airbnb.org: Disaster relief housing
            </li>
            <li className="hover:underline cursor-pointer">
              Support: Afghan refugees
            </li>
            <li className="hover:underline cursor-pointer">
              Celebrating diversity & belonging
            </li>
            <li className="hover:underline cursor-pointer">
              Combating discrimination
            </li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Try hosting</li>
            <li className="hover:underline cursor-pointer">
              AirCover: protection for hosts
            </li>
            <li className="hover:underline cursor-pointer">
              Explore hosting resources
            </li>
            <li className="hover:underline cursor-pointer">
              Visit our community forum
            </li>
            <li className="hover:underline cursor-pointer">
              How to host responsibly
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">
              Learn about new features
            </li>
            <li className="hover:underline cursor-pointer">
              Learn from our founders
            </li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Airbnb Luxe</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-10 pt-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-4 md:space-y-0">
        {/* Left text */}
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Airbnb, Inc —
          <span className="mx-1 hover:underline cursor-pointer">Privacy</span>—
          <span className="mx-1 hover:underline cursor-pointer">Terms</span>—
          <span className="mx-1 hover:underline cursor-pointer">Sitemap</span>
        </div>

        {/* Language & Currency */}
        <div className="flex items-center gap-2">
          <LanguageIcon fontSize="small" className="text-gray-600" />
          <span className="underline text-blue-600 cursor-pointer">
            English (US)
          </span>
          <AttachMoneyIcon fontSize="small" className="text-gray-600" />
          <span className="underline text-blue-600 cursor-pointer">USD</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-gray-700 text-xl">
          <FacebookIcon className="cursor-pointer hover:text-blue-600" />
          <XIcon className="cursor-pointer hover:text-black" />
          <InstagramIcon className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
