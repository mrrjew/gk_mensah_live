import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { tiktok } from "public/assets/icons";

export default function Hero() {
  return (
    <div className="flex w-full flex-col h-[100vh] justify-center">
      <div className="flex flex-col w-full items-center">
        <h2 className="sm:flex text-center justify-center mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          G.K Mensah{" "}
          <span className="flex ml-2 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Premium Live
            <Image className="hidden sm:block" src={tiktok} width={120} height={100} alt="tiktok" />
          </span>
            <center>
               <Image className="sm:hidden" src={tiktok} width={120} height={100} alt="tiktok" />
            </center>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-lg font-medium text-gray-600 text-md sm:text-xl/8">
          Get access to exclusive messages and prophecies - via zoom links, from
          the Major Prophet G.K Mensah(General Overseer of Mega Blessing Chapel
          International) that will change your life and get you ahead of your
          folks
        </p>

        <ButtonPrimary type="button" className="my-10">
          <Link href={"/plans"}>Get premium access now!</Link>
        </ButtonPrimary>
      </div>
    </div>
  );
}
