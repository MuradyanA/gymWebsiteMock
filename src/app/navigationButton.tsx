import Link from "next/link";
import React from "react";
import ArrowToTopRightIcon from "./icons/ArrowToTopRightIcon";
import { righteous } from "./fonts";


export default function NavigationButton({text}: {text: string}) {
  return (
    <Link
      href={""}
      className={`${righteous.className} inline-flex items-center gap-2 cursor-pointer`}
    >
      LEARN MORE <ArrowToTopRightIcon />
    </Link>
  );
}
