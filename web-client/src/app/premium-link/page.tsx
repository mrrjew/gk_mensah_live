"use client"
import ButtonPrimary from "@/shared/ButtonPrimary";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";



export default function PremiumLink() {
  const link = "https://meet.google.com/abc-defg-hij";
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [isLinkCopied,setIsLinkCopied] = useState(false)
  
    const openLinkInBrowser = () => {
      if (linkRef?.current) {
        linkRef.current.click(); // This will open the link in a new tab if `target="_blank"` is set
      }
    }

    const copyLink = () => {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setIsLinkCopied(true)
          console.log("Link copied to clipboard!");
        })
        .catch((err) => {
          setIsLinkCopied(false)
          console.error("Failed to copy: ", err);
        });
    };
    
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Hurray🥳
          </h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            You have access to premium link now
          </p>

          {/* cto for mobile */}
          <div className="sm:hidden flex w-full items-center justify-center my-12 ">
            <div className="mt-2 flex flex-col gap- space-y-3 py-3 justify-between bg-white shadow-md w-max px-3 rounded-md items-center">
              <Link
                ref={linkRef}
                target="_blank"
                href={link}
                className="text-wrap bg-indigo-200/20 flex items-center p-2 w-full text-left rounded-full text-[12px] text-indigo-600/90"
              >
                <FaLink className=" mx-2 text-gray-600 text-lg" />{" "}
                {link ? link : "There's no meeting link posted at the moment"}
              </Link>

              <div className="my-6 flex gap-3 w-full items-center">
                <button
                  onClick={copyLink}
                  className="flex-1 text-center font-semibold flex items-center justify-center text-wrap rounded-md px-6 py-2 text-base text-gray-900 bg-gray-300/70 text-sm"
                >
                  <p className="flex items-center">
                    {!isLinkCopied ? (
                      <IoCopyOutline className="mr-2 text-lg" />
                    ) : (
                      <IoSunnyOutline className="mr-2 text-lg" />
                    )}
                    {!isLinkCopied ? "Copy" : "Copied"}
                  </p>
                </button>

                <button
                  onClick={openLinkInBrowser}
                  className="flex-1 font-semibold flex items-center justify-center text-wrap rounded-md px-6 py-2 text-base text-white bg-indigo-600/90 text-sm"
                >
                  <p className="flex items-center">
                    <HiMiniArrowTopRightOnSquare className="mr-2 text-lg" />{" "}
                    Visit
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* cto for large screen*/}
          <div className="hidden sm:flex w-full items-center justify-center my-6 sm:my-12 ">
            <div className="mt-2 flex gap-4 justify-between bg-white shadow-md w-3/4 px-4 rounded-md items-center">
              <Link
                ref={linkRef}
                target="_blank"
                href={link}
                className="text-wrap text-indigo-600/90"
              >
                {link ? link : "There's no meeting link posted at the moment"}
              </Link>

              <div className="my-6 flex gap-3 items-center">
                <button
                  onClick={copyLink}
                  className="w-full block text-center font-semibold flex items-center w-full h-max text-wrap rounded-md px-3 py-1.5 text-base text-gray-900/80 bg-gray-300/70 sm:text-sm/6"
                >
                  <p className="flex items-center">
                    {!isLinkCopied ? (
                      <IoCopyOutline className="mr-2 text-lg" />
                    ) : (
                      <IoSunnyOutline className="mr-2 text-lg" />
                    )}
                    {!isLinkCopied ? "Copy" : "Copied"}
                  </p>
                </button>

                <button
                  onClick={openLinkInBrowser}
                  className="w-full block flex bg-indigo-600/90 items-center w-full h-max text-wrap rounded-md px-3 py-1.5 text-base text-white bg-indigo-600/90 bg-sm:text-sm/6"
                >
                  <p className="flex items-center">
                    <HiMiniArrowTopRightOnSquare className="mr-2" /> Visit
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
