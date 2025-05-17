import ButtonPrimary from "@/shared/ButtonPrimary";
import { FiArrowUpRight } from "react-icons/fi";

export default function PremiumLink() {
  const link = "https://meet.google.com/abc-defg-hij";
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

          <div className="my-6 sm:my-12 ">
            <div className="mt-2 flex items-center flex-col">
              <div className="block w-full h-max text-wrap rounded-md bg-white px-3 py-3.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <p className="text-wrap">
                  {link ? link : "There's no meeting link posted at the moment"}
                </p>
              </div>

              <div className="my-6 flex max-sm:`flex-col items-center">
                <div className="block flex items-center w-full h-max text-wrap rounded-md bg-white px-3 py-3.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  Copy link <FiArrowUpRight />
                </div>

                <div className="block flex items-center w-full h-max text-wrap rounded-md bg-white px-3 py-3.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  Visit link <FiArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
