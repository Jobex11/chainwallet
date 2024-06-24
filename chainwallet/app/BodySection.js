import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {} from "@mui/material";
import Image from "next/image";
const BodySection = () => {
  return (
    <div className="flex flex-col items-center p-4 overflow-none">
      <div className="my-2">
        <h4 className="text-gray-200 text-sm">
          USD <span className="text-gray-400">ETH</span>
        </h4>
        <h1 className="text-gray-200 text-3xl gap-0">$ 0.00</h1>
        <h3 className="text-gray-400 text-base">0.0000</h3>
        {/*this should be a Button not a Div*/}
        <div className="my-1 flex justify-center items-center text-lg text-gray-200 bg-pink-600 gap-2  border border-1 border-gray-400 rounded-full shadow-sm shadow-gray-200 py-2 px-4 cursor-pointer hover:bg-pink-700">
          <span>Swap</span>
          <SwapHorizIcon />
        </div>
      </div>
      {/* Refer and Earn */}
      <div className="mb-1 flex flex-row justify-between rounded-xl border border-1 border-gray-700 w-full text-pink-800 py-2 px-3 cursor-pointer">
        <div className="flex flex-row gap-2">
          <CardGiftcardIcon />
          <h3 className="text-gray-200">Refer friends and Earn</h3>
        </div>
        <div>
          <ArrowForwardIosIcon />
        </div>
      </div>
      {/* Friends */}
      <div className="flex flex-row justify-between rounded-xl border border-1 border-gray-700 w-full text-gray-200 py-2 px-3 my-2 cursor-pointer text-sm">
        <div className="flex flex-row">
          <div className="h-5 w-5">
            <Image width={100} height={100} src="/images/fire.png" />
          </div>
          <h3>.MC</h3>
        </div>
        <div className="flex flex-row">
          <h3>W</h3>
          <h3>.MC</h3>
        </div>
        <div className="gap-1 flex flex-row">
          <div className="h-5 w-5">
            <Image width={100} height={100} src="/images/animal.png" />
          </div>
          <h3>PEPE</h3>
        </div>
        <div className="gap-1 flex flex-row">
          <h3>B</h3>
          <h3>BIAO</h3>
        </div>
      </div>
      {/* You assets */}
      <div className="w-full h-full p-2">
        <div className="flex flex-row justify-between text-sm text-gray-200 py-2 px-3  gap-2 rounded-xl cursor-pointer hover:border-gray-900">
          <h3 className="text-gray-200">Your assets</h3>
          <div className="text-pink-800">
            See all <ArrowForwardIcon />
          </div>
        </div>
        <div className="flex flex-row justify-between text-sm text-gray-200 py-2 px-3  gap-2">
          <div className="flex flex-row gap-2">
            <div className="w-10 h-10">
              <Image
                src="/images/ethereum.png"
                width={100}
                height={100}
                alt="eth"
              />
            </div>

            <div>
              <h1 className="text-lg">Ethereum</h1>
              <h3 className="text-sm text-gray-400">ETH</h3>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg">$0.00</h1>
            <h3 className="text-sm text-gray-400">0</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between text-sm text-gray-200 py-2 px-3  gap-2">
          <div className="flex flex-row gap-2">
            <div className="w-10 h-10">
              <Image
                src="/images/solana.png"
                width={100}
                height={100}
                alt="eth"
              />
            </div>

            <div>
              <h1 className="text-lg">Solana</h1>
              <h3 className="text-sm text-gray-400">SOL</h3>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg">$0.00</h1>
            <h3 className="text-sm text-gray-400">0</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
