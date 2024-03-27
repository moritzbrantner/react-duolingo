import "~/styles/globals.css";
import { type NextPage } from "next";
import React from "react";
import _bgSnow from "../../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { LanguageCarousel } from "~/components/LanguageCarousel";



const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  // const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      {/* <LanguageHeader /> */}

      <LanguageCarousel />
    </main>
  );
};

export default Home;
