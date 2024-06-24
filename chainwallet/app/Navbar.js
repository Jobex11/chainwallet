"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button"; // Import Button from Material-UI
import SyncIcon from "@mui/icons-material/Sync";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Navbar = () => {
  return (
    <div className="p-3 text-gray-400 text-lg flex items-center justify-between border-b border-gray-500 shadow-sm">
      <div className="flex flex-row gap-2">
        <div className="rounded-full border border-1">
          h
          {/*
          <Image
            src="https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain"
            alt="Example Image"
            width={100}
            height={50}
            layout="responsive" />
          */}
        </div>
        <div>
          <section className="flex">
            <h1 className="text-gray-100">0x123..5678</h1>
            <ContentCopyIcon className="" />
          </section>
          <section className="text-sm">Morphius</section>
        </div>
      </div>
      <div className="flex gap-4 text-bold">
        <Button className="rounded-2xl bg-gray-800 opacity-1 text-sm ">
          <div className="flex justify-center gap-1 text-yellow-500 text-bold">
            <LockOpenIcon fontSize="small" />
            <h2 className="text-base">BETA</h2>
          </div>
        </Button>
        <Link href="/" className="hover:text-yellow-700">
          <ExitToAppIcon />
        </Link>
        <Link href="/" className="hover:text-yellow-700">
          <SyncIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
