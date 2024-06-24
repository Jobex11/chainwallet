import React from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-gray-200 text-sm p-3 flex items-center justify-between border-t border-gray-600 shadow-sm">
      <Link href="/">
        <div className="flex flex-col justify-center items-center hover:text-gray-600 ">
          <HomeIcon />
          <h1>Home</h1>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col justify-center items-center hover:text-gray-600">
          <WalletIcon />
          <h1>Wallet</h1>
        </div>
      </Link>

      <div className="bg-pink-600 p-2 border border-none shadow-lg rounded-full">
        <SwapHorizIcon />
      </div>
      <Link href="/">
        <div className="flex flex-col justify-center items-center hover:text-gray-600">
          <CurrencyExchangeIcon />
          <h1>Earn</h1>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col justify-center items-center hover:text-gray-600">
          <SettingsIcon />
          <h1>Settings</h1>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
