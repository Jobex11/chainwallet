import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
const BodySection = () => {
  return (
    <div>
      <div>
        <h4>
          USD <span>ETH</span>
        </h4>
        <h1>$0.00</h1>
        <h3>0.0000</h3>
        <Button>
          <span>Swap</span>
          <SwapHorizIcon />
        </Button>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BodySection;
