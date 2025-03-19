import React from "react";
import { righteous } from "./page";
import NavigationButton from "./navigationButton";
import BoltIcon from "./icons/BoltIcon";

interface IData {
  imgPath: string;
  header: string;
  text: string;
}

export default function TrainingInfoEntity({ imgPath, header, text }: IData) {
  return (
    <div className="p-2 text-white bg-[#212121] rounded-md w-72 hover:bg-[#d9fa58] hover:text-black duration-200 group">
      <img className="w-23 h-23" src={imgPath} />
      <div className="pl-5">
        <p className={`${righteous.variable} text-lg`} style={{ fontFamily: "var(--font-righteous)" }}>
          {header}
        </p>
        <p className="text-gray-500">{text}</p>
        <div className="mt-3 flex justify-between">
          <div className="mt-3">
            <NavigationButton text="LEARN MORE" />
          </div>
          <div className="mr-5 bg-[#d9fa58] p-2 rounded-full group-hover:bg-black duration-200">
            <BoltIcon stylings="text-black group-hover:text-gray-300 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
