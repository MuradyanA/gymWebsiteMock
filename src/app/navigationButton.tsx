import Link from "next/link";
import React from "react";
import { righteous } from "./page";
import ArrowToTopRightIcon from "./icons/ArrowToTopRightIcon";

export default function NavigationButton({text}: {text: string}) {
  return (
    <Link
      href={""}
      className={`${righteous.variable} inline-flex items-center gap-2 cursor-pointer`}
      style={{ fontFamily: "var(--font-righteous)" }}
    >
      LEARN MORE <ArrowToTopRightIcon />
    </Link>
  );
}
